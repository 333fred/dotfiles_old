/**
 * The authentication module
 */
var authentication = (function () {

    var authURL = 'https://getpocket.com/signup?src=extension&route=/extension_login_success';
    // var authURL = 'https://admin:s3krit@nick1.dev.readitlater.com/signup?src=extension&route=/extension_login_success';
    var afterLoginCallback;

    // If we are not able to show the login popup from the toolbar
    // we show a login window. This is especially important for Chrome as
    // in Safari we can trigger open the login popup but within Chrome that's
    // not possible
    var showLoginWindow = function(callback,url) {

        afterLoginCallback = callback;

        // Open a new window for the login signup page

        if (isSafari()) {
            var nwin = safari.application.openBrowserWindow();
            nwin.activeTab.url = authURL;
            return;
        }

        // experimental logic
        var variant = 'original';
        var tempAuthURL = authURL;
        if (isChromeOnly()) {
            if (typeof getSetting('alreadyLoggedIn') == 'undefined')
            {
                chrome.cookies.get({url:'http://getpocket.com',name:'sess_user_id'},function(cookie)
                {
                    setSetting('alreadyLoggedIn',(cookie == null) ? '0' : '1');
                    showLoginWindow(callback,url);
                });
                return;
            }
            // Valid options: "control", "controlfull", "controlfullgsf", "advertising", "simpleemail", "zeroregistration"
            // after we get the endpoint, refer to actual setting
            if (getSetting('alreadyLoggedIn') == '0')
            {
                variant = getSetting("experimentVariant") ? getSetting("experimentVariant") : 'control';

                tempAuthURL += '&forcevariant=' + variant;
                if (typeof getSetting("experimentVariant") !== 'undefined')
                {
                    tempAuthURL += '&t=extension_install_signup_v1';
                }
                if (typeof url == 'string')
                {
                    tempAuthURL += '&firsturl=' + encodeURIComponent(url);
                }

                ril.sendAbTestRegister(getSetting('guid'),getSetting('oauth_token'),'extension_install_signup_v1',variant);
            }
            setSetting("alreadyLoggedIn", undefined);
        }

        if (variant == 'original' || variant == 'control') {
            // Opera does not hide the url bar of the window, although
            // we declare the type as popup so we have to make the window
            // a bit taller in Opera
            var width  = 430;
            var height = isOpera() ? 660 : 600;

            chrome.windows.create({
                'url': tempAuthURL,
                'type': 'popup',
                'width': width,
                'height': height,
                'left': Math.floor((screen.width / 2) - ((width + 1) / 2)),
                'top': Math.floor((screen.height / 2) - (height / 2))
            }, function () {});
        }
        else {
            window.open(tempAuthURL);
        }
    };

    /**
     * If the login process was successfully this function needs to be
     * called to cleanup and further steps that are after login necesary
     * @param  {Function} loginSuccessCallback Callback after login cleanup was successfully
     */
    var onLoginSuccess = function(loginSuccessCallback) {
        if (isChrome()) {
            // Search the extension login success window and close it
            var variant = getSetting("experimentVariant") ? getSetting("experimentVariant") : 'control';
            getAllTabs(function(tabs) {
                tabs.forEach(function(tab) {
                    var url = tab.url;
                    var windowId = tab.windowId;
                    if (url.indexOf("extension_login_success") !== -1) {
                        if (variant == 'controlfull' || 
                            variant == 'controlfullgsf' || 
                            variant == 'advertising' ||
                            variant == 'simpleemail' || 
                            variant == 'zeroregistration') {
                            // for experiments
                            chrome.tabs.remove(tab.id, function() {});
                        }
                        else {
                            // for everyone else
                            chrome.windows.remove(windowId, function() {});
                        }
                    }
                });
            });
        }
        else {
            // all tabs
            var browserWindows = safari.application.browserWindows;
            for (var i = 0; i < browserWindows.length; i++) {
                var browserWindow = browserWindows[i];
                var tabs = browserWindow.tabs;
                var shouldCloseBrowserWindow = false;
                for (var j = 0; j < tabs.length; j++) {
                    var tab = tabs[j];
                    var url = tab.url;
                    if (typeof url !== "undefined" && url.indexOf("extension_login_success") !== -1) {
                        shouldCloseBrowserWindow = true;
                    }
                }
                if (shouldCloseBrowserWindow) {
                    browserWindow.close();
                }
            }
        }

        // Send message to all tabs to update the option page
        // this will add the username to the options page if
        // it's one of the open tabs
        broadcastMessageToAllTabs({action: "updateOptions"});

        // If no afterLogin action declared try to save the actual
        // loaded page
        if (afterLoginCallback) {
            afterLoginCallback();
            afterLoginCallback = undefined;
        }

        if (loginSuccessCallback) { loginSuccessCallback(); }
    };

    /**
     * Handle messages related to authentifications
     */
    addMessageListener(function(request, sender, sendResponse) {

        if (request.action === "showLoginWindow") {
            showLoginWindow(undefined);

            sendResponse({});
            return false;
        }
        else if (request.action === "loginSuccessfull") {
            // Handle successfull login. This message is sent from the
            // login successfull page
            var loginInformation = request.value;
            ril.login(loginInformation, {
                success: function() {
                    // Handle login success
                    onLoginSuccess();
                },
                error: function() {
                    // TODO: Add error handling
                }
            });

            sendResponse({});
            return true;
        }
        else if (request.action === "logout") {
            // Logout the extension
            ril.logout();

            // Update options in case the option page is open
            broadcastMessageToAllTabs({action: "updateOptions"});

            sendResponse({});
            return false;
        }
    });

    return {
        showLoginWindow: showLoginWindow,
    };
}());
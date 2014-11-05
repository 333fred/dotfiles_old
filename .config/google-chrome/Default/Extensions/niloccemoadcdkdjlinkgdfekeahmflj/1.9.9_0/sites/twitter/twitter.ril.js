/*jshint -W083 */

$(function () {

    if (isSafari() && window.top != window) return;

    var twitterBaseURL = "http://twitter.com";

    /**
     * Helper to get the full path to the file based on the extension
     * @param  {String} path Path to local file
     * @return {String}      Full path to local file based on extension
     */
    var pathHelper = function(path) {
        return (window.safari !== undefined)  ? safari.extension.baseURI + path
                                              : chrome.extension.getURL(path);
    };

    var linksFromTweetText = function($tweetText) {
        return $tweetText.find('a')
                         .not('[data-screen-name]')
                         .not('.twitter-atreply')
                         .not('.twitter-hashtag');
    };

    var twitterIdFromTweet = function(tweetcontainer) {
        var returnid = 0;
        if (typeof $(tweetcontainer).attr('data-tweet-id') == 'string')
        {
            returnid = $(tweetcontainer).attr('data-tweet-id');
        }
        else if (typeof $(tweetcontainer).attr('data-item-id') == 'string')
        {
            returnid = $(tweetcontainer).attr('data-item-id');
        }
        return returnid;
    };

    /**
     * Twitter Options provides information about the interval we try to add
     * Pocket to tweets for different Twitter Site Layouts
     * @type {Object}
     */
    var twitterOptions = {
        refreshInterval: 1500,
        pocketButtons: [
            {
                // Fall 2014 new stream, profile
                name: "pocket-action",
                text: "Save to Pocket",
                container: '.js-stream-item .ProfileTweet-actionList, .permalink .ProfileTweet-actionList',
                after: [".buffer-action", ".js-toggleRt"],
                className: 'ProfileTweet-action js-tooltip',
                selector: '.pocket-action',
                create: function(tweetId, title, className) {
                    var div = document.createElement('div');
                    div.className = "action-pocket-container";

                    // Normal is 10px, this adds space for display: inline-block hidden space
                    // li.style.marginLeft = '12px';

                    var a = document.createElement('a');
                    a.setAttribute('class', className);
                    a.setAttribute('href', '#');
                    a.setAttribute('data-original-title', title); // Tooltip text

                    var i = document.createElement('span');
                    i.setAttribute('class', 'icon icon-pocket');

                    $(a).append(i);
                    $(div).append(a);

                    return div;
                },
                links: function($container) {
                    // Return all links from the container
                    var $tweet = $container.parents('div.tweet');
                    var $tweetText;
                    if (!$tweet.length)
                    {
                        // profile mode
                        var c = $container.closest('.js-tweet');
                        var text = c.find('.js-tweet-text').first();
                        $tweetText = $(text);

                        // Return links from text
                        return linksFromTweetText($tweetText);
                    }
                    else
                    {
                        $tweetText = $tweet.find('p.js-tweet-text');
                        return linksFromTweetText($tweetText);
                    }
                },
                data: function(action) {
                    // Return object with username, html, links and tweetId properties
                    var $action = $(action);
                    var $tweet = $action.parents('div.tweet');
                    var $tweetText;
                    var tweetUsername;
                    var tweetHTML;
                    var tweetLinks;
                    var tweetId;
                    if (!$tweet.length)
                    {
                        $tweet = $action.closest(".ProfileTweet");
                        $tweetText = $tweet.find('p.js-tweet-text');

                        tweetUsername = $tweet.attr('data-screen-name');
                        tweetHTML = $tweetText.html().replace(/\n/g, ' ');
                        tweetLinks = linksFromTweetText($tweetText);
                        tweetId = twitterIdFromTweet($tweet);
                    }
                    else
                    {
                        $tweetText = $tweet.find('p.js-tweet-text');

                        tweetUsername = $tweet.attr('data-screen-name');
                        tweetHTML = $tweetText.html().replace(/\n/g, ' ');
                        tweetLinks = linksFromTweetText($tweetText);
                        tweetId = twitterIdFromTweet($tweet);

                    }
                    return {
                        "username": tweetUsername,
                        "text": tweetHTML,
                        "links": tweetLinks,
                        "tweetId": tweetId
                    };
                }
            }
        ]
    };

    function addLinkWithInformation(tweetUsername, tweetText, tweetLinks, tweetId) {
        var message = {
            identifier: "twitter",
            action: "addURL",
            url: tweetLinks[0].href, // naively use the first link
            title: tweetUsername + ": " + tweetText,
            actionInfo: {
                ref_id: tweetId,
                cxt_ui: 'btn_twitter',
                cxt_url: window.location.href
            }
        };
        sendMessage(message, function (response) {
            // Success, Error message handling happens in the background.js
        });
    }

    function addActionHandler(pocketAction, buttonOption) {
        // Add handler to save link
        $(pocketAction).on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass('pocket-saved'))
            {
                return;
            }

            $(this).addClass('pocket-saved').find('.icon-pocket').addClass('icon-pocket-saved');
            $(this).find('.ProfileTweet-action').attr('data-original-title','Saved to Pocket');

            // Get information for adding link
            var buttonOptionData = buttonOption.data(this);
            var username =  buttonOptionData.username;
            var text = buttonOptionData.text;
            var links = buttonOptionData.links;
            var tweetId = buttonOptionData.tweetId;

            addLinkWithInformation(username, text, links, tweetId);
        });
    }

    /**
     * Go through all tweets and add Pocket to tweets based on the twitter options
     */
    function addPocketToTweets() {
        var buttonsLength = twitterOptions.pocketButtons.length;
        for (var i = 0; i < buttonsLength; i++) {
            var buttonOption = twitterOptions.pocketButtons[i];

            // Get all container objects we want to insert the Pocket button
            var containerObjects = $(buttonOption.container).not('.pocket-inserted');
            var countContainerObjects = containerObjects.length;

            // We don't have to do anything as there is no container anymore
            // with no Pocket button
            if (countContainerObjects === 0) { continue; }

            // Go through all button container and add the Pocket button
            for (var j = 0; j < countContainerObjects; j++) {
                var container = containerObjects[j];

                // If we already added the button to the tweet don't insert it again
                if (container.className.indexOf('pocket-inserted') !== -1) {
                    continue;
                }

                var $container = $(container);
                $container.addClass('pocket-inserted');

                // Get all links from the tweet text
                var links = buttonOption.links($container);

                // Add the pocket button only to tweets with links
                if (links.length === 0) { continue; }

                // Get stuff
                var tweetId = $container.parents('.tweet').attr('data-item-id');
                var pocketAction = buttonOption.create(tweetId, buttonOption.text, buttonOption.className);
                addActionHandler(pocketAction, buttonOption);

                // Append action to container
                $(buttonOption.after).each(function (index, value) {
                    var afterAction = $container.find(value);
                    if (afterAction.length > 0) {
                        afterAction.after(pocketAction);
                        return false; // Skip iteration
                    }
                });
            }
        }
    }

    // Initialization
    var twitterIntervalID;
    function setAddPocketButtonInterval() {
        // Don't add a twitter interval twice
        if (typeof twitterIntervalID === 'undefined') {
            // Call the function with no delay
            addPocketToTweets();
            // Start the interval
            twitterIntervalID = setInterval(addPocketToTweets, twitterOptions.refreshInterval);
        }
    }

    function removeAddPocketButtonInterval() {
        if (typeof twitterIntervalID !== 'undefined') {
            clearInterval(twitterIntervalID);
            twitterIntervalID = undefined;
        }
    }

    var twitterTimeoutID;
    function addScrollTimoutHandler() {
        // Clear the scroll timout as we don't want to fire while the user
        // still scrolling
        removeScrollTimoutHandler();

        // Add scroll timeout that will activate the scroll interval again if
        // the user finished scrolling
        twitterTimeoutID = setTimeout(function() {
            // After the user finished scrolling add Pocket button interval again
            setAddPocketButtonInterval();
        }, 500);
    }

    function removeScrollTimoutHandler() {
        if (typeof twitterTimeoutID !== 'undefined') {
            clearTimeout(twitterTimeoutID);
            twitterTimeoutID = undefined;
        }
    }

    var scrollHandler;
    function addScrollHandler() {
        // Remove scroll handler if necessary
        removeScrollHandler();

        // Add scroll event handler to prevent adding Pocket buttons while
        // the user is scrolling
        scrollHandler = function() {
            // If user starts scrolling remove interval as we don't want to
            // fire any add Pocket buttons interval while scrolling
            removeAddPocketButtonInterval();

            // Add scroll scroll timeout to determine if the user finished
            // scrolling
            addScrollTimoutHandler();
        };

        $(window).on('scroll', scrollHandler);
    }

    function removeScrollHandler() {
        if (typeof scrollHandler !== 'undefined') {
            $(window).off('scroll', scrollHandler);
        }
    }

    function addVisibilityHandler() {
        addHiddenEventListener(function() {
            if (isHidden()) {
                removeAddPocketButtonInterval();
            }
            else {
                setAddPocketButtonInterval();
            }
       });
    }

    function init() {
        // Set the interval to add Pocket buttons to Twitter
        setAddPocketButtonInterval();

        // Add scroll handler for adding Pocket buttons
        addScrollHandler();

        // Add visibility handler for removing timeouts if the tab is hidden
        addVisibilityHandler();
    }

    // Twitter activation via options page
    addMessageListener(function(request, sender, sendResponse) {
        if (request.action === "settingChanged" && request.key === "twitter") {
            if (request.value === "true" || request.value === true) {
                init();
            }
            else if (request.value === "false" || request.value === false) {
                // Remove interval to add the pocket links to tweets if the user deactivates
                // twitter integration
                removeScrollHandler();
                removeScrollTimoutHandler();
                removeAddPocketButtonInterval();
            }
        }
    });

    // Check if Twitter is activated on start
    sendMessage({action: "getSetting", key: "twitter"}, function(response) {
        if (response.value === "true" || response.value === true) {
            init();
        }
    });

});
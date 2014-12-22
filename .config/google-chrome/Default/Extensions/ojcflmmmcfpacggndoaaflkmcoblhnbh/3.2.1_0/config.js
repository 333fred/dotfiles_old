this.gitHash = '3.2.1 [43e8692dd215bbf01a75f36165fde8a8bb9a5429] Fri Dec 12 2014 @ 16:27:22 GMT+0100 (CET)';

requirejs.config({
  'baseUrl': '/',
  'paths': {
    'wb': 'loaders/wunderbits',
    'template': 'loaders/templates',
    'partial': 'loaders/partials',
    'style': 'loaders/styles'
  }
});

define('urls', function() {
  return {
    'baseUrl': './'
  };
});

define('config', function() {
  return {
    'name': "crx-production",
    'package': true,
    'release': '3.2.1',
    'api': {"host":"https://a.wunderlist.com/api"},
    'oldApi': {"host":"https://api.wunderlist.com"},
    'analytics': {"ga":"UA-3239969-30"},
    'clientID': "66b6a7c710ca932826f5",
    'comments': {},
    'domain_name': 'www.wunderlist.com',
    'files': {},
    'google': {
      'chromeAppID': '773050426390-8aff4g1mfag0qpnnonpkt7fdv3pl9u9g.apps.googleusercontent.com'
    },
    'invitations': {"host":"https://invitations.wunderlist.com"},
    'facebook': {"appID":"208559595824260"},
    'payment': {"host":"https://payment.wunderlist.com"},
    'realtime': {"host":"wss://socket.wunderlist.com/api/v1/sync"},
    'tracking': {"host":"https://t.wunderlist.com"},
    'urlshortener': {"host":"https://www.wunderli.st"},
    'features': {},
    'business': {"host":"https://business.wunderlist.com"},
    'webSocketTimeout': "30000",
    'echo': {"host":"https://offer.wunderlist.com"},
    'bugsnagKey': "62adf1a89881cadfe0d5259ab71b7fe2"
  };
});

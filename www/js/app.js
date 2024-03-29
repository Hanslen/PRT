// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.post', {
    url: '/post',
    views: {
      'tab-dash': {
        templateUrl: 'templates/article-post.html',
        controller: 'PostCtrl'
      }
    }
  })
  .state('tab.articles', {
    url: '/articles',
    views: {
      'tab-articles': {
        templateUrl: 'templates/tab-article.html',
        controller: 'ArticleCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chatInfo', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-info.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
    .state('tab.article-list', {
      url: '/articles/:categoryId',
      views: {
        'tab-articles': {
          templateUrl: 'templates/article-list.html',
          controller: 'ArticleDetailCtrl'
        }
      }
    })
    .state('tab.articleInfo', {
      url: '/articles/:categoryId/:articleId',
      views: {
        'tab-articles': {
          templateUrl: 'templates/article-detail.html',
          controller: 'ArticleDetailInfoCtrl'
        }
      }
    })
    .state('tab.articleComment', {
      url: '/articles/comment/:categoryId/:articleId',
      views: {
        'tab-articles': {
          templateUrl: 'templates/article-comment.html',
          controller: 'ArticleCommentCtrl'
        }
      }
    })
  .state('tab.account', {
    url: '/account',
    cache: false,
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl',
        reload: true
      }
    }
  })
  .state('tab.badge', {
    url: '/badge',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-badge.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-settings.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.bug', {
    url: '/bug',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-bug.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.mystory', {
    url: '/mystory',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-mystory.html',
        controller: 'MystoryCtrl'
      }
    }
  })
  .state('tab.collections', {
    url: '/collections',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-collections.html',
        controller: 'MycollectionsCtrl'
      }
    }
  })
  .state('tab.draftlist', {
    url: '/draftlist',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-draftlist.html',
        controller: 'MydraftCtrl'
      }
    }
  })
  .state('tab.draft', {
    url: '/draftlist/:categoryId/:articleId',
    views: {
      'tab-articles': {
        templateUrl: 'templates/article-post.html',
        controller: 'PostCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/account');

});

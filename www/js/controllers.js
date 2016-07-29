angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ArticleCtrl', function($scope, Articles) {
  $scope.articles = Articles.all();
})
.controller('ArticleDetailCtrl', function($scope, $stateParams, Articles){

})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Account, $http, $location) {
  // $scope.account = Account.all();
  $scope.signIn = function(username, password){
    var rates = $http({
         method: 'GET',
         url: 'http://wolfprt.com/ionicServer/signIn.php?email='+username+'&password='+password
       }).success(function(data) {
         if(data["username"] == undefined){
           alert("密码错误QAQQ！");
         }else{
          console.log("登录成功！");
          $scope.account = data;
          $location.path("/tab/articles")
         }
      });
  }
});

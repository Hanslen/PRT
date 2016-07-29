angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ArticleCtrl', function($scope, Articles) {
  $scope.articles = Articles.all();
})
.controller('ArticleDetailCtrl', function($scope, $stateParams, Articles, $location){
  $scope.getPost = function(){
    // console.log("/tab/articles/"+$stateParams.categoryId+"/0");
    // console.log("List");
    $location.path("/tab/articles/"+$stateParams.categoryId+"/0");
    // $location.path("/tab/test");
  }
})
.controller('ArticleDetailInfoCtrl', function($scope){
  console.log("Detail");
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

.controller('AccountCtrl', function($scope, Account, $http, $location, locals) {
  $scope.logged = locals.get("logged");
  console.log($scope.logged);
  if($scope.logged == true){
    console.log("Logged...");
    $scope.user = locals.getObject("user");
  }else{
    console.log("Not Logged..");
    $scope.user = undefined;
  }
  $scope.signIn = function(username, password){
    var rates = $http({
         method: 'GET',
         url: 'http://wolfprt.com/ionicServer/signIn.php?email='+username+'&password='+password
       }).success(function(data) {
         if(data["username"] == undefined){
           alert("密码错误QAQQ！");
         }else{
          locals.setObject("user", data);
          locals.set("logged", true);
          $scope.logged = true;
          // locals.set("username",data.username);
          $scope.user = data;
          $location.path("/tab/account");
         }
      });
  }
  $scope.logOut = function(){
    locals.setObject("logged", false);
    $scope.user = undefined;
    $location.path("/tab/account");
  }
});

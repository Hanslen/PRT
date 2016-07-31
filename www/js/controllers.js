angular.module('starter.controllers', ['ngStorage', 'ngRoute'])
.controller('TabCtrl', function($scope, $sessionStorage, $location){
  $scope.logged = function(){
    if($sessionStorage.user == undefined){
      $scope.forlogin = true;
      return false;
    }
    else{
      $scope.forlogin = false;
      return true;
    }
  }
})
.controller('DashCtrl', function($scope, $sessionStorage, $location) {

})
.controller('PostCtrl', function($scope, Articles,$http, $location, $sessionStorage){
  $scope.articles = Articles.all();
  $scope.post = function(articleType, articleTitle, articleContent){
    var categoryId = Articles.getId(articleType);
    var username = $sessionStorage.user.username;
    if(categoryId == null){
      alert("请选择文章类别0.0");
    }
    else{
      if(articleTitle == undefined || articleContent == undefined){
        alert("标题和文章内容都不能为空0.0")
      }
      else{
        var rates = $http({
             method: 'GET',
             url: 'http://wolfprt.com/ionicServer/postArticle.php?author='+username+'&categoryId='+categoryId+'&title='+articleTitle+'&content='+articleContent
           }).success(function(data) {
             if(data == '1'){
               alert("发布成功！");
                $location.path("/tab/articles");
             }else{
               alert("发布失败。。请检查网络或检查。。")
             }
          });
      }
    }

  }
})
.controller('ArticleCtrl', function($scope, Articles, $sessionStorage, $location) {
  $scope.articles = Articles.all();
})
.controller('ArticleDetailCtrl', function($scope, $stateParams, Articles, $location, $http){
  $scope.categoryTitle = Articles.get($stateParams.categoryId).title;
  $scope.getPost = function(){
    $location.path("/tab/articles/"+$stateParams.categoryId+"/0");
  }
  // var rates = $http({
  //      method: 'GET',
  //      url: 'http://wolfprt.com/ionicServer/postArticle.php?author='+username+'&categoryId='+categoryId+'&title='+articleTitle+'&content='+articleContent
  //    }).success(function(data) {
  //      if(data == '1'){
  //        alert("发布成功！");
  //         $location.path("/tab/articles");
  //      }else{
  //        alert("发布失败。。请检查网络或检查。。")
  //      }
  //   });
})
.controller('ArticleDetailInfoCtrl', function($scope, $stateParams, $location){
  $scope.comment = function(){
    $location.path("/tab/articles/comment/"+$stateParams.categoryId+"/0");
  }
})
.controller('ArticleCommentCtrl', function($scope){})
.controller('ChatsCtrl', function($scope, Chats, $sessionStorage, $location) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Account, $http, $location, locals, $sessionStorage, $route) {
  // $scope.logged = locals.get("logged");
  // console.log($scope.logged);
  // if($scope.logged == true){
  //   $scope.user = locals.getObject("user");
  // }else{
  //   $scope.user = undefined;
  // }
  $scope.user = $sessionStorage.user;
  // console.log("session: "+$sessionStorage.username);
  $scope.signIn = function(username, password){
    var rates = $http({
         method: 'GET',
         url: 'http://wolfprt.com/ionicServer/signIn.php?email='+username+'&password='+password
       }).success(function(data) {
         if(data["username"] == undefined){
           alert("密码错误QAQQ！");
         }else{
          // locals.setObject("user", data);
          // locals.set("logged", true);
          $scope.logged = true;
          $sessionStorage.user = data;
          // locals.set("username",data.username);
          $scope.user = data;
          $location.path("/tab/account");
         }
      });
  }
  $scope.logOut = function(){
    // locals.setObject("logged", false);
    delete $sessionStorage.user;
    $scope.user = undefined;
    alert("退出成功。：）如果要重新登录，请刷新网页._.");
  }
});

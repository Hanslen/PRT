angular.module('starter.controllers', ['ngStorage', 'ngRoute','ngSanitize'])
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
    articleContent= articleContent.replace(/(\r)*\n/g,"<br />").replace(/\s/g," ");
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
.controller('ArticleCtrl', function($scope, Articles, $sessionStorage, $location, $sessionStorage) {
  $scope.articles = Articles.all();
})
.controller('ArticleDetailCtrl', function($scope, $stateParams, Articles, $location, $http, $sessionStorage){
  $scope.categoryTitle = Articles.get($stateParams.categoryId).title;
  $scope.getPost = function(articleId){
    $location.path("/tab/articles/"+$stateParams.categoryId+"/"+articleId);
  }
  var rates = $http({
       method: 'GET',
       url: 'http://wolfprt.com/ionicServer/getArticleList.php?categoryId='+$stateParams.categoryId
     }).success(function(data) {
      //  console.log(data);
       $sessionStorage.serverPosts = data;
       $scope.serverPosts = data;
    });
})
.controller('ArticleDetailInfoCtrl', function($scope, $stateParams, $location, $sessionStorage){
    for (var i = 0; i < $sessionStorage.serverPosts.length; i++) {
      if ($sessionStorage.serverPosts[i].articleId == $stateParams.articleId) {
          $scope.selectPost = $sessionStorage.serverPosts[i];
      }
    }
  // $scope.comment = function(){
  //   $location.path("/tab/articles/comment/"+$stateParams.categoryId+"/0");
  // }
})
.controller('ArticleCommentCtrl', function($scope){})
.controller('ChatsCtrl', function($scope, $sessionStorage, $location, $http, $sessionStorage) {
  // $scope.chats = Chats.all();
  var rates = $http({
       method: 'GET',
       url: '  http://wolfprt.com/ionicServer/getUsers.php'
     }).success(function(data) {
        $scope.chats = data;
        $sessionStorage.chats = data;
    });

})

.controller('ChatDetailCtrl', function($scope, $stateParams, $sessionStorage) {
  for (var i = 0; i < $sessionStorage.chats.length; i++) {
    if ($sessionStorage.chats[i].userId == $stateParams.chatId) {
      $scope.chat = $sessionStorage.chats[i];
      console.log($scope.chat);
    }
  }
})

.controller('AccountCtrl', function($scope, Account, $http, $location, locals, $sessionStorage, $route) {
  $scope.user = $sessionStorage.user;
  // console.log("session: "+$sessionStorage.user);
  $scope.signIn = function(username, password){
    $scope.loading = true;
    var rates = $http({
         method: 'GET',
         url: 'http://wolfprt.com/ionicServer/signIn.php?email='+username+'&password='+password
       }).success(function(data) {
         $scope.loading = false;
         if(data["username"] == undefined){
           alert("密码错误QAQQ！");
         }else{
          // locals.setObject("user", data);
          // locals.set("logged", true);
          $scope.logged = true;
          $sessionStorage.user = data;
          $sessionStorage.user.web_designer = parseInt($sessionStorage.user.web_designer);
          $sessionStorage.user.proj_accom = parseInt($sessionStorage.user.proj_accom);
          $sessionStorage.user.team_accom = parseInt($sessionStorage.user.team_accom);
          $sessionStorage.user.book5 = parseInt($sessionStorage.user.book5);
          $sessionStorage.user.video = parseInt($sessionStorage.user.video);
          $sessionStorage.user.writing = parseInt($sessionStorage.user.writing);
          $sessionStorage.user.newroute = parseInt($sessionStorage.user.newroute);
          $sessionStorage.user.social = parseInt($sessionStorage.user.social);
          $sessionStorage.user.organize = parseInt($sessionStorage.user.organize);
          $sessionStorage.user.Captain = parseInt($sessionStorage.user.Captain);
          $sessionStorage.user.Minster = parseInt($sessionStorage.user.Minster);
          $sessionStorage.user.PACoor = parseInt($sessionStorage.user.PACoor);
          $sessionStorage.user.ViceCaptain = parseInt($sessionStorage.user.ViceCaptain);
          $sessionStorage.user.AE = parseInt($sessionStorage.user.AE);
          $sessionStorage.user.DW = parseInt($sessionStorage.user.DW);
          $sessionStorage.user.LR = parseInt($sessionStorage.user.LR);
          $sessionStorage.user.PS = parseInt($sessionStorage.user.PS);
          $sessionStorage.user.AI = parseInt($sessionStorage.user.AI);
          $sessionStorage.user.FW = parseInt($sessionStorage.user.FW);
          $sessionStorage.user.PR = parseInt($sessionStorage.user.PR);

          // locals.set("username",data.username);
          $scope.user = $sessionStorage.user;
          $location.path("/tab/account");
         }
      }).error(function(data){
        $scope.loading = false;
        console.log("网断了。。。");
        alert("网络问题。。登录失败。。。");
      });
  }
  $scope.logOut = function(){
    // locals.setObject("logged", false);
    delete $sessionStorage.user;
    $scope.user = undefined;
    alert("退出成功。：）如果要重新登录，请刷新网页._.");
  }
  $scope.changePass = function(newPass, newPassAgain){
    $scope.loading = true;
    if(newPass == newPassAgain){
      var rates = $http({
           method: 'GET',
           url: 'http://wolfprt.com/ionicServer/updatePassword.php?email='+$sessionStorage.user.email+'&password='+newPass
         }).success(function(data) {
           alert("修改密码成功！");
           $scope.loading = false;
           $location.path("/tab/account");
        }).error(function(data){
          $scope.loading = false;
          alert("网络问题。。更改失败。。");
        });
    }else {
      $scope.loading = false;
      alert("请输入相同的密码");
    }
  }
});

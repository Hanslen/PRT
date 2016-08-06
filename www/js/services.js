angular.module('starter.services', [])
.factory('Articles', function(){

  //Some fake testing data
   var articles = [{
     id: 0,
     title: "书 · 读后感",
     read: "132",
     focus: "231",
     image: "img/articleIcon/读后感.png",
     content: "此处应有内容QwQ"
   }, {
     id: 1,
     title: "会议记录",
     read: "323",
     focus: "123",
     image: "img/articleIcon/会议记录.png",
     content: "此处应有内容QwQ"
   }, {
     id: 2,
     title: "PRT家书",
     read: "32",
     focus: "12",
     image: "img/articleIcon/家书.png",
     content: "此处应有内容QwQ"
   }, {
     id: 3,
     title: "海盗大会",
     read: "321",
     focus: "231",
     image: "img/articleIcon/海盗大会.png",
     content: "此处应有内容QwQ"
   }, {
     id: 4,
     title: "游记",
     read: "3123",
     focus: "3123",
     image: "img/articleIcon/游记.png",
     content: "此处应有内容QwQ"
   }, {
     id: 5,
     title: "个人转",
     read: "23",
     focus: "123",
     image: "img/articleIcon/个人传.png",
     content: "此处应有内容QwQ"
   }, {
     id: 6,
     title: "有种 · 有趣 · 有料",
     read: "23",
     focus: "123",
     image: "img/articleIcon/有趣有料.png",
     content: "此处应有内容QwQ"
   }, {
     id:7,
     title: "海盗头子的独白",
     read: "23",
     focus: "123",
     image: "img/articleIcon/海盗头子.png",
     content: "此处应有内容QwQ"
   }, {
     id:8,
     title: "工作 · HR",
     read: "23",
     focus: "123",
     image: "img/articleIcon/HR.png",
     content: "此处应有内容QwQ"
   }, {
     id:9,
     title: "工作 · MKT",
     read: "23",
     focus: "123",
     image: "img/articleIcon/MKT.png",
     content: "此处应有内容QwQ"
   }, {
     id:10,
     title: "工作 · BC",
     read: "23",
     focus: "123",
     image: "img/articleIcon/BC.png",
     content: "此处应有内容QwQ"
   }, {
     id:11,
     title: "工作 · PR",
     read: "23",
     focus: "123",
     image: "img/articleIcon/PR.png",
     content: "此处应有内容QwQ"
   }, {
     id:12,
     title: "工作项目组",
     read: "23",
     focus: "123",
     image: "img/articleIcon/Programproject.png",
     content: "此处应有内容QwQ"
   }];

     return {
       all: function() {
         return articles;
       },
       get: function(articleId) {
         for (var i = 0; i < articles.length; i++) {
           if (articles[i].id === parseInt(articleId)) {
             return articles[i];
           }
         }
         return null;
       },
       getId: function(articleTitle){
         for (var i = 0; i < articles.length; i++) {
           if (articles[i].title === articleTitle) {
             return articles[i].id;
           }
         }
         return null;
       }
     };
})
.factory('Account', function(){
  var account = [{
    username: "派派",
    image: "img/paipai.jpg",
    position: "网站开发",
    collections: "",
    draft: "",
    password: "",
    years: "1",
    badge: ""
  }];
  return {
    all: function(){
      return account[0];
    }
  };
})
.factory('locals',['$window',function($window){
      return{
        //存储单个属性
        set :function(key,value){
          $window.localStorage[key]=value;
        },
        //读取单个属性
        get:function(key,defaultValue){
          return  $window.localStorage[key] || defaultValue;
        },
        //存储对象，以JSON格式存储
        setObject:function(key,value){
          $window.localStorage[key]=JSON.stringify(value);
        },
        //读取对象
        getObject: function (key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }

      }
  }]);

angular.module('starter.services', [])
.factory('Articles', function(){

  //Some fake testing data
   var articles = [{
     id: 0,
     title: "书 · 读后感",
     read: "132",
     focus: "231",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 1,
     title: "会议记录",
     read: "323",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 2,
     title: "PRT家书",
     read: "32",
     focus: "12",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 3,
     title: "海盗大会",
     read: "321",
     focus: "231",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 4,
     title: "游记",
     read: "3123",
     focus: "3123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 5,
     title: "个人转",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 6,
     title: "有种 · 有趣 · 有料",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:7,
     title: "海盗头子的独白",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:8,
     title: "工作 · HR",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:9,
     title: "工作 · MKT",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:10,
     title: "工作 · BC",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:11,
     title: "工作 · PR",
     read: "23",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id:12,
     title: "工作项目组",
     read: "23",
     focus: "123",
     image: "",
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
       }
     };
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
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

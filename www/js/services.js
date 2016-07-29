angular.module('starter.services', [])
.factory('Articles', function(){

  //Some fake testing data
   var articles = [{
     id: 0,
     title: "工作经验",
     read: "132",
     focus: "231",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 1,
     title: "读书笔记",
     read: "323",
     focus: "123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 2,
     title: "个人自传",
     read: "32",
     focus: "12",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 3,
     title: "家书",
     read: "321",
     focus: "231",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 4,
     title: "有趣有料",
     read: "3123",
     focus: "3123",
     image: "",
     content: "此处应有内容QwQ"
   }, {
     id: 5,
     title: "PA项目",
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
});

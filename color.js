var Link = {
  setColor : function (color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length ){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }


 var Body = {
   setColor : function (color){
    document.querySelector('body').style.color = color;
  },
   BackgroundColor : function (color){
     document.querySelector('body').style.backgroundColor = color;
   }
 }


 function nightDayHandler(self) {
    var target = document.querySelector('body');
     if(self.value === 'night') {
       Body.BackgroundColor('black');
       Body.setColor('white');
       self.value = 'day';
       Link.setColor('powderblue');

       }

     else {
       Body.BackgroundColor('white');
       Body.setColor('black');
       self.value = 'night';

       Link.setColor('blue');

       var alist = document.querySelectorAll('a');
       var i = 0;
       while(i < alist.length ){
         alist[i].style.color = 'blue';
         i = i + 1;
       }
     }
   }

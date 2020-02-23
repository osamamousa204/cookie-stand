'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// var total = 0;
function randomCutomerNumber (max,min) {
  var randomCutomer = Math.floor(Math.random() * (max - min) + min)
  return randomCutomer;
}
var seatle = {
name : 'seatle',
seatleRandom : function(max,min){
return randomCutomerNumber(max,min)
 },
 counRandom : 0,
 total : 0,
 numCoocky : [],
 totalCoockies : function (){
  
  for (var i = 0;i < hours.length ; i++){
    this.counRandom = Math.floor(this.seatleRandom(65,23) * 6.3); 
    this.total = this.total + this.counRandom;
    this.numCoocky[i] = this.counRandom
    }
    
},

runder : function(){
  var contaner = document.getElementById('sales');
  var article1 = document.createElement('article');
  contaner.appendChild(article1);
  var myTitle = document.createElement('h2');
  article1.appendChild(myTitle);
  myTitle.textContent = this.name;
  var myListedcockies = document.createElement('ul');
  contaner.appendChild(myListedcockies);
  for (var x = 0; x <= hours.length ; x++){
    var myCookies = document.createElement('li');
    myListedcockies.appendChild(myCookies);
    myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
  }
  myCookies.textContent = 'total ' + this.total + ' cookies'

}
}
seatle.seatleRandom();
seatle.totalCoockies();
seatle.runder();

var tokyo = {
  name : 'tokyo',
  tokyoRandom : function(max,min){
  return randomCutomerNumber(max,min)
   },
   
  counRandom : 0,
 total : 0,
 numCoocky : [],
 totalCoockies : function (){
  
  for (var i = 0;i < hours.length ; i++){
    this.counRandom = Math.floor(this.tokyoRandom(24,3) * 1.2); 
    this.total = this.total + this.counRandom;
    this.numCoocky[i] = this.counRandom
    }
    
},
  
  runder : function(){
    var contaner = document.getElementById('sales');
    var article1 = document.createElement('article');
    contaner.appendChild(article1);
    var myTitle = document.createElement('h2');
    article1.appendChild(myTitle);
    myTitle.textContent = this.name;
    var myListedcockies = document.createElement('ul');
    contaner.appendChild(myListedcockies);
    for (var x = 0; x <= hours.length ; x++){
      var myCookies = document.createElement('li');
      myListedcockies.appendChild(myCookies);
      myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
    }
    myCookies.textContent = 'total ' + this.total + ' cookies'
  
  }
  }
  
  tokyo.totalCoockies();
  tokyo.runder();

  var dubai = {
    name : 'dubai',
    dubaiRandom : function(max,min){
    return randomCutomerNumber(max,min)
     },
     
     counRandom : 0,
     total : 0,
     numCoocky : [],
     totalCoockies : function (){
      
      for (var i = 0;i < hours.length ; i++){
        this.counRandom = Math.floor(this.dubaiRandom(38,11) * 3.7); 
        this.total = this.total + this.counRandom;
        this.numCoocky[i] = this.counRandom
        }
        
    },
    
    runder : function(){
      var contaner = document.getElementById('sales');
      var article1 = document.createElement('article');
      contaner.appendChild(article1);
      var myTitle = document.createElement('h2');
      article1.appendChild(myTitle);
      myTitle.textContent = this.name;
      var myListedcockies = document.createElement('ul');
      contaner.appendChild(myListedcockies);
      for (var x = 0; x <= hours.length ; x++){
        var myCookies = document.createElement('li');
        myListedcockies.appendChild(myCookies);
        myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
      }
      myCookies.textContent = 'total ' + this.total + ' cookies'
    
    }
    }
    
    dubai.totalCoockies();
    dubai.runder();
    




  var paris = {
    name : 'paris',
    parisRandom : function(max,min){
    return randomCutomerNumber(max,min)
     },
     
     counRandom : 0,
     total : 0,
     numCoocky : [],
     totalCoockies : function (){
      
      for (var i = 0;i < hours.length ; i++){
        this.counRandom = Math.floor(this.parisRandom(38,20) * 2.3); 
        this.total = this.total + this.counRandom;
        this.numCoocky[i] = this.counRandom
        }
        
    },
    
    runder : function(){
      var contaner = document.getElementById('sales');
      var article1 = document.createElement('article');
      contaner.appendChild(article1);
      var myTitle = document.createElement('h2');
      article1.appendChild(myTitle);
      myTitle.textContent = this.name;
      var myListedcockies = document.createElement('ul');
      contaner.appendChild(myListedcockies);
      for (var x = 0; x <= hours.length ; x++){
        var myCookies = document.createElement('li');
        myListedcockies.appendChild(myCookies);
        myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
      }
      myCookies.textContent = 'total ' + this.total + ' cookies'
    
    }
    }
    
    paris.totalCoockies();
    paris.runder();

    var lima = {
      name : 'Lima',
      limaRandom : function(max,min){
      return randomCutomerNumber(max,min)
       },
       
       counRandom : 0,
       total : 0,
       numCoocky : [],
       totalCoockies : function (){
        
        for (var i = 0;i < hours.length ; i++){
          this.counRandom = Math.floor(this.limaRandom(16,2) * 4.6); 
          this.total = this.total + this.counRandom;
          this.numCoocky[i] = this.counRandom
          }
          
      },
      
      runder : function(){
        var contaner = document.getElementById('sales');
        var article1 = document.createElement('article');
        contaner.appendChild(article1);
        var myTitle = document.createElement('h2');
        article1.appendChild(myTitle);
        myTitle.textContent = this.name;
        var myListedcockies = document.createElement('ul');
        contaner.appendChild(myListedcockies);
        for (var x = 0; x <= hours.length ; x++){
          var myCookies = document.createElement('li');
          myListedcockies.appendChild(myCookies);
          myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
        }
        myCookies.textContent = 'total ' + this.total + ' cookies'
      
      }
      }
      
      lima.totalCoockies();
      lima.runder();    
    
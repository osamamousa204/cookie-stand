'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomCutomerNumber(max, min) {
  var randomCutomer = Math.floor(Math.random() * (max - min) + min)
  return randomCutomer;
}

var allObjects = [];

function AllLocations(name, avergeCustomer, minNumcustomer, maxNumCustomer) {
  this.location = name;
  this.avergeCustomer = avergeCustomer;
  this.minNumcustomer = minNumcustomer;
  this.maxNumCustomer = maxNumCustomer;
  this.counRandom = 0;
  this.total = 0;
  this.numCoocky = [];
  allObjects.push(this);
}

AllLocations.prototype.randomNumber = function (max, min) {
  return randomCutomerNumber(max, min)
}

AllLocations.prototype.totalCoockies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.counRandom = Math.floor(this.randomNumber(this.maxNumCustomer, this.minNumcustomer) * this.avergeCustomer);
    this.total = this.total + this.counRandom;
    this.numCoocky[i] = this.counRandom
  }


}
////////////here i passed my paramiters/////////////

var seatle = new AllLocations('seattle', 6.3, 23, 65);
var tokyo = new AllLocations('tokyo', 1.2, 3, 24);
var dubai = new AllLocations('dubai', 3.7, 11, 38);
var paris = new AllLocations('paris', 2.3, 20, 38);
var lima = new AllLocations('lima', 4.6, 2, 16);
for(var i = 0;i<allObjects.length;i++){
  allObjects[i].randomNumber(this.maxNumCustomer,this.minNumcustomer);
  allObjects[i].totalCoockies();
}


////////this function will create the header of the table/////////

var salesResule;
AllLocations.prototype.runderhours = function () {
  var contaner = document.getElementById('sales');
  var article1 = document.createElement('article');
  contaner.appendChild(article1);
  salesResule = document.createElement('table');
  contaner.appendChild(salesResule);
  var tr1 = document.createElement('tr');
  salesResule.appendChild(tr1);
  var myCookies = document.createElement('th');
  tr1.appendChild(myCookies);
  myCookies.textContent = "";
  for (var x = 0; x < hours.length; x++) {
    myCookies = document.createElement('th');
    tr1.appendChild(myCookies);
    myCookies.textContent = hours[x];
  }
  myCookies = document.createElement('th');
  tr1.appendChild(myCookies);
  myCookies.textContent = "Daily location total";




}
// this function create the body of the table

AllLocations.prototype.runder = function () {
  for(var i = 0;i< allObjects.length;i++){
    var tr2 = document.createElement('tr');
    salesResule.appendChild(tr2);
    var myCookies = document.createElement('td');
    tr2.appendChild(myCookies);
    myCookies.textContent = allObjects[i].location;
    for (var x = 0; x < hours.length; x++) {
      myCookies = document.createElement('td');
      tr2.appendChild(myCookies);
      myCookies.textContent = allObjects[i].numCoocky[x];
    }
  myCookies = document.createElement('td');
  tr2.appendChild(myCookies);
  myCookies.textContent = `${allObjects[i].total}`;
}  
}

// this function will create the buttom of the table




AllLocations.prototype.runderhours();
AllLocations.prototype.runder();

var creatShop = document.getElementById('creatNewShop');
creatShop.addEventListener('submit' , function (event){
event.preventDefault();
var nameOfShop = event.target.nameOfShop.value;
var minOfCustomers = event.target.minNumCust.value;
var maxOfCustomers = event.target.maxNumCust.value;
var avgOfCustomers = event.target.avgNumCust.value;
console.log(nameOfShop)

if(minOfCustomers < maxOfCustomers){
  alert('the minimum can not be bigger than the maximum');

}



var newShop = new AllLocations (nameOfShop,avgOfCustomers,minOfCustomers,maxOfCustomers)
newShop.randomNumber(newShop.maxNumCustomer,newShop.minNumcustomer);
newShop.totalCoockies();
newShop.runder();

})


console.log(AllLocations)
AllLocations.prototype.theButtomRow= function  (){
  
  var allTotals = 0;
  var tr7 = document.createElement('tr');
  salesResule.appendChild(tr7);
  var myCookies = document.createElement('td');
  tr7.appendChild(myCookies);
  myCookies.textContent = "Totals";
  for (var x = 0; x < hours.length; x++) {
    var total = 0;
    for (var j = 0 ; j < allObjects.length ; j++){
      total = total + allObjects[j].numCoocky[x]
    }
    myCookies = document.createElement('td');
    tr7.appendChild(myCookies);
    myCookies.textContent = total
    allTotals = allTotals + total
  }
  myCookies = document.createElement('td');
  tr7.appendChild(myCookies);
  myCookies.textContent = `${allTotals}`;

}
AllLocations.prototype.theButtomRow();


















// console.log(allObjects)
// //seattle
// var seatle = new AllLocations('seattle', 6.3, 23, 65);
// seatle.randomNumber(this.maxNumCustomer, this.minNumcustomer);
// seatle.totalCoockies();
// //Tokyo
// var tokyo = new AllLocations('tokyo', 1.2, 3, 24);
// tokyo.randomNumber(this.maxNumCustomer, this.minNumcustomer);
// tokyo.totalCoockies();
// //Dubai
// var dubai = new AllLocations('dubai', 3.7, 11, 38);
// dubai.randomNumber(this.maxNumCustomer, this.minNumcustomer);
// dubai.totalCoockies();
// //paris
// var paris = new AllLocations('paris', 2.3, 20, 38);
// paris.randomNumber(this.maxNumCustomer, this.minNumcustomer);
// paris.totalCoockies();

// //Lima
// var lima = new AllLocations('lima', 4.6, 2, 16);
// lima.randomNumber(this.maxNumCustomer, this.minNumcustomer);
// lima.totalCoockies();


// AllLocations.prototype.runderDubai = function(){
//   var contaner = document.getElementById('sales');
//   var tr4 = document.createElement('tr');
//   salesResule.appendChild(tr4);
//   var myCookies = document.createElement('td');
//           tr4.appendChild(myCookies);
//           myCookies.textContent = this.location;
//   for (var x = 0; x < hours.length ; x++){
//            myCookies = document.createElement('td');
//           tr4.appendChild(myCookies);
//           myCookies.textContent = this.numCoocky[x] ;
//         }
//         myCookies = document.createElement('td');
//         tr4.appendChild(myCookies);
//         myCookies.textContent = `${this.total}`;




//   }
// function renderHeaderRow()
// {

// }
//   AllLocations.prototype.runderParis = function(){
//     var contaner = document.getElementById('sales');
//     var tr5 = document.createElement('tr');
//     salesResule.appendChild(tr5);
//     var myCookies = document.createElement('td');
//             tr5.appendChild(myCookies);
//             myCookies.textContent = this.location;
//     for (var x = 0; x < hours.length ; x++){
//              myCookies = document.createElement('td');
//             tr5.appendChild(myCookies);
//             myCookies.textContent = this.numCoocky[x] ;
//           }
//           myCookies = document.createElement('td');
//           tr5.appendChild(myCookies);
//           myCookies.textContent = `${this.total}`;



//     }

//     AllLocations.prototype.runderLima = function(){
//       var contaner = document.getElementById('sales');
//       var tr6 = document.createElement('tr');
//       salesResule.appendChild(tr6);
//       var myCookies = document.createElement('td');
//               tr6.appendChild(myCookies);
//               myCookies.textContent = this.location;
//       for (var x = 0; x < hours.length ; x++){
//                myCookies = document.createElement('td');
//               tr6.appendChild(myCookies);
//               myCookies.textContent = this.numCoocky[x] ;
//             }
//             myCookies = document.createElement('td');
//             tr6.appendChild(myCookies);
//             myCookies.textContent = `${this.total}`;


//       }




// // //Seattle
// var seatle = new AllLocations('seattle', 6.3 , 23 , 65);
// seatle.randomNumber(this.maxNumCustomer,this.minNumcustomer);
//   seatle.totalCoockies();
// //   seatle.runderSeattle();
// // //Tokyo
// var tokyo = new AllLocations('tokyo' , 1.2 , 3, 24);
// tokyo.randomNumber(this.maxNumCustomer,this.minNumcustomer);
//   tokyo.totalCoockies();
//   tokyo.runderTokyo();
// //Dubai
//  var dubai = new AllLocations('dubai' , 3.7 , 11, 38); 
//  dubai.randomNumber(this.maxNumCustomer,this.minNumcustomer);
//   dubai.totalCoockies();
//   dubai.runderDubai();
// //paris
// var paris = new AllLocations('paris' , 2.3 , 20, 38);
// paris.randomNumber(this.maxNumCustomer,this.minNumcustomer);
// paris.totalCoockies();
// paris.runderParis();
// //Lima
// var lima = new AllLocations('lima' , 4.6 , 2, 16);
// lima.randomNumber(this.maxNumCustomer,this.minNumcustomer);
// lima.totalCoockies();
// lima.runderLima();









// var tokyo = new AllLocations('tokyo' , 1.2 , 3, 24);
// var dubai = new AllLocations('dubai' , 3.7 , 11, 38);
// var paris = new AllLocations('paris' , 2.3 , 20, 38);
// var lima = new AllLocations('lima' , 4.6 , 2, 16);

// for(var i = 0;i<allObjects.length;i++){
//   allObjects[i].randomNumber(this.maxNumCustomer,this.minNumcustomer);
//   allObjects[i].totalCoockies();
//   allObjects[i].runder();
// }

  // console.log(td)

// var contaner = document.getElementById('sales');
// var article1 = document.createElement('article');
// contaner.appendChild(article1);
// var myTitle = document.createElement('h2');
// article1.appendChild(myTitle);
// myTitle.textContent = this.location;
// var salesResule = document.createElement('table');
// contaner.appendChild(salesResule);
// var tr1 = document.createElement('th');
// var tr2 = document.createElement('tr');
// var tr3 = document.createElement('tr');
// var tr4 = document.createElement('tr');
// var tr5 = document.createElement('tr');
// salesResule.appendChild(tr1);
// for(var x = 0; x < hours.length ; x++){
//   var td = document.createElement('td');
//   tr1.appendChild(td);
//   td.textContent = hours[i]  

// }
// seatle.randomNumber(this.maxNumCustomer,this.minNumcustomer);
// seatle.totalCoockies();
// seatle.runder();








// var seatle = {
// name : 'seatle',
// seatleRandom : function(max,min){
// return randomCutomerNumber(max,min)
//  },
//  counRandom : 0,
//  total : 0,
//  avergeCustomer : 6.3,
//   minNumcustomer : 23,
//   maxNumCustomer : 65,
//  numCoocky : [],
//  totalCoockies : function (){

//   for (var i = 0;i < hours.length ; i++){
//     this.counRandom = Math.floor(this.seatleRandom(this.maxNumCustomer,this.minNumcustomer) * this.avergeCustomer); 
//     this.total = this.total + this.counRandom;
//     this.numCoocky[i] = this.counRandom
//     }

// },

// runder : function(){
//   var contaner = document.getElementById('sales');
//   var article1 = document.createElement('article');
//   contaner.appendChild(article1);
//   var myTitle = document.createElement('h2');
// //   article1.appendChild(myTitle);
// //   myTitle.textContent = this.name;
//   var salesResule = document.createElement('table');
//   contaner.appendChild(salesResule);
//   var tr1 = document.createElement('th');
//   var tr2 = document.createElement('tr');
//   var tr3 = document.createElement('tr');
//   var tr4 = document.createElement('tr');
//   var tr5 = document.createElement('tr');
//   salesResule.appendChild(tr1);
//   for(var x = 0; x < hours.length ; x++){
//     var td = document.createElement('td');
//     tr1.appendChild(td);
//     td.textContent = hours[i]  

//   }
//   salesResule.appendChild(tr2);
//   salesResule.appendChild(tr3);
//   salesResule.appendChild(tr4);
//   salesResule.appendChild(tr5);

  // for (var x = 0; x <= hours.length ; x++){
  //   var myCookies = document.createElement('li');
  //   myListedcockies.appendChild(myCookies);
  //   myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
  // }
  // myCookies.textContent = 'total ' + this.total + ' cookies'

// }
// }
// seatle.seatleRandom();
// seatle.totalCoockies();
// seatle.runder();














// var tokyo = {
//   name : 'tokyo',
//   tokyoRandom : function(max,min){
//   return randomCutomerNumber(max,min)
//    },

//   counRandom : 0,
//  total : 0,
//  avergeCustomer : 1.2,
//   minNumcustomer : 3,
//   maxNumCustomer : 24,
//  numCoocky : [],
//  totalCoockies : function (){

//   for (var i = 0;i < hours.length ; i++){
//     this.counRandom = Math.floor(this.tokyoRandom(this.maxNumCustomer,this.minNumcustomer) * this.avergeCustomer); 
//     this.total = this.total + this.counRandom;
//     this.numCoocky[i] = this.counRandom
//     }

// },

//   runder : function(){
//     var contaner = document.getElementById('sales');
//     var article1 = document.createElement('article');
//     contaner.appendChild(article1);
//     var myTitle = document.createElement('h2');
//     article1.appendChild(myTitle);
//     myTitle.textContent = this.name;
//     var myListedcockies = document.createElement('ul');
//     contaner.appendChild(myListedcockies);
//     for (var x = 0; x <= hours.length ; x++){
//       var myCookies = document.createElement('li');
//       myListedcockies.appendChild(myCookies);
//       myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
//     }
//     myCookies.textContent = 'total ' + this.total + ' cookies'

//   }
//   }

//   tokyo.totalCoockies();
//   tokyo.runder();

//   var dubai = {
//     name : 'dubai',
//     dubaiRandom : function(max,min){
//     return randomCutomerNumber(max,min)
//      },

//      counRandom : 0,
//      total : 0,
//      avergeCustomer : 3.7,
//      minNumcustomer : 11,
//      maxNumCustomer : 38,
//      numCoocky : [],
//      totalCoockies : function (){

//       for (var i = 0;i < hours.length ; i++){
//         this.counRandom = Math.floor(this.dubaiRandom(this.maxNumCustomer,this.minNumcustomer) * this.avergeCustomer); 
//         this.total = this.total + this.counRandom;
//         this.numCoocky[i] = this.counRandom
//         }

//     },

//     runder : function(){
//       var contaner = document.getElementById('sales');
//       var article1 = document.createElement('article');
//       contaner.appendChild(article1);
//       var myTitle = document.createElement('h2');
//       article1.appendChild(myTitle);
//       myTitle.textContent = this.name;
//       var myListedcockies = document.createElement('ul');
//       contaner.appendChild(myListedcockies);
//       for (var x = 0; x <= hours.length ; x++){
//         var myCookies = document.createElement('li');
//         myListedcockies.appendChild(myCookies);
//         myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
//       }
//       myCookies.textContent = 'total ' + this.total + ' cookies'

//     }
//     }

//     dubai.totalCoockies();
//     dubai.runder();





//   var paris = {
//     name : 'paris',
//     parisRandom : function(max,min){
//     return randomCutomerNumber(max,min)
//      },

//      counRandom : 0,
//      total : 0,
//      avergeCustomer : 2.3,
//      minNumcustomer : 20,
//      maxNumCustomer : 38,
//      numCoocky : [],
//      totalCoockies : function (){

//       for (var i = 0;i < hours.length ; i++){
//         this.counRandom = Math.floor(this.parisRandom(this.maxNumCustomer,this.maxNumCustomer) * this.avergeCustomer); 
//         this.total = this.total + this.counRandom;
//         this.numCoocky[i] = this.counRandom
//         }

//     },

//     runder : function(){
//       var contaner = document.getElementById('sales');
//       var article1 = document.createElement('article');
//       contaner.appendChild(article1);
//       var myTitle = document.createElement('h2');
//       article1.appendChild(myTitle);
//       myTitle.textContent = this.name;
//       var myListedcockies = document.createElement('ul');
//       contaner.appendChild(myListedcockies);
//       for (var x = 0; x <= hours.length ; x++){
//         var myCookies = document.createElement('li');
//         myListedcockies.appendChild(myCookies);
//         myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
//       }
//       myCookies.textContent = 'total ' + this.total + ' cookies'

//     }
//     }

//     paris.totalCoockies();
//     paris.runder();

//     var lima = {
//       name : 'Lima',
//       limaRandom : function(max,min){
//       return randomCutomerNumber(max,min)
//        },

//        counRandom : 0,
//        total : 0,
//        avergeCustomer : 4.6,
//        minNumcustomer : 2,
//        maxNumCustomer : 16,
//        numCoocky : [],
//        totalCoockies : function (){

//         for (var i = 0;i < hours.length ; i++){
//           this.counRandom = Math.floor(this.limaRandom(this.maxNumCustomer,this.maxNumCustomer) * this.avergeCustomer); 
//           this.total = this.total + this.counRandom;
//           this.numCoocky[i] = this.counRandom
//           }

//       },

//       runder : function(){
//         var contaner = document.getElementById('sales');
//         var article1 = document.createElement('article');
//         contaner.appendChild(article1);
//         var myTitle = document.createElement('h2');
//         article1.appendChild(myTitle);
//         myTitle.textContent = this.name;
//         var myListedcockies = document.createElement('ul');
//         contaner.appendChild(myListedcockies);
//         for (var x = 0; x <= hours.length ; x++){
//           var myCookies = document.createElement('li');
//           myListedcockies.appendChild(myCookies);
//           myCookies.textContent = hours[x] + ": " + this.numCoocky[x] + ' cookies' ;
//         }
//         myCookies.textContent = 'total ' + this.total + ' cookies'

//       }
//       }

//       lima.totalCoockies();
//       lima.runder();    

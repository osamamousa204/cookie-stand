'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomCutomerNumber(max, min) {
  var randomCutomer = Math.floor(Math.random() * (max - min) + min)
  return randomCutomer;
}

var allObjects = [];

/////////////////My constructor//////////////////

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


//////////////the random number function///////////////

AllLocations.prototype.randomNumber = function (max, min) {
  return randomCutomerNumber(max, min)
}

/////////this function calculate the number of cockies by using the random number function///////////

AllLocations.prototype.totalCoockies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.counRandom = Math.floor(this.randomNumber(this.maxNumCustomer, this.minNumcustomer) * this.avergeCustomer);
    this.total = this.total + this.counRandom;
    this.numCoocky[i] = this.counRandom
  }


}

//////////////////here i passed my paramiters///////////////////

var seatle = new AllLocations('seattle', 6.3, 23, 65);
var tokyo = new AllLocations('tokyo', 1.2, 3, 24);
var dubai = new AllLocations('dubai', 3.7, 11, 38);
var paris = new AllLocations('paris', 2.3, 20, 38);
var lima = new AllLocations('lima', 4.6, 2, 16);


for (var i = 0; i < allObjects.length; i++) {
  allObjects[i].randomNumber(this.maxNumCustomer, this.minNumcustomer);
  allObjects[i].totalCoockies();
}


/////////////this function will create the header of the table///////////////

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
////////// this function create the body of the table//////////

AllLocations.prototype.runder = function () {
  for (var i = 0; i < allObjects.length; i++) {
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

/////////// this function will create the buttom of the table///////////


AllLocations.prototype.theButtomRow = function () {


  var allTotals = 0;
  var tr7 = document.createElement('tr');
  salesResule.appendChild(tr7);
  var myCookies = document.createElement('td');
  tr7.appendChild(myCookies);
  myCookies.textContent = "Totals";
  for (var x = 0; x < hours.length; x++) {
    var total = 0;
    for (var j = 0; j < allObjects.length; j++) {
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



/////this functions call all the functions //////

function invoke (){
  AllLocations.prototype.runderhours();
  AllLocations.prototype.runder();
  AllLocations.prototype.theButtomRow()

}

invoke();

///////////////create a new object ///////////////

var creatShop = document.getElementById('creatNewShop');

creatShop.addEventListener('submit', function (event) {

  event.preventDefault();

  var nameOfShop = event.target.nameOfShop.value;

  var minOfCustomers = parseInt(event.target.minNumCust.value);

  var maxOfCustomers = parseInt(event.target.maxNumCust.value);

  var avgOfCustomers = parseInt(event.target.avgNumCust.value);

  if (minOfCustomers >= maxOfCustomers){
    alert('the min should not be greater than the max ')
  }else{
    var newShop = new AllLocations(nameOfShop, avgOfCustomers, minOfCustomers, maxOfCustomers);

  newShop.randomNumber(this.maxNumCustomer, this.minNumcustomer);

  newShop.totalCoockies();

  creatShop.reset();

  salesResule.remove(salesResule);

  invoke();

  }

  
 
})


  

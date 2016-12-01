(function(){
  'use strict';
//The "To Buy" list should be pre-populated with a list of at least 5 items. 
var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "10"
  },
  {
    name: "Cookies",
    quantity: "50"
  },
  {
    name: "Oranges",
    quantity: "5"
  },
  {
    name: "Apples",
    quantity: "7"
  }
];  
  
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItems();
  
  buyList.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
  
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  
  boughtList.boughtItemList = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = shoppingList;
  // List of bought items
  var boughtItemList = [];
  
  //service to get to buy Items
  service.getItems = function () {
    return items;
  };
  //service for bought button
  service.boughtItem = function (index) {
    boughtItemList.push(items[index]);
    items.splice(index, 1);
  };
  //service for bought item list
  service.getBoughtItems = function () {
    return boughtItemList;
  };

}

})();
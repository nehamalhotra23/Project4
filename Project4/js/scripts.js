//Backend Logic
var sIze;
var extraTopping;

 function Pizza(size, toppings ) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
};

Pizza.prototype.totalPrice = function(price) {
  this.price += this.toppings;
  return this.price;
}


//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
   event.preventDefault()
     sIze = $("#size").val();
    extraTopping = $("#topping").val();

var newOrder = new Pizza(size);
if(extraTopping === "Cheese") {
  $("#totalprice").append("<li>" + extraTopping + "</li>");
}


});

});

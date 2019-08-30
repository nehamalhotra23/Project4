//Backend Logic
var sIze;
var extraTopping;

 function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
};
Pizza.prototype.totalPrice = function(price) {
  this.price += this.toppings;

}

//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
   event.preventDefault()

     sIze = $("#size").val();
    extraTopping = $("#topping").val();

var newOrder = new Pizza(size);
if(extraTopping === "Cheese" || sIze === "Large") {
  this.price = 6;
  $("#totalprice").text(sIze + " " + extraTopping + " " + "$" + this.price);
}


});

});

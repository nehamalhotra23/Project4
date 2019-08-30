//Backend Logic
var sIze;
var extraTopping;
var newOrder = new Pizza();

function Pizza(size) {
  this.size;
  this.price = 5;
  this.toppings = 1;
};
Pizza.prototype.totalPrice = function(price) {
    this.price += this.topping;
     return this.price;
     console.log(this.price);
}

//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
    event.preventDefault()
    sIze = $("#size").val();
    extraTopping = $("#topping").val();
    console.log(extraTopping);
     if(extraTopping === "Cheese" || size === "large"){
       $("#totalprice").text(sIze + " " + extraTopping + " " + "$" + newOrder.totalPrice());
  } if (extraTopping === "Pepperoni" || size === "large") {
     $("#totalPrice").text(sIze + " " + extraTopping + " " + "$" + newOrder.totalPrice())
  }


  });

});

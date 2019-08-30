//Backend Logic
var sIze;
var extraTopping;
var newOrder = new Pizza();
var toppingsText;

function Pizza() {
  this.size;
  this.price = 0;
  this.toppings = [];
};
 Pizza.prototype.calculateTotal = function() {
   this.price += 1;
   return this.price;

 }


//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
    event.preventDefault()
    sIze = $("#size").val();
    extraTopping = $("#topping").val();


    this.sIze = size;


    if (extraTopping === "Cheese" || extraTopping === "Pepperoni" || extraTopping === "Artichoke" && sIze === "Large") {
      this.price += 10;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && sIze === "Medium") {
      this.price += 15;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && sIze === "Regular") {
      this.price += 20;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    }
  return this.price;

  });

});

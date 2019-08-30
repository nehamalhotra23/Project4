//Backend Logic
var sIze;
var extraTopping;
var newOrder = new Pizza();

function Pizza() {
  this.price = 0;
  this.toppings = [];
};
 Pizza.prototype.calculateTotal = function() {
   this.price += 10;
   return this.price;

 }


//User Interface

$(document).ready(function() {
  $("#placeOrder").click(function(event) {
    event.preventDefault()
    sIze = $("#size").val();
    extraTopping = $("#topping").val();


    if (extraTopping === "Cheese" || extraTopping === "Pepperoni" || extraTopping === "Artichoke" && size === "Large") {
      this.price += 10;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && size === "Medium") {
      this.price += 15;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    } else if (extraTopping === "Pepperoni" || extraTopping === "Artichoke" || extraTopping === "Cheese" && size === "Regular") {
      this.price += 20;
      $("#totalprice").append(sIze + " " + extraTopping + " " + "$" + this.price);
    }
  return this.price;

  });

});

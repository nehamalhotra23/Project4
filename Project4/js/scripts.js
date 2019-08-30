//Backend Logic

function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
};

Pizza.prototype.totalPrice = function(toppings) {
  price += toppings;
  return price;
}

//User Interface
$(document).ready(function() {
  $("#placeOrder").submit(function() {
    event.preventDefault()
   $("#checkout").show();
   var pizzaSize = $("#size").val()
   var extraTopping = $("topping").val();

  })

})

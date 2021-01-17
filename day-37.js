// Promises Made me Broken	https://www.codewars.com/kata/587593285448632b8d000143

function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  // Get the current user's shopping cart
  OrderAPI.getShoppingCartAsync(user)
    .then(function (cart) {
      shoppingCart = cart;
      return CustomerAPI.getProfileAsync(user);
    })
    // Also look up the ZIP code from their profile
    .then(function (profile) {
      zipCode = profile.zipCode;
    })
    // Calculate the shipping fees
    .then(function (delivery) {
      shippingRate = calculateShipping(shoppingCart, zipCode);
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    })
    // Submit the order
    .then(function (success) {
      orderSuccessful = success;
    });
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}

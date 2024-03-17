// Get the necessary elements from the HTML
const menu = document.getElementById('menu');
const quantity_menu = document.getElementById('quantity_menu');
const add_button = document.getElementById('add_button');
const orderContainer = document.getElementById('order-container');
const cash = document.getElementById('cash_input_area');
const pay_button = document.getElementById('pay_button');

// Initialize variables
let totalPrice = 0;
let orders = [];

// Add event listener to the "Add food item" button
add_button.addEventListener('click', function() {
  // Get the selected option and quantity
  const selectedOption = menu.options[menu.selectedIndex];
  const selectedOptionValue = selectedOption.value;
  const quantity = parseInt(quantity_menu.value);

  // Calculate the price of the selected option and quantity
  const price = parseInt(selectedOptionValue) * quantity;

  // Add the order to the orders array
  orders.push({
    name: selectedOption.text,
    quantity: quantity,
    price: price
  });

  // Display the order in the "added_order" div
  const orderDiv = document.createElement('div');
  orderDiv.innerHTML = `
    <p>${selectedOption.text}: ${quantity} x $${selectedOptionValue} = $${price}</p>
  `;
  orderContainer.appendChild(orderDiv);

  // Update the total price
  totalPrice += price;

  // Clear the quantity input
  quantity_menu.value = '';
});

// Add event listener to the "Pay" button
pay_button.addEventListener('click', function() {
  // Get the amount of payment from the cash input
  const payment = parseInt(cash_input_area.value);

  // Calculate the change
  const change =payment - totalPrice;

  // Display the change in a new window
  if (change >= 0) {
    window.open(`Thank you for your order, your change is $${change}`, '_blank');
  } else {
    window.open('Insufficient payment', '_blank');
  }
});
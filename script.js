let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCartUI();
}

function updateCartUI() {
  const cartItemsUl = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItemsUl.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.productName} - TZS ${item.price.toLocaleString()}`;
    cartItemsUl.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toLocaleString();
}

// Mfumo rahisi wa kutuma oda moja kwa moja WhatsApp bila gharama za server
function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Kikapu chako kiko wazi!");
    return;
  }

  let myPhoneNumber = "255700000000"; // Weka namba yako ya WhatsApp hapa
  let orderText = "Habari OnlineSoko Mbeya! Nataka kuweka oda ya:\n\n";

  let total = 0;
  cart.forEach((item, index) => {
    orderText += `${index + 1}. ${item.productName} (TZS ${item.price})\n`;
    total += item.price;
  });

  orderText += `\nJumla ya Bei: TZS ${total.toLocaleString()}`;
  orderText += "\nEneo la Delivery (Mbeya): [Andika mtaa wako hapa]";

  let encodedText = encodeURIComponent(orderText);
  window.open(`https://wa.me/${myPhoneNumber}?text=${encodedText}`, '_blank');
}
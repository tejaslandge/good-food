let selectedItem = "";
let selectedPrice = 0;

function selectItem(item, price) {
  selectedItem = item;
  selectedPrice = price;
  document.getElementById("itemName").value = item;
  document.getElementById("itemPrice").value = "₹" + price;
}

function placeOrder(e) {
  e.preventDefault();

  const qty = document.getElementById("qty").value;

  // Close order modal
  const orderModal = bootstrap.Modal.getInstance(
    document.getElementById("orderModal")
  );
  orderModal.hide();

  // Show success modal
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  successModal.show();
}

function sendMessage(e) {
  e.preventDefault();

  // Reset form
  e.target.reset();

  // Show success modal
  const contactModal = new bootstrap.Modal(
    document.getElementById("contactSuccessModal")
  );
  contactModal.show();
}

function sendMessage() {
  // Get form data
  var name = document.getElementById("name").value;
  var message = document.querySelector(".field_custom").value;

  // Construct message
  var finalMessage = "Service Enquiry:\nName: " + name + "\nMessage: " + message;

  // Construct WhatsApp URL
  var phoneNumber = "9747870748"; // Replace with your WhatsApp number
  var encodedMessage = encodeURIComponent(finalMessage);
  var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  // Open WhatsApp with pre-filled message
  window.location.href = whatsappURL;

  return false; // Prevent form submission
}

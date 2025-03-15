
  document.addEventListener("DOMContentLoaded", function () {

    // ROT13 function to decode the encoded string
    function rot13(str) {
      return str.replace(/[a-z]/gi, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
      });
    }

    document.getElementById("email-link").addEventListener("click", function (e) {
      e.preventDefault();  // Prevent the default action

      let link = this;

      // If the email has already been revealed, prepare the mailto link with decoded email
      if (link.dataset.revealed === "true") {
        var encodedEmail = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz";  // Full ROT13 encoded email

        // Decode and replace [dot] and [at] with real symbols
        var decodedEmail = rot13(encodedEmail);
        decodedEmail = decodedEmail.replace(/\[qbg\]/g, ".");  // Replace [dot] with "."
        decodedEmail = decodedEmail.replace(/\[ng\]/g, "@");  // Replace [at] with "@"
        
        console.log("Decoded Email: ", decodedEmail); // Debugging: Log decoded email

        link.href = "mailto:" + decodedEmail;  // Set the correct mailto link
        window.location.href = link.href;  // Open the email client with the decoded email
        return;
      }

      // First click: Reveal the email by decoding the email and displaying it
      link.textContent = "Revealing...";
      var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // Full ROT13 encoded email
      var decoded = rot13(encoded)
        .replace(/\[qbg\]/g, ".")  // Replace [dot] with "."
        .replace(/\[ng\]/g, "@");  // Replace [at] with "@"

      console.log("Decoded Email on First Click: ", decoded); // Debugging: Log the decoded email text

      setTimeout(function () {
        link.href = "#";  // Keep the link non-functional until revealed
        link.textContent = decoded;  // Show the decoded email text
        link.dataset.revealed = "true";  // Mark the email as revealed for the second click
      }, 2800); // 2.8-second delay before revealing
    });
  });

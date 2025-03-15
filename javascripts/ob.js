
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

        // Decode the email and manually replace [dot] and [at] with real symbols
        var decodedEmail = rot13(encodedEmail);
        
        // Replacing manually
        decodedEmail = decodedEmail.split("[qbg]").join(".");  // Manually replace [dot] with "."
        decodedEmail = decodedEmail.split("[ng]").join("@");  // Manually replace [at] with "@"

        // Debugging: Log the decoded email to check
        console.log("Decoded Email:", decodedEmail);

        // Set mailto link with decoded email
        link.href = "mailto:" + decodedEmail;
        window.location.href = link.href;  // Open the email client with the decoded email
        return;
      }

      // First click: Reveal the email by decoding the email and displaying it
      link.textContent = "Revealing...";
      var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // Full ROT13 encoded email
      var decoded = rot13(encoded);

      // Replacing manually
      decoded = decoded.split("[qbg]").join(".");  // Manually replace [dot] with "."
      decoded = decoded.split("[ng]").join("@");  // Manually replace [at] with "@"

      // Debugging: Log the decoded email on first click
      console.log("Decoded Email on First Click:", decoded);

      setTimeout(function () {
        link.href = "#";  // Keep the link non-functional until revealed
        link.textContent = decoded;  // Show the decoded email text
        link.dataset.revealed = "true";  // Mark the email as revealed for second click
      }, 2800); // 2.8-second delay before revealing
    });
  });



document.addEventListener("DOMContentLoaded", function () {

  function rot13(str) {
    return str.replace(/[a-z]/gi, function (c) {
      return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  document.getElementById("email-link").addEventListener("click", function (e) {
    e.preventDefault();

    let link = this;

    // If the email has already been revealed, open the email client with the correct email
    if (link.dataset.revealed === "true") {
      // Here we properly decode the email and use it for the mailto link
      var encodedEmail = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // ROT13 encoded email
      var decodedEmail = rot13(encodedEmail)
        .replace(/\[qbg\]/g, ".") // Escape brackets and replace [dot] with .
        .replace(/\[ng\]/g, "@"); // Escape brackets and replace [at] with @
      
      link.href = "mailto:" + decodedEmail;
      window.location.href = link.href; // Opens the email client with the decoded email
      return;
    }

    // First click: Show "Revealing..." message and decode email
    link.textContent = "Revealing...";
    var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // Correct full ROT13 encoding
    var decoded = rot13(encoded)
      .replace(/\[qbg\]/g, ".") // Replace [dot] with .
      .replace(/\[ng\]/g, "@"); // Replace [at] with @

    setTimeout(function () {
      link.href = "#"; // Keep the link non-functional until revealed
      link.textContent = decoded;
      link.dataset.revealed = "true"; // Marks email as revealed for second click
    }, 2800); // 2.8-second delay before revealing
  });
});

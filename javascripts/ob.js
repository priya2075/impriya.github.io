

document.addEventListener("DOMContentLoaded", function() {
  function rot13(str) {
    return str.replace(/[a-z]/gi, function(c){
      return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  document.getElementById("email-link").addEventListener("click", function (e) {
    e.preventDefault();

    let link = this;

    // If the email has already been revealed, do nothing (no mailbox pop-up)
    if (link.dataset.revealed === "true") {
      return;
    }

    // First click: Show "Revealing..." message and decode email
    link.textContent = "Revealing...";
    var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // Correct full ROT13 encoding
    var decoded = rot13(encoded).replaceAll("[qbg]", ".").replaceAll("[ng]", "@");

    setTimeout(function() {
      link.textContent = decoded; // Reveal the decoded email
      link.dataset.revealed = "true"; // Marks email as revealed for second click
    }, 2800); // 2.8-second delay before revealing
  });
});

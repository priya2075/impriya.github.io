  document.addEventListener("DOMContentLoaded", function () {

  function rot13(str) {
    return str.replace(/[a-z]/gi, function(c){
      return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  document.getElementById("email-link").addEventListener("click", function (e) {
    e.preventDefault();

    var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; // Correct full ROT13 encoding
    var decoded = rot13(encoded);

    let link = this;
    link.textContent = "Revealing...";

    setTimeout(function() {
      // Replace [dot] and [at] manually using .replace() for better compatibility
      let finalEmail = decoded.replace(/\[qbg\]/g, ".").replace(/\[ng\]/g, "@");
      
      link.textContent = finalEmail; // Display the decoded email directly
    }, 2000); // 2-second delay before revealing
  });

});

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
    this.textContent = "Revealing...";

    setTimeout(function() {
      link.href = "mailto:" + decoded.replaceAll("[qbg]", ".").replaceAll("[ng]", "@");
      link.textContent = decoded.replaceAll("[qbg]", ".").replaceAll("[ng]", "@");
    }, 2000); // 2-second delay before revealing
  });

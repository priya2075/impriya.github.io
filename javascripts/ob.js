  document.addEventListener("DOMContentLoaded", function () {

  function rot13(str) {
    return str.replace(/[a-z]/gi, function(c){
      return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  document.getElementById("email-link").addEventListener("click", function (e) {
    e.preventDefault();

    var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; 
    var decoded = rot13(encoded);

    let link = this;
    link.textContent = "Revealing...";

    setTimeout(function() {
      
      let finalEmail = decoded.replace(/\[qbg\]/g, "&#46;").replace(/\[ng\]/g, "&#64;");

      link.textContent = finalEmail; 
    }, 2000); 
  });

});

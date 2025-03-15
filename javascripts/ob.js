
<script>
  function rot13(str) {
    return str.replace(/[a-z]/gi, function(c){
      return String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13));
    });
  }

  document.getElementById("email-link").addEventListener("click", function (e) {
    e.preventDefault();

    let link = this;

   
    if (link.dataset.revealed === "true") {
      var encodedEmail = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; 
      var decodedEmail = rot13(encodedEmail).replaceAll("[qbg]", ".").replaceAll("[ng]", "@");
      link.href = "mailto:" + decodedEmail;
      window.location.href = link.href; 
      return;
    }


    link.textContent = "Revealing...";
    var encoded = "vnzcevln[qbg]pbagnpg[ng]tznvy[qbg]pbz"; 
    var decoded = rot13(encoded).replaceAll("[qbg]", ".").replaceAll("[ng]", "@");

    setTimeout(function() {
      link.href = "#"; 
      link.textContent = decoded;
      link.dataset.revealed = "true"; 
    }, 2800); 
  });
</script>

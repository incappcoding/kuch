AOS.init();
//script for Google Sheet
var scriptURL = "https://script.google.com/macros/s/AKfycbwVUc4U9hoXH8VoWgTg1WNpecblSJux-5ilJAU6fccAC5pZtPVBIAwbEAq5lC3_aF0HUA/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});
//scroll to top
$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    }
);
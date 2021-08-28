// alert("hello");
$(document).ready(function(){
    $(".btn").click(function() {
        $("nav ul").slideToggle(500);
    })
})


// Smooth Scrolling
$('.cf a').on('click', function(event) {
    if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
        scrollTop: $(hash).offset().top
        },
        900,
        function() {
        window.location.hash = hash;
        }
    );
    }
});
    


  
  // Change the speed to whatever you want
  // Personally i think 1000 is too much
  // Try 800 or below, it seems not too much but it will make a difference
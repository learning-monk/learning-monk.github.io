// Adding tooltip to footer elements
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// Collapse navbar when navlink is clicked in responsive mode
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

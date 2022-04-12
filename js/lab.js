//find out where mousse clicks are within pixels
document.addEventListener("mouseover", function( event ) {
    console.log(event.screenX, event.screenY);
}, false);



$("input").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

$("#jag-close").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

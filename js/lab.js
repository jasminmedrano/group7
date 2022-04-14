//find out where mousse clicks are within pixels
document.addEventListener("mouseover", function( event ) {
    console.log(event.screenX, event.screenY);
}, false);


//jag input click toggles class
$("#jag-pic").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

//jag close button toggles class
$("#jag-close").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

//ott input click toggles class
$("#ott-pic").click(function(){
  $("#gott .info").toggleClass("hidden");
})

//ott close button toggles class
$("#ott-close").click(function(){
  $("#gott .info").toggleClass("hidden");
})

//tapir input click toggles class
$("#tap-pic").click(function(){
  $("#tapir .info").toggleClass("hidden");
})

//tapir close button toggles class
$("#tap-close").click(function(){
  $("#tapir .info").toggleClass("hidden");
})

//bird input click toggles class
$("#b-pic").click(function(){
  $("#bird .info").toggleClass("hidden");
})

//bird close button toggles class
$("#b-close").click(function(){
  $("#bird .info").toggleClass("hidden");
})

//chet input click toggles class
$("#chet-pic").click(function(){
  $("#cheetah .info").toggleClass("hidden");
})

//chet close button toggles class
$("#chet-close").click(function(){
  $("#cheetah .info").toggleClass("hidden");
})

//ost input click toggles class
$("#ost-pic").click(function(){
  $("#ostrich .info").toggleClass("hidden");
})

//ost close button toggles class
$("#ost-close").click(function(){
  $("#ostrich .info").toggleClass("hidden");
})

//turt input click toggles class
$("#turt-pic").click(function(){
  $("#turtle .info").toggleClass("hidden");
})

//turt close button toggles class
$("#turt-close").click(function(){
  $("#turtle .info").toggleClass("hidden");
})

//sheep input click toggles class
$("#sheep-pic").click(function(){
  $("#sheep .info").toggleClass("hidden");
})

//sheep close button toggles class
$("#sheep-close").click(function(){
  $("#sheep .info").toggleClass("hidden");
})

//find out where mousse clicks are within pixels
document.addEventListener("mouseover", function( event ) {
    console.log(event.screenX, event.screenY);
}, false);


//input click toggles class
$("input").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

//button toggles class
$("#jag-close").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})

//navbar animation
var navBar = $('.navbar');
navBar.append('<li class="marker"></li>');

navBar.on("click" , "a" , function(){

    var navTap = $(this).closest('.navbar');
    var mrkWidth = $(this).parent('li').width();
    var marker = navTap.find('.marker');
    var nx = $(".navbar").offset();
    var lx = $(this).parent('li').offset();
    var left = lx.left - nx.left;

   navBar.find('li').removeClass('active');

   $(this).parent().addClass('active');

    marker.removeClass("anim").css({ "width" : mrkWidth , "left" : left });
    setTimeout(function(){
      marker.addClass("anim")
    },200);

});

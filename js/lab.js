//find out where mousse clicks are within pixels
document.addEventListener("mouseover", function( event ) {
    console.log(event.screenX, event.screenY);
}, false);

//jag input click toggles class
$("#jag-pic").click(function(){
  $("#jaguar .info").toggleClass("hidden");
//jag click plays sound
  $("#jagsound").trigger("play");
})

//jag close button toggles class
$("#jag-close").click(function(){
  $("#jaguar .info").toggleClass("hidden");
})


//ott input click toggles class
$("#ott-pic").click(function(){
  $("#gott .info").toggleClass("hidden");
  $("#ottsound").trigger("play");
})

//ott close button toggles class
$("#ott-close").click(function(){
  $("#gott .info").toggleClass("hidden");
})

//tapir input click toggles class
$("#tap-pic").click(function(){
  $("#tapir .info").toggleClass("hidden");
  $("#tapirsound").trigger("play");
})

//tapir close button toggles class
$("#tap-close").click(function(){
  $("#tapir .info").toggleClass("hidden");
})

//bird input click toggles class
$("#b-pic").click(function(){
  $("#bird .info").toggleClass("hidden");
  $("#macawsound").trigger("play");
})

//bird close button toggles class
$("#b-close").click(function(){
  $("#bird .info").toggleClass("hidden");
})

//chet input click toggles class
$("#chet-pic").click(function(){
  $("#cheetah .info").toggleClass("hidden");
  $("#cheetsound").trigger("play");
})

//chet close button toggles class
$("#chet-close").click(function(){
  $("#cheetah .info").toggleClass("hidden");
})

//ost input click toggles class
$("#ost-pic").click(function(){
  $("#ostrich .info").toggleClass("hidden");
  $("#ostsound").trigger("play");
})

//ost close button toggles class
$("#ost-close").click(function(){
  $("#ostrich .info").toggleClass("hidden");
})

//turt input click toggles class
$("#turt-pic").click(function(){
  $("#turtle .info").toggleClass("hidden");
  $("#tortsound").trigger("play");
})

//turt close button toggles class
$("#turt-close").click(function(){
  $("#turtle .info").toggleClass("hidden");
})

//sheep input click toggles class
$("#sheep-pic").click(function(){
  $("#sheep .info").toggleClass("hidden");
  $("#bhornsound").trigger("play");
})

//sheep close button toggles class
$("#sheep-close").click(function(){
  $("#sheep .info").toggleClass("hidden");
})

//pbear input click toggles class
$("#pbear-pic").click(function(){
  $("#p-bear .info").toggleClass("hidden");
  $("#pbearsound").trigger("play");
})

//pbear close button toggles class
$("#pbear-close").click(function(){
  $("#p-bear .info").toggleClass("hidden");
})

//narwal input click toggles class
$("#nar-pic").click(function(){
  $("#narwal .info").toggleClass("hidden");
  $("#narsound").trigger("play");
})

//narwal close button toggles class
$("#nar-close").click(function(){
  $("#narwal .info").toggleClass("hidden");
})

//bison input click toggles class
$("#bis-pic").click(function(){
  $("#bison .info").toggleClass("hidden");
  $("#bissound").trigger("play");
})

//bison close button toggles class
$("#bis-close").click(function(){
  $("#bison .info").toggleClass("hidden");
})

//caribou input click toggles class
$("#car-pic").click(function(){
  $("#caribou .info").toggleClass("hidden");
  $("#carsound").trigger("play");
})

//caribou close button toggles class
$("#car-close").click(function(){
  $("#caribou .info").toggleClass("hidden");
})

//blue whale input click toggles class
$("#bwhale-pic").click(function(){
  $("#bluewhale .info").toggleClass("hidden");
  $("#bwhalesound").trigger("play");
})

//blue whale close button toggles class
$("#bwhale-close").click(function(){
  $("#bluewhale .info").toggleClass("hidden");
})

//vaquita input click toggles class
$("#vaq-pic").click(function(){
  $("#vaquita .info").toggleClass("hidden");
})

//vaquita close button toggles class
$("#vaq-close").click(function(){
  $("#vaquita .info").toggleClass("hidden");
})

//manatee input click toggles class
$("#man-pic").click(function(){
  $("#mantatee .info").toggleClass("hidden");
  $("#mansound").trigger("play");
})

//manatee close button toggles class
$("#man-close").click(function(){
  $("#mantatee .info").toggleClass("hidden");
})

//whale shark input click toggles class
$("#shark-pic").click(function(){
  $("#whaleshark .info").toggleClass("hidden");
  $("#wsharksound").trigger("play");
})

//whale shark close button toggles class
$("#shark-close").click(function(){
  $("#whaleshark .info").toggleClass("hidden");
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

$(document).ready(function(){
        $("#myModal").modal('show');
    });


    $('.back').hide();

    //.delay(3000)

    $('.front', '.flashcard').hover(function() {
        $(this).hide();
        $(this).siblings('.back').addClass( "animated flipInY fast" ).show();
    });

    $('.back', '.flashcard').mouseleave(function() {
      $(this).hide();
      $(this).siblings('.front').addClass( "animated flipInY fast" ).show();
    });

    /*
    $('.front', '.flashcard').on('click', function() {
      $(this).hide();
      $(this).siblings('.back').show();
    });



    $('.back', '.flashcard').on('click', function() {
      $(this).hide();
      $(this).siblings('.front').show();
    });

    */

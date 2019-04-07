/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var star = document.getElementsByClassName("star")
var starAlt = document.getElementsByClassName('star2')

setInterval(function(){
  document.getElementsByClassName("star").style.left= Math.floor(Math.random() * 50)+ 10
  document.getElementsByClassName('star2').style.left= Math.floor(Math.random() * 50)+ 10
 }, 1000);

anime({
  targets: '.star',
  translateX: 480,
  translateY: 200,
  opacity:[1,0],
  scaleY: [
    { value: [1.75, 1], duration: 10 },
    { value: -1, duration: 100, delay: 150, easing: 'easeInElastic' },

  ],
  scaleX: [
    { value: [-1.75, 1], duration: 10 },
    { value: 2, duration: 100, delay: 150, easing: 'easeOutElastic' },
  ],
  loop: true,
  easing: 'easeInOutElastic',
  loopBegin: function(anim){ 
    anime({
      targets:'.star',
      easing: 'easeInOutElastic',
      opactiy:[1]
    })
  },
  loopComplete: function(anim){
   anime({
     targets:'.star',
     easing: 'easeInOutElastic',
     opactiy:[0]
   })
  },
  delay: anime.stagger(1100) 
});

anime({
  targets: '.star2',
  translateX: 480,
  translateY: 200,
  opacity:[1,0],
  scaleY: [
    { value: [1.75, 1], duration: 10 },
    { value: -1, duration: 100, delay: 150, easing: 'easeInElastic' },

  ],
  scaleX: [
    { value: [-1.75, 1], duration: 10 },
    { value: 2, duration: 100, delay: 150, easing: 'easeOutElastic' },
  ],
  loop: true,
  easing: 'easeInOutElastic',
  loopBegin: function(anim){ 
    anime({
      targets:'.star',
      easing: 'easeInOutElastic',
      opactiy:[1]
    })
  },
  loopComplete: function(anim){
   anime({
     targets:'.star',
     easing: 'easeInOutElastic',
     opactiy:[0]
   })
  },
  delay: anime.stagger(1600) 
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunctionSticky()};

// Get the navbar
var navbar = document.getElementById("stickyBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
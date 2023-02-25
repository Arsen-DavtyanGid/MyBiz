//Slider//

$(window).load(function () {
  $(".flexslider").flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
  });
});

//Numbers//

$(".sucessfull-stars-4").one("inview", function (event, visible) {
  if (visible == true) {
    $(".span-span").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
});
//Google Map//
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

//Transparent Window//
function visi() {
  let srca = document.querySelector(".searching");

  let b = srca.classList.contains("active");
  if (b) {
    srca.classList.remove("active");
  } else {
    srca.classList.add("active");
  }
}

//Nav Bar//
let cnox = document.querySelector(".nav-right");

cnox.addEventListener("click", function (e) {
  let child = cnox.children;
  for (const i of child) {
    i.removeAttribute("id");
  }
  e.target.setAttribute("id", "change-color");
});
////////////////////

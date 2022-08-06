

function revealheader() {
  var video = document.getElementById("myVideo");
  var header = document.getElementById("header");

  var windowheight = window.pageYOffset;
  var rtop = video.getBoundingClientRect().top + 300;
  if (rtop < windowheight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
window.addEventListener("scroll", revealheader);

const loader = document.getElementById("loader");
const container = document.getElementById("container");

window.addEventListener("load", () => {
  loader.style.display = "none";
  container.style.display = "block";
});

// testimonial js

$(document).ready(function () {
  $(".items").slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const navbar= document.getElementById("nav");
const a_tag= document.querySelectorAll(".anchor");

for(var i = 0; i < a_tag.length;i++ ){
  a_tag[i].addEventListener('click' , () =>{
    navbar.classList.remove('active')
  })
}

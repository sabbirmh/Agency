$(function(){

    'use strict';
  

    // about slider js
      
    // $('.banner_slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 4000,
    //     arrows: false,
    //   });



    
$('.about_slider').slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    adaptiveHeight: true
  });


// $('.about_slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

  
  });

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".ib__clients").appendChild(copy);
//===== tiny slider
// const slider = tns({
//   container: '.slider',
//   items: 3,
//   slideBy: 'page',
//   autoplay: false,
//   controls: true,
//   nav: true
// });

const sliderOptions = {
  container: '.slider',
  items: 1,
  slideBy: 2.6,
  autoplay: false,
  controls: false,
  nav: true,
  "gutter": 20,
  "mouseDrag": true,
  responsive: {
    0: {
      items: 1,
    },
    540: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
};

// var slider = tns({
//   container: '.my-slider',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   nav: false,
//   autoplayButtonOutput: false,
//   mouseDrag: true,
// });

var slider_our_work = tns({
  container: '.our__showcase',
  items: 1, // Number of fully visible cards (centered)
  slideBy: 1, // Slide one card at a time
  //center: true, // Center the current card
  nav: false, // Hide navigation controls (optional)
  controls: false, // Hide prev/next buttons (optional)
  autoplay: true,
  autoplayTimeout: 5000,
  gutter: 40,
  mouseDrag: true,
  // controlsContainer: "#showcase-controls",
  responsive: {
    640: {
      items: 2, // Number of partially visible cards on larger screens
    },
    1500: {
      items: 3, // Number of partially visible cards on larger screens
    },
    1800: {
      items: 3, // Number of partially visible cards on larger screens
    }
  },

});

var prevButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');

prevButton.addEventListener('click', function () {
  slider_our_work.goTo('prev');
});

nextButton.addEventListener('click', function () {
  slider_our_work.goTo('next');
});

/*var slider_our_works = tns({
  container: '.ib__blog_items',
  items: 1, // Number of fully visible cards (centered)
  slideBy: 1, // Slide one card at a time
  //center: true, // Center the current card
  nav: false, // Hide navigation controls (optional)
  controls: false, // Hide prev/next buttons (optional)
  autoplay: false,
  gutter: 40,
  responsive: {
    640: {
      items: 2, // Number of partially visible cards on larger screens
    },
    1500: {
      items: 3, // Number of partially visible cards on larger screens
    },
    1800: {
      items: 3, // Number of partially visible cards on larger screens
    }
  },

});*/
//const uiUxSlider = tns({ ...sliderOptions, container: '.our-works' });
// const uiUxSlider = tns({ ...sliderOptions, container: '.ui-ux-slider' });
// const mobileAppSlider = tns({ ...sliderOptions, container: '.mobile-app-slider' });
// const webDesignSlider = tns({ ...sliderOptions, container: '.web-design-slider' });

//======== tiny slider
// tns({
//   container: '.ib__testimonial',
//   autoplay: true,
//   autoplayButtonOutput: false,
//   mouseDrag: true,
//   gutter: 15,
//   nav: false,
//   controls: false,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     540: {
//       items: 2,
//     },
//     768: {
//       items: 3,
//     },
//     992: {
//       items: 4,
//     }
//   }
// });

/*

tns({
  container: '.slider-get-free-design-inner',
  autoplay: true,
  "center": true,
  "loop": false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  gutter: 30,
  nav: false,
  controls: false,
  "rewind": true,
  responsive: {
    0: {
      items: 1,
      gutter: 0,
      "center": true,
      "loop": true,
      "rewind": false,
    },
    540: {
      items: 1,
      gutter: 30,
    },
    768: {
      items: 3,
      gutter: 30,
    },
    992: {
      items: 3,
      gutter: 30,
    }
  }
});
*/
//======== tech we use

/*const configTechSlider = {
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  gutter: 25,
  nav: false,
  loop: true,
  controls: false,
  responsive: {
    0: {
      items: 1,
      autoplayTimeout: 1500,
      speed: 1000,
    },
    540: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    }
  }
}

const techWeUse1 = tns({ ...configTechSlider, container: '.tech-we-use-1' });
const techWeUse2 = tns({
  ...configTechSlider, loop: true, container: '.tech-we-use-2', autoplayDirection: 'backward', responsive: {
    0: {
      items: 1,
      autoplayTimeout: 1500,
      speed: 1000,
    },
    540: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    }
  }
});*/

//========= testimonial 
tns({
  container: '.testimonial-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true,
  mouseDrag: true,
  gutter: 15,
  nav: true,
  controls: false,
  controlsText: ['<i class="lni lni-arrow-left"></i>', '<i class="lni lni-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    540: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1170: {
      items: 2,
    }
  }
});

//====== counter up 
var cu = new counterUp({
  start: 0,
  duration: 2000,
  intvalues: true,
  interval: 100,
  append: " ",
});
cu.start();
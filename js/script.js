const digitEl = document.querySelector('.digit-1')
const digitEl2 = document.querySelector('digit-2')

const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

let number = 1

nextEl.addEventListener('click', () => {
  if (number === 4) {
    number = 1
    digitEl.innerText = `0${number}`
  } else {
    number++
    digitEl.innerText = `0${number}`
  }
})

prevEl.addEventListener('click', () => {
  if (number === 1) {
    number = 4
    digitEl.innerText = `0${number}`
  } else {
    number--
    digitEl.innerText = `0${number}`
  }
})

$(document).ready(function () {
  var owl = $('.availablity-carousel')
  owl.owlCarousel({
    loop: true,
    mouseDrag: true,
    dots: true,
    nav: false,
    navigation: false,
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 1,
      },

      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1441: {
        items: 1,
      },
      1600: {
        items: 1,
      },
      1320: {
        items: 1,
      },
    },
  })
  $('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel')
  })
})

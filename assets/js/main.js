const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

// utils
// const activeClass = (activeClass, listClass, activeIndex) => {
//     bind2(`.${listClass}`).forEach((item, index) => {
//         if(index === activeIndex){
//             item.classList.add(activeClass)
//         }else {
//             item.classList.remove(activeClass)
//         }
//     })
// }

// mobile nav handler
// const toggleNavMobile = () => {
//     bind1('.soft-menu').classList.toggle('open')
//     bind1('.soft-menu__list').classList.toggle('open')
// }

// bind2('.soft-menu__item').forEach((element) => {
//     if(element.id !== 'contact-sub'){
//         element.onclick = (e) => {
//             toggleNavMobile()
//             bind1('.soft-menu').click()
//         }
//     }
// })

// bind1('#contact-sub').onclick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     bind1('.soft-menu__item-sub-list').classList.toggle('open')
// }


// scoll to top
bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// handle animate number
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

// loading animation
window.addEventListener('load', (event) => {
  bind1('.loading').style.display = "none"
});


bind2('.show-password').forEach(icon => {
    icon.onclick = () => {
        console.log()
        if(icon.childNodes[0].classList[1] === 'fa-eye'){
            icon.childNodes[0].classList.remove('fa-eye')
            icon.childNodes[0].classList.add('fa-eye-slash')
            icon.parentNode.querySelector('input').type = 'text'
        }else{
            icon.childNodes[0].classList.remove('fa-eye-slash')
            icon.childNodes[0].classList.add('fa-eye')
            icon.parentNode.querySelector('input').type = 'password'
        }
    }
})


// bind2('.primary-form-header-close').forEach((closebtn) => {
//     closebtn.onclick = () => {
//         console.log(closebtn.parentNode.parentNode.parentNode.parentNode.parentNode)
//         closebtn.parentNode.parentNode.parentNode.parentNode.parentNode.click()
//     }
// })

// SWIPER SLIDES

    //  ---Large banner slider
    var swiperLargeBanner = new Swiper(".swiper-l-banner", {
        slidesPerView: 1,
        effect: 'fade',
        centeredSlides: true,
        spaceBetween: 0,
        // auto
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // ---Menu slider
    var swiperMenu = new Swiper(".swiper-menu", {
        slidesPerView: 1,
        // effect: 'fade',
        centeredSlides: true,
        spaceBetween: 0,
        // auto
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // When window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // When window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
    });
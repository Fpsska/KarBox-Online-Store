$(document).ready(function () {

    $(function () {
        $(".header__slider").slick({
            dots: true,
            arrows: false,
            speed: 300,
            autoHeight: true,
            slidesToShow: 1,
            infinite: false,
        });
    });
    $(function () {
        $('.description__slider').slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            infinite: false,
            autoHeight: true,
            prevArrow: '<button class="slider-arw__header slider-arw__header_left"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.274969 5.14889C0.275249 5.14861 0.275484 5.14828 0.275812 5.148L5.17444 0.272997C5.54142 -0.0922062 6.135 -0.0908471 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.602L3.20822 4.875H23.0625C23.5803 4.875 24 5.29471 24 5.8125C24 6.33028 23.5803 6.75 23.0625 6.75H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7172 5.17439 11.352L0.275764 6.477C0.275484 6.47671 0.275249 6.47639 0.274921 6.47611C-0.0922508 6.10964 -0.0910778 5.51414 0.274969 5.14889Z"fill="black"/></svg></button>',
            nextArrow: '<button class="slider-arw__header slider-arw__header_right"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d= "M23.725 5.14889C23.7248 5.14861 23.7245 5.14828 23.7242 5.148L18.8256 0.272997C18.4586 -0.0922062 17.865 -0.0908471 17.4997 0.276184C17.1345 0.643168 17.1359 1.23675 17.5028 1.602L20.7918 4.875H0.9375C0.419719 4.875 0 5.29471 0 5.8125C0 6.33028 0.419719 6.75 0.9375 6.75H20.7917L17.5029 10.023C17.1359 10.3882 17.1345 10.9818 17.4998 11.3488C17.865 11.7159 18.4587 11.7172 18.8256 11.352L23.7242 6.477C23.7245 6.47671 23.7248 6.47639 23.7251 6.47611C24.0923 6.10964 24.0911 5.51414 23.725 5.14889Z" fill="black"/></svg></button>'
        });
    });
    $(function () {
        $(".testmnls-slider").slick({
            dots: false,
            speed: 300,
            autoHeight: true,
            slidesToShow: 1,
            infinite: false,
            prevArrow: '<button class="slider-arw__testmn slider-arw__testmn_left"><svg width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.9999 59.6113L4.38867 31L32.9999 2.38873" stroke="white" stroke-opacity="0.6" stroke-width="6"/></svg></button>',
            nextArrow: '<button class="slider-arw__testmn slider-arw__testmn_right"><svg width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.38861 59.6113L30.9999 31L2.38861 2.38873" stroke="white" stroke-opacity="0.6" stroke-width="6"/></svg></button>'
        });
    });
    $(function () {
        $(".card__slider").slick({
            dots: false,
            arrows: false,
            speed: 300,
            autoHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });
    $(function () {
        $(".about__slider").slick({
            dots: false,
            arrows: false,
            speed: 300,
            autoHeight: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });
    $('#vendor__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('#vendor__slider-mobile').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.tabs__slider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});
// /.SLIDERS

document.addEventListener("DOMContentLoaded", () => {

    const dataScrollElement = document.querySelectorAll("[data-scroll]").forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const elementID = event.currentTarget.getAttribute("data-scroll").substr(1);

            document.getElementById(elementID).scrollIntoView({
                behavior: "smooth"
            })
        })

    })
    // /.ANCHORS

    let bar = document.querySelector("#bar");
    let barHeight = bar.clientHeight;

    let barMobile = document.querySelector(".bar-mobile");
    let barMobileHeight = barMobile.clientHeight;

    window.addEventListener('scroll', () => {
        let scrollPos = window.pageYOffset;

        if (scrollPos > barHeight || scrollPos > barMobileHeight) {
            bar.classList.add("bar-sticky");
            barMobile.classList.add("bar-sticky");
            document.querySelectorAll("button[data-scroll]").forEach(item => {
                item.style.borderRadius = "10px"
            })
        } else {
            bar.classList.remove("bar-sticky");
            barMobile.classList.remove("bar-sticky");
            document.querySelectorAll("button[data-scroll]").forEach(item => {
                item.style.borderRadius = "0";
            })
        }
    });
    // /.HEADER FIXED


    let animateItems = document.querySelectorAll(".animate");
    let btn = document.querySelectorAll(".btn");

    window.addEventListener("scroll", () => {
        if (animateItems.length > 0) {
            let animOnScroll = () => {
                animateItems.forEach(item => {
                    let animItem = item;
                    let animItemHeight = animItem.offsetHeight; // высота анимированно объекта
                    let animItemOffset = offset(animItem).top; // позиция анимированно объекта от верха страницы
                    let animStart = 4; // коэфф страрта анимации

                    let animItemPoint = window.innerHeight - animItemHeight / animStart; // точка старта анимации
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }

                    // pageYOffset - данные о кол-ве проскроленных пикселей
                    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add("animate")
                    } else {
                        animItem.classList.remove("animate")
                    }
                })
            }

            let offset = (el) => {  // функция получения значения offsetTo (кроссбраузерно)
                const rect = el.getBoundingClientRect();
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            }
            // setTimeout(() => { // задержка для функции 
            //     animOnScroll();
            // }, 25)
            animOnScroll();
        }
    })
    // /.ANIMATE FOR ITEMS

    let tabsBtn= document.querySelectorAll(".tabs__position-item");
    let tabs = document.querySelectorAll(".tabs__descrpt");

    tabsBtn.forEach(item => {
        item.addEventListener("click", () => {
            let currentBtn = item;
            let tabID = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabID);  // конкретный блок, через выборку по атрибуту


            tabsBtn.forEach(item => {
                item.classList.remove("active");
            })
            
            tabs.forEach(item => {
                item.classList.remove("active");
            })

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        })
    })
    // /. TABS (THIRD PAGE)

});



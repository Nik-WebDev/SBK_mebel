$(document).ready(function () {
  $(".menu__btn").click(function (event) {
    $(".menu__btn,.menu").toggleClass("active");
    $("body").addClass("lock");
    $("ul li a").click(function () {
      if ($(".menu").hasClass("active")) {
        $(".menu").removeClass("active");
        $(".menu__btn").removeClass("active");
      }
    });
  });
  $(document).mouseup(function (e) {
    var el = $(".menu,.menu__btn"); // <<--- сюда id блока меню
    // тут сказано )) что если клик не по блоку `id_name`, то выполнить условие
    if (!el.is(e.target) || el.has(e.target).length !== 0) {
      $(".menu").removeClass("active");
      $(".menu__btn").removeClass("active");
      return false;
    }
  });

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7(999) 999-99-99");
    $("#formphone").mask("+7(999) 999-99-99");
    $("#kitchen-phone").mask("+7(999) 999-99-99");
  });

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  // $("nav, .header__logo, .choose, .work__wrapper").on("click","a","a:not([href^='#']):not(class='work__dwnld')", function (event) {
  //   // исклюz
  //   event.preventDefault();
  //   // получем идентификатор блока из атрибута href
  //   var id  = $(this).attr('href'),
  //   // находим высоту, на которой расположен блок
  //       top = $(id).offset().top;
  //   // анимируем переход к блоку, время: 1800 мс
  //   $('body,html').animate({scrollTop: top -50}, 1800);
  //   return false;
  //  });
   
  // $('a[href*="#"]').on('click', function (e) {
  //   e.preventDefault();
   
  //   $('html, body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top
  //   }, 1800, 'linear');
  // });

  jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1800, 'swing', function(){
    window.location.hash = hash;
    });
    });
    });

   window.addEventListener('load', AOS.refresh)
   AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  $(".furniture__wrapper").slick({
    nextArrow:
      ' <button class="slick-arrow slick-next"><img src="images/Arrow-right.svg" alt="arrow-next"></button>',
    prevArrow:
      ' <button class="slick-arrow slick-prev"><img src="images/Arrow-left.svg" alt="arrow-prev"></button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".kitchen__slider-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    asNavFor: ".kitchen__slider-nav",
  });
  $(".kitchen__slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".kitchen__slider-big",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});



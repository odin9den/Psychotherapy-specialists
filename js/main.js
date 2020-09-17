$(function () {
  $(".review__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault(); /* отмена стандартного поведения */

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      300
    );
  });

  $(".register-btn__bottom").on("click", function (event) {
    event.preventDefault();

    $(".thanks-form__wrapper").addClass("active");
    $(".wrapper").addClass("shadow");
  });

  $(".close").on("click", function () {
    $(".thanks-form__wrapper.active").removeClass("active");
    $(".wrapper.shadow").removeClass("shadow");
  });

  $(".header__mobile-img").on("click", function () {
    $(".menu").addClass("active");
    $(this).addClass("hide");
    $(".header__mobile-close").addClass("show");
  });

  $(".header__mobile-close, .header__link").on("click", function () {
    $(".menu").removeClass("active");
    $(".header__mobile-img").removeClass("hide");
    $(".header__mobile-close").removeClass("show");
  });
});

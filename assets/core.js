$(document).ready(function () {
  $(".menu").click(function () {
    $(".sidebar-menu").addClass("active");
    $(".sidebar-backdrop").addClass("active");
  });
  $(".sidebar-close").click(function () {
    $(".sidebar-menu").removeClass("active");
    $(".sidebar-backdrop").removeClass("active");
  });

  $(".sidebar_dropdown_btn").click(function (e) {
    $(this).toggleClass("active");
    $(this).next().slideToggle(300);
    e.stopPropagation();
  });

  $(document).on("click", ".sidebar_menu", function () {
    $(this)
      .parent()
      .siblings(".sidebar_dropdown_1")
      .slideToggle("sidebar_dropdown_2");
  });

  $(document).on("click", ".sidebar_menu_1", function () {
    $(this)
      .parent()
      .siblings(".sidebar_dropdown_2")
      .slideToggle("sidebar_dropdown_2");
  });

  $(document).on("click", ".sidebar_menu_2", function () {
    $(this)
      .parent()
      .siblings(".sidebar_dropdown_3")
      .slideToggle("sidebar_dropdown_2");
  });

  $(document).on("click", ".sidebar_menu_3", function () {
    $(this)
      .parent()
      .siblings(".sidebar_dropdown_4")
      .slideToggle("sidebar_dropdown_2");
  });

  $(".link").click(function () {
    $(".link").removeClass("menu_bar_clr");
    $(this).addClass("menu_bar_clr");
  });
  $(".about_us_link").mouseenter(function () {
    $(this).children(".drop_down").addClass("drop_down_1");
  });
  $(".about_us_link").mouseleave(function () {
    $(this).children(".drop_down").removeClass("drop_down_1");
    $(".link").removeClass("menu_bar_clr");
  });
});

$('.allowance-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-left slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slide-arrow next-arrow"></i>',
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.awards-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.rating-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-left slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slide-arrow next-arrow"></i>',
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

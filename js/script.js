$(function ($) {
  "use strict";

  // ScrollSpy for navbar
  $('body').scrollspy({
      target: '.navbar',
      offset: 81
  });

  // Smooth scroll for anchor links
  $('a[href*="#"]:not([href="#"]').on('click', function (e) {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top - 60
              }, 1000);
              return false;
          }
      }
  });

  // Close navbar collapse on link click
  $('ul.navbar-nav > li > a').on('click', function () {
      $('.navbar-collapse').removeClass('show');
  });

  // Animated headline
  if ($.fn.animatedHeadline) {
      $('.typed').animatedHeadline({
          animationType: 'clip'
      });
  }

  // Back-to-top button
  var bc2top = $('.bakTop');
  $(window).on('scroll', function () {
      if ($(this).scrollTop() > 150) {
          bc2top.fadeIn(1000);
      } else {
          bc2top.fadeOut(1000);
      }
  });

  // Preloader
  $(window).on('load', function () {
      $('.preloader').delay(500).fadeOut(500);
      $('.spinner').delay(500).fadeOut(500);
  });

  // Lightbox (Venobox)
  if ($.fn.venobox) {
      $('.venobox').venobox({
          spinner: 'double-bounce'
      });
  }

  // Portfolio filtering with Isotope
  if ($.fn.isotope) {
      var $projects = $(".projects");
      $projects.isotope({
          itemSelector: ".item",
          layoutMode: "fitRows"
      });

      $("ul.filters > li").on("click", function (e) {
          e.preventDefault();
          var filter = $(this).attr("data-filter");

          $("ul.filters > li").removeClass("active");
          $(this).addClass("active");

          $projects.isotope({
              filter: filter
          });
      });
  }

  // Portfolio card hover effect
  $(".project")
      .mouseenter(function () {
          $(this)
              .find(".project-overlay")
              .css({
                  top: "-100%"
              });
          $(this)
              .find(".project-hover")
              .css({
                  top: "0"
              });
      })
      .mouseleave(function () {
          $(this)
              .find(".project-overlay")
              .css({
                  top: "0"
              });
          $(this)
              .find(".project-hover")
              .css({
                  top: "100%"
              });
      });

  // Banner slider
  if ($.fn.slick) {
      $('#banner_part').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 5000,
          infinite: true,
          arrows: true,
          prevArrow: '<i class="fas fa-long-arrow-alt-left banner_left"></i>',
          nextArrow: '<i class="fas fa-long-arrow-alt-right banner_right"></i>',
          speed: 1000
      });
  }

  // WOW.js for scroll animations
  if (typeof WOW !== 'undefined') {
      new WOW().init();
  }
});
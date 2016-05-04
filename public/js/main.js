 $(document).ready(function () {
     $('.parallax').parallax();
     $('.slider').slider({

     });
     $('select').material_select();

     var swiper = new Swiper('.swiper-container', {
         pagination: '.swiper-pagination'
         , nextButton: '.swiper-button-next'
         , prevButton: '.swiper-button-prev'
         , slidesPerView: 1
         , paginationClickable: true
         , spaceBetween: 30
         , loop: true
         , effect: 'slide'
         , watchSlidesProgress: true

     });
     $(document).ready(function () {

     });

 });
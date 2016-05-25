 $(document).ready(function () {
     $('.parallax').parallax();
     $('.slider').slider({

     });
     $('select').material_select();
     $(document).ready(function () {
         var pgwSlider = $('.pgwSlider').pgwSlider({
             maxHeight: 400
             , verticalCentering: true
         });
         pgwSlider.stopSlide();
     });
 });

 var mn = $("#logobarStatic");
 var filler = $("#filler");
 mns = "main-nav-scrolled";
 hdr = $('#home').height();

 $(window).scroll(function () {
     if ($(this).scrollTop() > hdr) {
         mn.addClass(mns);
         filler.css('display', 'block');

     } else {
         mn.removeClass(mns);
         filler.css('display', 'none');


     }
 });

 var options = [
     {
         selector: '#Competitive1'
         , offset: 200
         , callback: function () {
             //Materialize.toast("This is our ScrollFire Demo!", 1500);
             $('#Competitive1').addClass('animated slideInRight');

         }
     }, {
         selector: '#Competitive2'
         , offset: 200
         , callback: function () {
             //Materialize.toast("Please continue scrolling!", 1500);
             $('#Competitive2').addClass('animated slideInLeft');

         }
     }, {
         selector: '#Competitive3'
         , offset: 20
         , callback: function () {
             $('#Competitive3').addClass('animated slideInRight');
             //             Materialize.showStaggeredList('#staggered-test')                 //Materialize.showStaggeredList("#staggered-test");
         }
     }
  ];
 Materialize.scrollFire(options);
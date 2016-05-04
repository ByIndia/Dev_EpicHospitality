 $(document).ready(function () {
     $('.parallax').parallax();
     $('.slider').slider({

     });
     $('select').material_select();
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

 function detectmob() {
     if (window.innerWidth <= 600) {
         return true;
     } else {
         return false;
     }
 }
 var options = [
     {
         selector: '#staggered-test1'
         , offset: 200
         , callback: function () {
             //Materialize.toast("This is our ScrollFire Demo!", 1500);
             $('#Competitive1').addClass('animated slideInUp');

         }
     }, {
         selector: '#staggered-test2'
         , offset: 200
         , callback: function () {
             //Materialize.toast("Please continue scrolling!", 1500);
             $('#Competitive2').addClass('animated slideInUp');

         }
     }
  ];
 Materialize.scrollFire(options);
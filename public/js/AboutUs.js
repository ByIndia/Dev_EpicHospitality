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
         selector: '#image-test'
         , offset: 500
         , callback: function () {
             Materialize.fadeInImage("#image-test");
         }
     }
  ];
 Materialize.scrollFire(options);
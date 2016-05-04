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
     $(".button-collapse").sideNav();


 });
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
     }, {
         selector: '#staggered-test3'
         , offset: 20
         , callback: function () {
             $('#Competitive3').addClass('animated slideInUp');
             //             Materialize.showStaggeredList('#staggered-test')                 //Materialize.showStaggeredList("#staggered-test");
         }
     }, {
         selector: '#image-test'
         , offset: 500
         , callback: function () {
             Materialize.fadeInImage("#image-test");
         }
     }
  ];
 Materialize.scrollFire(options);


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
 $(window).load(function () {
//     $('.flexslider').flexslider({
             //         animation: "slide"
             //         , controlNav: "thumbnails"
             //         , itemWidth: 600
             //         , start: function (slider) {
             //             $('body').removeClass('loading');
             //         }
             //     });
 });

 function MapInit() {
     var mapProp = {


         panControl: true
         , zoomControl: true
         , mapTypeControl: true
         , scaleControl: true
         , overviewMapControl: true
         , rotateControl: true
         , mapTypeId: google.maps.MapTypeId.ROADMAP
         , center: new google.maps.LatLng(13.058560, 80.233493)
         , zoom: 15,


     };
     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(13.058560, 80.233493)
         , map: map
         , animation: google.maps.Animation.BOUNCE
         , title: "Mark On Map"

     });

     var contentString = '<div><b>Epic Hospitality</b><p>Flat No 2,"Hari Harathmajm",<br> Mahalingam Street, Mahalingapuram,Chennai - 600034. <br/>Phone no: +91 4428171437;Email id: epichosp@ gmail.com </p></div > ';
     var infowindow = new google.maps.InfoWindow({
         content: "Address" + contentString
     });
     infowindow.open(map, marker);
 }

 function loadScript() {
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCykeItMY-sRpKvFqTrqDvmN79_ru33JM&sensor=false&callback=MapInit";
     document.body.appendChild(script);
 }



 window.onload = loadScript;

 $(function () {
     $('#googleMap').click(function (e) {
         $('#googleMap div').css('pointer-events', 'auto');
     }).mouseleave(function (e) {
         $('#googleMap div').css('pointer-events', 'none');
     });
 })
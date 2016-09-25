 $(document).ready(function () {
     $('.parallax').parallax();
     $('.slider').slider({});
     $('select').material_select();
     //From validation Start
     $("#formValidate ").validate({
            rules: {
                name: {
                    required: true
                    , minlength: 5
                }
                , email: {
                    required: true
                    , email: true
                }
                , phone: {
                    required: true
                }
                , shortMsg: {
                    required: true
                }
                , msg: "required"
                , shortMsg: "required"
            }, //For custom messages
            messages: {
                name: {
                    required: "Enter your Name "
                    , minlength: "Enter at least 5 characters "
                }
            }
            , errorElement: 'div'
            , errorPlacement: function (error, element) {
                var placement = $(element).data('error');
                if (placement) {
                    $(placement).append(error)
                } else {
                    error.insertAfter(element);
                }
            }
            , submitHandler: function (form, e) {
                //form.submit();
                $.post("../contactsupport.php", $("#formValidate").serialize(), function (data) {
                    //                    var res = JSON.parse(data);
                    if (data["msg"] == "sent") {

                        $('#formValidate').addClass('animated bounceOut');

                        $('#contactfrom').html("<h5 class='valign center'>Thankyou</h5><h4 class=' valign center'>We got your mail <br/>Soon our team will get in touch with you  </h4>");
                            alert('hi');
                    } else {
                        alert(data["msg"]);
                    }
                });
                e.preventDefault();
                return false;

            }
        });
    //From validation End

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
 $(window).load(function () {

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


     //     var infowindow = new google.maps.InfoWindow({
     //         content: "Address" + contentString
     //     });
     //     infowindow.open(map, marker);
 }

 function loadScript() {
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDCykeItMY-sRpKvFqTrqDvmN79_ru33JM&sensor=false&callback=MapInit";
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


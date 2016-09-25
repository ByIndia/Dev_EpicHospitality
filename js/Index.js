        $(document).ready(function () {
            $('#carousel').roundabout({
                minScale: .5
                , childSelector: "li"
                , autoplay: true
                , autoplayDuration: 500000
                , autoplayPauseOnHover: true
                , btnNext: ".next"
                , shape: "lazySusan"
                , responsive: true
                , reflect: true
                , minOpacity: 0.95
                , tilt: 0.5

            });
        });
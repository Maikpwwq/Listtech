// Galeria Responsive

<script src="/tienda/js_sitio/responsiveslides.min.js"></script>
            <script>
        // You can also use "$(window).load(function() {"
        $(function () {

          // Slider principal
          $("#slider_responsive").responsiveSlides({
            auto: true,
            pager: false,
            label: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              //$('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              //$('.events').append("<li>after event fired.</li>");
            }
          });

                    // Slider principal
          $("#slider_responsivep").responsiveSlides({
            auto: true,
            pager: false,
            label: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              //$('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              //$('.events').append("<li>after event fired.</li>");
            }
          });


                    $("#slider_responsive_footer").responsiveSlides({
            auto: true,
            pager: false,
            label: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              //$('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              //$('.events').append("<li>after event fired.</li>");
            }
          });


          // Slider internas
          $("#slider_internas").responsiveSlides({
            auto: true,
            pager: false,
            label: false,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              //$('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              //$('.events').append("<li>after event fired.</li>");
            }
          });

          $("#slider_responsive_constructor").responsiveSlides({
            auto: true,
            pager: false,
            label: false,
            nav: true,
            speed: 900,
            namespace: "callbacks",
            before: function () {
              //$('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              //$('.events').append("<li>after event fired.</li>");
            }
          });
  
  
          });
      </script>            
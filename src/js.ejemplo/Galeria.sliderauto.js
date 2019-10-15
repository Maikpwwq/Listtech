// Galeria slider automatico

<script src="/tienda/js_sitio/jquery.slides.min.js"></script>

<script>
    $(function() {
        $('#slides').slidesjs({
            width: 940,
            height: 200,
            play: {
                active: true,
                auto: true,
                interval: 4000,
                swap: true
            }
        });

</script>
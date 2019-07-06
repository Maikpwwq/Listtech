// Galeria Index


<script src="/tienda/js_sitio/jquery.easing.1.3.js"></script>
    <script src="/tienda/js_sitio/jquery.animate-colors-min.js"></script>
    <script src="/tienda/js_sitio/jquery.skitter.min.js"></script>
    <script>
        $(document).ready(function(){
            $('.box_skitter_small').css({ width: 691, height: 270 }).skitter({ label: false, numbers: false, animation: 'blind', hideTools: true, navigation: true, dots: false });
        $('.box_skitter_large').css({width: 1012, height: 300}).skitter({
            animation: 'blind',// Animación de galeria
    interval: 8000, //Tiempo de espera
    label: true,// Texto en la galeria
    labelAnimation: 'slideUp',// slideUp, left, right, fixed (Animación de texto)
    theme: 'clean', // minimalist, round, clean, square (Tema de galeria)
    progressbar: true,//Linea tiempo cambio de imagen
    hideTools: true,// Mostar flechas con el hover
    navigation: true,//Paginador por flechas
    numbers: true,//Paginador por numeros
    dots: true,//Paginador por punticos
    numbers_align: 'center',//Alineacion paginador
    preview: false// Zoom de las demás imagenes
});
            $('.box_skitter_lateral').css({width: 285, height: 207}).skitter({label: false, numbers: false, animation: 'blind', hideTools: true, navigation: true, dots: false});
});
        </script>
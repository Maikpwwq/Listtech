// Carrusel con scroll

<script type="text/javascript" language="javascript"
    src="/tienda/js_sitio/jquery.carouFredSel-6.2.0-packed.js"></script>
    <script type="text/javascript" language="javascript"
        src="/tienda/js_sitio/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" language="javascript"
        src="/tienda/js_sitio/jquery.touchSwipe.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function(){

            $('#carrusel_imagenes_caracteristicas_n').carouFredSel({
                // width: "650px",
                height: "200px",
                auto: {
                    play: false,
                    pauseOnHover: true,
                    duration: 9000,
                    timeoutDuration: 90000
                },
                items: {
                    visible: {
                        min: 3,
                        max: 3
                    }
                },
                prev: '#prev_carrusel_imagenes_caracteristicas_n',
                next: '#next_carrusel_imagenes_caracteristicas_n',
                direction: "left",
                mousewheel: true
            });
        $('#carrusel_imagenes_labor').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 4
    }
},
prev: '#prev_carrusel_imagenes_labor',
next: '#next_carrusel_imagenes_labor',
direction: "left",
mousewheel: true
});


                $('#carrusel_imagenes_caracteristicas_d2').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 1,
        max: 1
    }
},
prev: '#prev_carrusel_imagenes_caracteristicas_d2',
next: '#next_carrusel_imagenes_caracteristicas_d2',
direction: "left",
mousewheel: true
});

                $('#carrusel_imagenes_caracteristicas_d1').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 1,
        max: 1
    }
},
prev: '#prev_carrusel_imagenes_caracteristicas_d1',
next: '#next_carrusel_imagenes_caracteristicas_d1',
direction: "left",
mousewheel: true
});

         $('#carrusel_imagenes_marcas').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 6
    }
},
prev: '#prev_carrusel_imagenes_marcas',
next: '#next_carrusel_imagenes_marcas',
direction: "left",
mousewheel: true
});

                $('#carrusel_imagenes').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 6
    }
},
prev: '#prev_carrusel_imagenes',
next: '#next_carrusel_imagenes',
direction: "left",
mousewheel: true
});

                    $('#carrusel_imagenes_eventos').carouFredSel({
            // width: "650px",
            height: "200px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 1,
        max: 1
    }
},
prev: '#prev_carrusel_imagenes_eventos',
next: '#next_carrusel_imagenes_eventos',
direction: "left",
mousewheel: true
});

$('#pro_mas_vendidos').carouFredSel
                            ({
            height: "variable",
                    auto:{
            play: true,
        pauseOnHover:true,
        duration:1000,
        timeoutDuration:10000
    },
    prev: '#prev_pro_mas_vendidos',
    next: '#next_pro_mas_vendidos',
    direction: "up",
                    items: {
            visible: 4,
        height:"variable"
    },
mousewheel: true
});

                $('#cont_galeria_producto').carouFredSel({
            // width: "650px",
            height: "98px",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 2,
        max: 6
    }
},
prev: '#prev_cont_galeria_producto',
next: '#next_cont_galeria_producto',
direction: "left",
mousewheel: true
});

                $('#carrusel_otros_productos').carouFredSel({
            width: "650px",
        height:"variable",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 6
    }
},
prev: '#prev_carrusel_otros_productos',
next: '#next_carrusel_otros_productos',
direction: "left",
mousewheel: true
});

           $('#carrusel_otros_productos2').carouFredSel({
            width: "650px",
        height:"variable",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 6
    }
},
prev: '#prev_carrusel_otros_productos2',
next: '#next_carrusel_otros_productos2',
direction: "left",
mousewheel: true
});
                $('#carrusel_criterios').carouFredSel({
            width: "650px",
        height:"variable",
                    auto:{
            play: false,
        pauseOnHover:true,
        duration:9000,
        timeoutDuration:90000
    },
                    items: {
            visible: {
            min: 4,
        max: 5
    }
},
prev: '#prev_carrusel_criterios',
next: '#next_carrusel_criterios',
direction: "left",
mousewheel: true
});

var $carousel = $('#carrusel_producto_ligh'),
$pager = $('#pager_producto_ligh');

                function getCenterThumb() {
                    var $visible = $pager.triggerHandler( 'currentVisible' ),
            center = Math.floor($visible.length / 2);

        return center;
    }

                $carousel.carouFredSel({
            responsive: true,
                    items: {
            visible: 1,
        width: 500,
        height: (500/500*100) + '%'
    },
                    scroll: {
            fx: 'crossfade',
                        onBefore: function( data ) {
                            var src = data.items.visible.first().attr( 'src' );
        src = src.split( '/large/' ).join( '/small/' );

        $pager.trigger( 'slideTo', [ 'img[src="'+ src +'"]', -getCenterThumb() ] );
        $pager.find( 'img' ).removeClass( 'selected' );
    },
                        onAfter: function() {
            $pager.find('img').eq(getCenterThumb()).addClass('selected');
        }
    }
});
                $pager.carouFredSel({
            width: '100%',
        auto: false,
        height: 120,
                    items: {
            visible: 'odd'
    },
                    onCreate: function() {
                        var center = getCenterThumb();
                        $pager.trigger( 'slideTo', [ -center, {duration: 0 } ] );
        $pager.find( 'img' ).eq( center ).addClass( 'selected' );
    }
});
                $pager.find( 'img' ).click(function() {
                    var src = $(this).attr( 'src' );
        src = src.split( '/small/' ).join( '/large/' );
        $carousel.trigger( 'slideTo', [ 'img[src="'+ src +'"]' ] );
    });
});
        </script>        
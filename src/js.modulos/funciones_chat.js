$(function(){showOrHide = true;$("#mostrar").click(function() {if ( showOrHide == true ) {$('#desplegable-chat').show('slow');$('#cerrar-chat').addClass('cerrar-block');$('#cerrar-chat').removeClass('cerrar-none');showOrHide = false;} else if ( showOrHide == false ) {$('#desplegable-chat').hide('slow');$('#cerrar-chat').addClass('cerrar-none');$('#cerrar-chat').removeClass('cerrar-block');showOrHide = true;}});$("a[rel='pop-up']").click(function () {var caracteristicas = "height=550,width=600,scrollTo,resizable=1,scrollbars=1,location=0";nueva=window.open(this.href, 'Popup', caracteristicas);$("#desplegable-chat").hide('slow'); false;});});


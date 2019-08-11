/*
| ----------------------------------------------------------------- |
*/
// funciones genericas de javascript
//cargadores globales
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function ActivarTodo(forma,campobase)
  {
  var sa=false;
  var x=eval("document."+forma);
  var y=eval("document."+forma+"."+campobase);
  if(y.checked)
    sa=true;

  for (var i=0;i<x.elements.length;i++)
    {
    var e = x.elements[i];
	if (x.elements[i].name!="borrar1") {
		if(sa)
		  e.checked=true;
		else
		  e.checked=false;
		}
	}
 }

 function ActivarTodoGeneral(forma,campobase,camposeleccionado)
  {
  var sa=false;
  var x=eval("document."+forma);
  var y=eval("document."+forma+"."+campobase);
  if(y.checked)
    sa=true;

  for (var i=0;i<x.elements.length;i++)
    {
    var e = x.elements[i];
	if (x.elements[i].name==camposeleccionado) {
		if(sa)
		  e.checked=true;
		else
		  e.checked=false;
		}
	}
 }


function irAPaginaD(ruta){
	var redir = ruta;
	if (redir!=""){
		location.href=redir;
	}
}


function redondear(num)
{
//            var original=new String(num);
//            partir=original.split(".");
//            dec=partir[1];
/*
                if (partir>=5) {
                               result=Math.ceil(original)
                } else {
                               result=Math.ceil(original)
                }
*/
                result=num.toFixed(0);

                // result=num;

                return result;
}


// funcion de abrir ventana
function irAPaginaDN(ruta,ancho,alto){
	var redir=ruta;
	if (redir!=""){
		window.open(redir,"",'scrollbars=YES,width=600,height=600,left=30,top=2,resizable=yes');
	}
}

function imprimir_pedido(ruta,ancho,alto){
	var redir=ruta;
	if (redir!=""){
		window.open(redir,"",'scrollbars=YES,width='+ancho+',height='+alto+',left=30,top=2,resizable=yes');
	}
}

// cambia de color cuando se para por encima de la celda
function mOvr(src,clrOver) {
 if (!src.contains(event.fromElement)) {
	 src.style.cursor = 'default';
	 src.bgColor = clrOver;
	}
 }
function mOut(src,clrIn) {
	if (!src.contains(event.toElement)) {
	 src.style.cursor = 'default';
	 src.bgColor = clrIn;
	}
 }

// cambiar de una pagina a otra con recarga
function CargarPagina(newLocation)
	{
		var ventana;
		ventana = window.parent.opener;
		ventana.location = newLocation;
		window.parent.close();
	}


function CargarPagina1(newLocation,tipo)
	{
		var ventana;
		ventana = window.parent.opener;
		ventana.location = newLocation;
	}

function enviarconfirmx(m1,forma,redir){

		if (confirm(m1)== true ){
			if (forma!=""){
			var formabase=eval("document."+forma);
			formabase.submit();
			} else{
			location.href=redir;
			}
		}
}
function enviarconfirm(m1,m2,forma,redir){

		if (confirm(m1)== true ){
			if (forma!=""){
			var formabase=eval("document."+forma);
			formabase.submit();
			} else{
			location.href=redir;
			}
		} else {
			alert(m2);
			return;
		}
}
function enviarconfirma(m1,redir){

		if (confirm(m1)== true ){
			location.href=redir;
		}
}

function mensajeshtml(id,mensaje){
		var idbase=eval("document.getElementById('"+id+"')");
		var dsbase=eval("document.all."+id);
		dsbase.style.display="";
		idbase.innerHTML=mensaje;
}

function mostrar(numero) {
	var capabase=document.getElementById('capaseleccion_'+numero);
	if (capabase) {
		capabase.style.display="";
	}

}


function quitar(numero) {
	var capabase=document.getElementById('capaseleccion_'+numero);
	if (capabase) {
		capabase.style.display="none";
	}

}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function ocultar(capa) {
	var base=document.getElementById(capa);
	if (base) base.style.display="none";
}

function valU(forma,param){
	// alert("entra");
	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){
     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 document.getElementById('capa_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }
	if (valor=="") eval(base+"submit()");
}

function valUS(forma,param,valor){

	var base="document."+forma+".";
	partir=param.split(",");
	nombres=valor.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){
     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 alert("Debe ingresar "+nombres[i]);
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else if(partir[i]=='dsemail'||partir[i]=='dsemail2'){
     	var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!re.test(eval(base + partir[i] + ".value"))) {
			alert ("El correo electronico no es correcto");
			eval(base + partir[i] + ".focus()");
			valor=1;
		 	break;
		}
     }
     else {
	 	valor="";
	 }
    }
    //alert(valor);
	if (valor==""){ eval(base+"submit()");}
}

function valUC(forma,param,m1){
	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){


     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 document.getElementById('capa_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }
	if (valor==""){
	if (confirm(m1)== true ){
			eval(base+"submit()");
		}
	 }
}


function valUp(forma,param){
//alert ('hola');
	var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var tam=n-1;
	var i;
    var bError = false;
	var valor="";
	var x;
    for (i = 0; i < n; i++){
    x=eval(base + partir[i] + ".value");
    x=x.replace(/^\s+/,"");
     bError = bError || (x == "");
	 if (bError){
	 	eval(base + partir[i] + ".value=''");
		 document.getElementById('capax_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }



}

var correobase1=document.getElementById('dscorreo');
var clave1=document.getElementById('dsclave');
var clave2=document.getElementById('dsclave2');

if (correobase1){
    if (correobase1.value!=""){
	    if (!re.test(correobase1.value)) {
	       document.getElementById('capax_dscorreo').innerHTML="El correo no es valido";
	       document.getElementById('capax_dscorreo').style.display='';
	       correobase1.focus();
	       valor=1;
	   	}
    }
  }

if(clave1){
if (clave1.value!=clave2.value) {
   document.getElementById('capax_dsclave').innerHTML="Ambos correos deben ser iguales";
   document.getElementById('capax_dsclave2').style.display='';
   clave2.focus();
   valor=1;
}
}
var dsacepto=document.getElementById('dsacepto');
if(dsacepto){
	if (dsacepto.checked==false) {
	   document.getElementById('capax_dsacepto').style.display='';
	   valor=1;
	}
}


    if(partir[tam]=="captcha"){
    var texto=eval(base + partir[tam] + ".value");
		if (texto!="") {
			// cargar cliente y colocar las variables seleccionadas
			//alert(texto);
			conexion=AjaxObj();
			 conexion.open("POST","captcha/captcha.validar.php?captcha="+texto,true);
		     conexion.onreadystatechange =function() {
					 if (conexion.readyState==4) {
					 var _resultado = conexion.responseText;
					 //alert(_resultado);
						if (_resultado==1) {
							if(valor=="")eval(base+"submit()");
						}else{
							document.getElementById('capax_cap').style.display="";
							document.getElementById('captcha').src='captcha/captcha.php?'+Math.random();
							eval(base + partir[tam] + ".value=''");
							eval(base + partir[tam] + ".focus()");
							return;
						}
					} // fin funcion
			      } // fin conexion
			    //contenedor.innerHTML ="";
		conexion.send(null) // limpia conexion
	}
	}else{
		if(valor=="")eval(base+"submit()");
	}
	//if (valor=="")
}

function valUp2(forma,param){
	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var tam=n-1;
	var i;
    var bError = false;
	var valor="";
	var x;
    for (i = 0; i < n; i++){
    x=eval(base + partir[i] + ".value");
    x=x.replace(/^\s+/,"");
     bError = bError || (x == "");
	 if (bError){
	 	eval(base + partir[i] + ".value=''");
		 document.getElementById('capax_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }
    if(partir[tam]=="captcha"){
    var texto=eval(base + partir[tam] + ".value");
		if (texto!="") {
			// cargar cliente y colocar las variables seleccionadas
			//alert(texto);
			conexion=AjaxObj();
			 conexion.open("POST","../../captcha/captcha.validar.php?captcha="+texto,true);
		     conexion.onreadystatechange =function() {
					 if (conexion.readyState==4) {
					 var _resultado = conexion.responseText;
					 //alert(_resultado);
						if (_resultado==1) {
							if(valor=="")eval(base+"submit()");
						}else{
							document.getElementById('capax_cap').style.display="";
							document.getElementById('captcha').src='../../captcha/captcha.php?'+Math.random();
							eval(base + partir[tam] + ".value=''");
							eval(base + partir[tam] + ".focus()");
							return;
						}
					} // fin funcion
			      } // fin conexion
			    //contenedor.innerHTML ="";
		conexion.send(null) // limpia conexion
	}
	}else{
		if(valor=="")eval(base+"submit()");
	}
	//if (valor=="")
}



function setCounter(size,campo,contador,campobase,forma)
        {
   var formaval=eval("document."+forma+"."+campobase);
	   var formacount=eval("document."+forma+"."+contador);
	    MessageSize = formaval.value.length;
		 if (MessageSize > size)
		 {
			if(campo==1)
			{
			 formaval.value = formaval.value.substring(0,size);
			}
			else
			{
			 size = size - formaval.value.length;
			}
			CRestantes = 0;
		 }
		 else
		 {
			CRestantes = size - MessageSize;
		 }
		 formacount.value = CRestantes;
}


function val(forma){
		var formabase=eval("document."+forma);



		var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!re.test(formabase.dscorreocliente.value)) {
			alert ("El correo electronico no es correcto");
			formabase.dscorreocliente.focus();
		return false;
		}

		if (formabase.dsclave.value==""){
			alert("Por favor ingrese la clave");
			formabase.dsclave.focus();
			return false;
		}

		if (formabase.dsnit.value==""){
			alert("Por favor ingrese la identificacion");
			formabase.dsnit.focus();
			return false;
		}



		if (formabase.dsnombre.value==""){
			alert("Por favor ingrese el nombre");
			formabase.dsnombre.focus();
			return false;
		}


		if (formabase.dsapellido.value==""){
			alert("Por favor ingrese el apellido");
			formabase.dsapellido.focus();
			return false;
		}
/*

		if (formabase.acepto.checked==false){
			alert("Por favor acepte los terminos y condiciones");
			return false;
		}
*/


		return true;
}
function verificar(forma){
	var formabase=eval("document."+forma);

	var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	if (!re.test(formabase.dscorreocliente.value)) {
		alert ("El correo electronico no es correcto");
		formabase.dscorreocliente.focus();
		return;
	} else {
		conexion=AjaxObj();
		document.all.capa_validar.style.display = "";
		conexion.open("POST","modulos/validaciones/verificar.php?param="+formabase.dscorreocliente.value,true);
		conexion.onreadystatechange =function() {
		//			alert(conexion.readyState);
			 if (conexion.readyState==4) {
			 var _resultado = conexion.responseText;
			 if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
			contenedor=document.getElementById('capa_validar');
			contenedor.innerHTML = _resultado;
			 } else {
		  }  // fin resultado
		} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion
	}
}

function valAfiliado(forma,param,total){

	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){
     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 document.getElementById('capa_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }
    // validacion campos tipo vector


    for (var i=0;i<total;i++) {

    	if (document.getElementById('dsmb'+i).value!="") {

    		if (document.getElementById('dsapelb'+i).value!="") {

    			if (document.getElementById('dstipodocb'+i).value!="") {

	    			if (document.getElementById('dsnumdocb'+i).value!="") {

		    			if (document.getElementById('dsparentescob'+i).value=="") {

			    			 try
							{
			    			 document.getElementById('capa_dsparentescob'+i).style.display="";
							 document.getElementById('dsparentescob'+i).focus();
							 valor=1;
							 break;
							 }
							catch(err)
					  		{
					  		}
		    			}
	    			}
	    			else
	    			{
	    				try
						{
		    			 document.getElementById('capa_dsnumdocb'+i).style.display="";
						 document.getElementById('dsnumdocb'+i).focus();
						 valor=1;
						 break;
						 }
						catch(err)
			  			{
			  			}
	    			}
    			}
    			else
    			{
    				try
					{
	    			document.getElementById('capa_dstipodocb'+i).style.display="";
					document.getElementById('dstipodocb'+i).focus();
					 valor=1;
					 break;
					 }
					catch(err)
		  			{
		  			}
    			}
    		}
    		else
    		{
    			try
				{
	    		 document.getElementById('capa_dsapelb'+i).style.display="";
				 document.getElementById('dsapelb'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    	}
    	}
    	else
    	{
    		try
			{
    		 document.getElementById('capa_dsmb'+i).style.display="";
			 document.getElementById('dsmb'+i).focus();
			 valor=1;
			 break;
			}
			catch(err)
  			{
  			}
    	}
    }


	if (valor=="") eval(base+"submit()");
}

function valreferente(forma,param,total){

	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){
     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 document.getElementById('capa_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }
    // validacion campos tipo vector

    for (var i=0;i<total;i++) {

    	if (document.getElementById('dsmb'+i).value!="") {

    		if (document.getElementById('dsapelb'+i).value!="") {

    			if (document.getElementById('dstelefono'+i).value!="") {

		    			if (document.getElementById('dsemail'+i).value=="") {

			    			 try
							{
			    			 document.getElementById('capa_dsemail'+i).style.display="";
							 document.getElementById('dsemail'+i).focus();
							 valor=1;
							 break;
							 }
							catch(err)
					  		{
					  		}
		    			}
    			}
    			else
    			{
    				try
					{
	    			document.getElementById('capa_dstelefono'+i).style.display="";
					document.getElementById('dstelefono'+i).focus();
					 valor=1;
					 break;
					 }
					catch(err)
		  			{
		  			}
    			}
    		}
    		else
    		{
    			try
				{
	    		 document.getElementById('capa_dsapelb'+i).style.display="";
				 document.getElementById('dsapelb'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    	}
    	}
    	else
    	{
    		try
			{
    		 document.getElementById('capa_dsmb'+i).style.display="";
			 document.getElementById('dsmb'+i).focus();
			 valor=1;
			 break;
			}
			catch(err)
  			{
  			}
    	}
    }


	if (valor=="") eval(base+"submit()");
}
function valref(forma,total){

	var base="document."+forma+".";
	var i;
    var bError = false;
	var valor="";
    // validacion campos tipo vector

    for (var i=0;i<total;i++) {

    	if (document.getElementById('dsmb'+i).value!="") {

    		if (document.getElementById('dsapelb'+i).value!="") {

    			if (document.getElementById('dstelefono'+i).value!="") {

		    			if (document.getElementById('dsemail'+i).value=="") {

			    			 try
							{
			    			 document.getElementById('capa_dsemail'+i).style.display="";
							 document.getElementById('dsemail'+i).focus();
							 valor=1;
							 break;
							 }
							catch(err)
					  		{
					  		}
		    			}
    			}
    			else
    			{
    				try
					{
	    			document.getElementById('capa_dstelefono'+i).style.display="";
					document.getElementById('dstelefono'+i).focus();
					 valor=1;
					 break;
					 }
					catch(err)
		  			{
		  			}
    			}
    		}
    		else
    		{
    			try
				{
	    		 document.getElementById('capa_dsapelb'+i).style.display="";
				 document.getElementById('dsapelb'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    	}
    	}
    	else
    	{
    		try
			{
    		 document.getElementById('capa_dsmb'+i).style.display="";
			 document.getElementById('dsmb'+i).focus();
			 valor=1;
			 break;
			}
			catch(err)
  			{
  			}
    	}
    }


	if (valor=="") eval(base+"submit()");
}


function valprof(forma,param,total){
	var base="document."+forma+".";
	partir=param.split(",");
	n=partir.length;
	var i;
    var bError = false;
	var valor="";
    for (i = 0; i < n; i++){
     bError = bError || (eval(base + partir[i] + ".value == ''"));
	 if (bError){
		 document.getElementById('capa_'+partir[i]).style.display="";
		 eval(base + partir[i] + ".focus()");
		 valor=1;
		 break;
     } else {
	 	valor="";
	 }
    }


    for (var i=0;i<total;i++) {

	    if (document.getElementById('dsmb'+i).value!="") {

	    	if (document.getElementById('dsapelb'+i).value!="") {

	    		if (document.getElementById('dstelefonob'+i).value=="") {
	    			try
					{
		    		 document.getElementById('capa_dstelefonob'+i).style.display="";
					 document.getElementById('dstelefonob'+i).focus();
					 valor=1;
					 break;
					}
					catch(err)
		  			{
		  			}
	    		}
	    	}
	    	else{
	    		try
				{
	    		 document.getElementById('capa_dsapelb'+i).style.display="";
				 document.getElementById('dsapelb'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    	}
	    }
	    else{
		    try
				{
	    		 document.getElementById('capa_dsmb'+i).style.display="";
				 document.getElementById('dsmb'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    }
    }




       for (var i=0;i<total;i++) {

	    if (document.getElementById('dsmc'+i).value!="") {

	    	if (document.getElementById('dsapelc'+i).value!="") {

	    		if (document.getElementById('dstelefonoc'+i).value=="") {
	    			try
					{
		    		 document.getElementById('capa_dstelefonoc'+i).style.display="";
					 document.getElementById('dstelefonoc'+i).focus();
					 valor=1;
					 break;
					}
					catch(err)
		  			{
		  			}
	    		}
	    	}
	    	else{
	    		try
				{
	    		 document.getElementById('capa_dsapelc'+i).style.display="";
				 document.getElementById('dsapelc'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    	}
	    }
	    else{
		    try
				{
	    		 document.getElementById('capa_dsmc'+i).style.display="";
				 document.getElementById('dsmc'+i).focus();
				 valor=1;
				 break;
				}
				catch(err)
	  			{
	  			}
	    }
    }

	if (valor=="") eval(base+"submit()");
}

function valgeneral(e) {
	tecla = (document.all) ? e.keyCode : e.which; // 2
	//alert(tecla);
	if (tecla==32) return true; // retorno true para poder dejar  pasar el evento del espacio en blanco con este comando puedo capturar cualquier evento y permitirlo
	if (tecla==8) return true; // 3
	//*patron = /D/; //evita numeros
	patron =/[A-Za-zñÑs0-9]/; // 4 solo admite letras y ñ
	te = String.fromCharCode(tecla); // 5
	return patron.test(te); // 6
}

function carrito_modificar(forma){
	var formabase=eval("document."+forma)
	// validaciones
	formabase.action="modificar.php";
	//formabase.submit();
}
function cambiar(forma){
    document.getElementById('txt_dsciudadenvio').style.display="none";
  var formabase=eval("document."+forma);
  if (formabase.dsciudadenvio.value==""){
    document.getElementById('txt_dsciudadenvio').style.display="";
    formabase.dsciudadenvio.focus();
    return;
  } else {
    partir=formabase.dsciudadenvio.value.split("|");
    idtipoenvio=partir[1];
    var peso=formabase.xpeso.value;
    // cargar Ajax
    	document.getElementById('txt_cargando').style.display='';
 		conexion=AjaxObj();
	//alert("verificar.fletes.php?idtipoenvio="+idtipoenvio+"&peso="+formabase.xpeso.value);
		conexion.open("POST","verificar.fletes.php?idtipoenvio="+idtipoenvio+"&peso="+formabase.xpeso.value,true);
	conexion.onreadystatechange =function() {
		//			alert(conexion.readyState);
			 if (conexion.readyState==4) {
			 var _resultado = conexion.responseText;
			if (_resultado=="0") {
				formabase.xfletes.value=0;
				document.getElementById('txt_cargando').style.display='none';
  			} else {
			document.getElementById('txt_cargando').style.display='none';
			formabase.xfletes.value=(_resultado);
			var total=eval(formabase.xsubtotal.value)-eval(formabase.xdescuento.value)+eval(formabase.xiva.value)+eval(formabase.xfletes.value)+eval(formabase.xvalorseguro.value)+eval(formabase.xvalormanejo.value);
		    formabase.xtotal.value=total;
    		document.getElementById('item_total_valor').innerHTML=total;
  			}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


  }


}
function validar_pago(forma){
  var formabase=eval("document."+forma);
  var capabase=document.getElementById('dsciudadenvio');
  if (capabase){
		  if (formabase.dsciudadenvio.value==""){
		    document.getElementById('txt_dsciudadenvio').style.display="";
		    formabase.dsciudadenvio.focus();
		    return;
		  }
	}


if (formabase.dsformadepago.value==""){
    document.getElementById('txt_dsformadepago').style.display="";
    formabase.dsformadepago.focus();
    return;
  }

  formabase.submit();
}

function validar_pago_v2(forma,tipo){
  var formabase=eval("document."+forma);
  var capabase=document.getElementById('dsciudadenvio');
  if (capabase){
		  if (formabase.dsciudadenvio.value==""){
		    document.getElementById('txt_dsciudadenvio').style.display="";
		    formabase.dsciudadenvio.focus();
		    return;
		  }
	}

	if (tipo==0) {
		if (formabase.dsformadepago.value==""){
		    document.getElementById('txt_dsformadepago').style.display="";
		    formabase.dsformadepago.focus();
		    return;
		  }
	} else {
		formabase.dsformadepago.value="1|Punto de Venta|pagos.puntodeventa.php|1";

	}
	formabase.tipotransc.value=tipo;
		var dsacepto=document.getElementById('dsacepta');
	if(dsacepto){
	if (dsacepto.checked==false) {
	document.getElementById('capax_dsacepta').style.display='';
	 return;
	}
	}
formabase.submit();

}

function cambiar_formadepago(idciudad,valor1,valor2,forma){

document.getElementById("capa_formas_pago").style.display="";
document.getElementById("capa_formas_pago").innerHTML="";


	if(document.getElementById("dsciudadenvio").value==0){
	document.getElementById("capa_formas_pago").innerHTML="Seleccione una ciudad de env&iacute;o antes de seleccionar su forma de pago";
	document.getElementById("dsciudadenvio").focus();

	for(i=0; i<document.forma_carrito.dsciudadenvio.length;i++){
	document.forma_carrito.dsciudadenvio[i].checked="true";
	}
	return;
	}

    partir=document.forma_carrito.dsciudadenvio.value.split("|");
    ciudad=partir[0];


    if(ciudad==""){
    document.getElementById("capa_formas_pago").innerHTML="Seleccione una ciudad de env&iacute;o";
    return;
    }

    if(ciudad==idciudad&& valor1>0){
    document.getElementById("capa_formas_pago").innerHTML=" Consignaci&oacute;n por fuera de Medell&iacute;n tendra un costo de $"+valor2+".";
    document.getElementById("capa_formas_pago").style.display="none";
    return;
    }

    if(ciudad!=idciudad && valor2>0){
    document.getElementById("capa_formas_pago").innerHTML=" Consignaci&oacute;n por fuera de Medell&iacute;n tendra un costo de $"+valor2+".";
    return;
    }
    document.getElementById("capa_formas_pago").style.display="none";


}

function valFormulario(forma,param,tipo,capa,ruta){
	if (tipo==0)
	{
		var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		var base="document."+forma+".";
		partir=param.split(",");
		n=partir.length;
		var tam=n-1;
		var i;
		var bError = false;
		var valor="";
		var x;
		var txt="Campo requerido";
		for (i = 0; i < n; i++)
		{
			x=eval(base + partir[i] + ".value");
			x=x.replace(/^\s+/,"");
			bError = bError || (x == "");
			if (bError)
			{

				eval(base + partir[i] + ".value=''");
				document.getElementById('capax_'+partir[i]).innerHTML=txt;
				document.getElementById('capax_'+partir[i]).style.display="";
				eval(base + partir[i] + ".focus()");
				valor=1;
				break;
			}
			else
			{
				valor="";
			}

 if (partir[i]=="idpedido") {
	 	if (isNaN(document.frm_tracking.idpedido.value)) {
	 		document.getElementById('capax_'+partir[i]).style.display="";
			document.getElementById('capax_'+partir[i]).innerHTML="El n&uacute;mero de pedido deber n&uacute;merico";
			 eval(base + partir[i] + ".focus()");
			valor=1;
	 		break;
	 	}

	 }

	  if (partir[i]=="dscondiciones") {
	  	var dsc=document.getElementById("dscondiciones")
	  	if(dsc.checked!=true){
	  	document.getElementById('capax_'+partir[i]).style.display="";
		document.getElementById('capax_'+partir[i]).innerHTML="Acepte Los terminos y condiciones";
		valor=1;
		return false;
		break;
	  	}

	 }


	  if (partir[i]=="politicas") {
	  	var dsc=document.getElementById("politicas")
	  	if(dsc.checked!=true){
	  	document.getElementById('capax_'+partir[i]).style.display="";
		document.getElementById('capax_'+partir[i]).innerHTML="Acepte la pol&iacute;tica de protecci&oacute;n de datos";
		valor=1;
		return false;
		break;
	  	}

	 }

		}

		// Validacion de correo valido
		if (forma=="frm_registro" || forma=="frm_buscardor"|| forma=="frm_contacto") {
			var correobase1=document.getElementById('dscorreo');
			if (correobase1)
			{
			//alert(valor);
				if (!re.test(correobase1.value))
				{
					document.getElementById('capax_dscorreo').innerHTML="El correo no es valido";
					document.getElementById('capax_dscorreo').style.display='';
					correobase1.focus();
					return false;
				}
			}
		}

		if (forma=="frm_suscripcion") {
			var correobasess=document.getElementById('dscorreo_suscrip');
			if (correobasess)
			{
			//alert(valor);
				if (!re.test(correobasess.value))
				{
					document.getElementById('capax_dscorreo_suscrip').innerHTML="El correo no es valido";
					document.getElementById('capax_dscorreo_suscrip').style.display='';
					correobasess.focus();
					return false;
				}
			}
		}

		if (forma=="recomendar")
		{
			var correobase1=document.getElementById('dsemail');
			//var correobase2=document.getElementById('dscorreoc');
			if (correobase1)
			{
			//alert("xx");
				if (!re.test(correobase1.value))
				{
					document.getElementById('capax_dsemail').innerHTML="El correo no es valido";
					document.getElementById('capax_dsemail').style.display='';
					correobase1.focus();
					return false;
				}
			}

			var correobase2=document.getElementById('dsemail2');
			if (correobase2)
			{
				//alert("xx");
				if (!re.test(correobase2.value))
				{
				document.getElementById('capax_dsemail2').innerHTML="El correo no es valido";
				document.getElementById('capax_dsemail2').style.display='';
				correobase2.focus();
				return false;
				}
			}
		}

		if (forma=="frm_registro")
		{
		var contrasena1=document.getElementById('dscontrasena1');
		var contrasena2=document.getElementById('dscontrasena2');
		if (contrasena1.value!=contrasena2.value)
			{
				document.getElementById('capax_dscontrasena2').innerHTML="Ambas contrase&ntilde;as deben ser iguales";
				document.getElementById('capax_dscontrasena2').style.display='';
				contrasena2.value=""
				contrasena2.focus();
				return false;
			}
		}

		if (forma=="frm_actualizar_datos_zona")
		{
		var contrasena1=document.getElementById('dsclave');
		var contrasena2=document.getElementById('dsclave2');
		if (contrasena1.value!=contrasena2.value)
			{
				document.getElementById('capax_dsclave2').innerHTML="Ambas contrase&ntilde;as deben ser iguales";
				document.getElementById('capax_dsclave2').style.display='';
				contrasena2.value=""
				contrasena2.focus();
				return false;
			}
		}


		if(partir[tam]=="captcha"){

			var texto=eval(base + partir[tam] + ".value");
			if (texto!="")
			{
				// cargar cliente y colocar las variables seleccionadas
				//alert(texto);
				//alert(ruta+"captcha/captcha.validar.php?captcha="+texto);
				conexion=AjaxObj();

				conexion.open("POST",ruta+"/captcha/captcha.validar.php?captcha="+texto,true);
				conexion.onreadystatechange =function()
				{
					if (conexion.readyState==4)
					{
						var _resultado = conexion.responseText;
						//alert(_resultado);
						if (_resultado==1)
						{
							if(valor=="")eval(base+"submit()");
						}
						else
						{
							document.getElementById('capax_cap').style.display="";
							document.getElementById('captcha').src=ruta+'/captcha/captcha.php?'+Math.random();
							eval(base + partir[tam] + ".value=''");
							eval(base + partir[tam] + ".focus()");
							return;
						}
					} // fin funcion
				} // fin conexion
				//contenedor.innerHTML ="";
				conexion.send(null) // limpia conexion
			}
		} else {
			// validaciones adicionales


			if(valor=="")eval(base+"submit()");
		}

	}else if (tipo==1){

		var base=document.getElementById(capa);
		if (base) base.style.display="none";
	}
}

function redirec_combo(formax,ruta,campox) {
	var formabase=eval("document."+formax);
	var campobase=document.getElementById(campox);
	formabase.action=ruta;
	formabase.target="_top";
	formabase.submit();
}


function cambiar_transporte(forma){
	// alert("entra");
    document.getElementById('txt_dsciudadenvio').style.display="none";

  var formabase=eval("document."+forma);

  if (formabase.dsciudadenvio.value=="" ||formabase.dsciudadenvio.value==0){
    document.getElementById('item_total_valor_lg').style.display="none";
    document.getElementById('item_total_texto_lg').style.display="none";
    formabase.xtransad.value="";

    return;
  } else {

    partir=formabase.dsciudadenvio.value.split("|");
    idtipoenvio=partir[1];
    idvalor=partir[2];
    var envio=partir[2];

   document.getElementById('transporte').style.display="";
	document.getElementById('envio').innerHTML="$ "+number_format(eval(envio));
    var peso=formabase.xpeso.value;
    // cargar Ajax
    // alert("xsubtotal"+eval(formabase.xsubtotal.value));
    // alert("xdescuento"+eval(formabase.xdescuento.value));
    // alert("xiva"+eval(formabase.xiva.value));
    // alert("xfletes"+eval(formabase.xfletes.value));
	formabase.xtransad.value=(idvalor);
	var total=eval(formabase.xsubtotal.value)-eval(formabase.xdescuento.value)+eval(formabase.xiva.value)+eval(formabase.xfletes.value)+eval(formabase.xvalorseguro.value)+eval(formabase.xvalormanejo.value)+eval(formabase.xtransad.value);
    formabase.xtotal.value=total;

    if(!isNaN(total))
		{
			total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
			num = total.split('').reverse().join('').replace(/^[\,]/,'');

		}
   document.getElementById('item_total_valor_lg').style.display="";
    document.getElementById('item_total_texto_lg').style.display="";
	document.getElementById('item_total_valor_lg').innerHTML="$"+num;
   var envio=partir[2];
   document.getElementById('transporte').style.display="";
	document.getElementById('envio').innerHTML="$ "+number_format(eval(envio));
	// alert(document.getElementById('envio').innerHTML="$"+number_format(eval(idvalor)));

		//alert(formabase.xfletes.value);
  }
}


function val_adicionar(param,ruta)
{
	document.producto_detalle.action=ruta+"adicionar.php?idproducto="+param;

	var tallas = document.getElementById("sel_tallas");
	if (tallas) {
		document.getElementById("sel_tallas_txt").innerHTML="";
		if (tallas.value==""){
			document.getElementById("sel_tallas_txt").innerHTML="Campo requerido *";
			return;

		}
	}

	var colores = document.getElementById("sel_colores");
	if (colores) {
		document.getElementById("sel_colores_txt").innerHTML="";
		if (colores.value==""){
			document.getElementById("sel_colores_txt").innerHTML="Campo requerido *";
			return;

		}
	}
	document.producto_detalle.submit();
}
function apagar_capa(valor){
document.getElementById(capa).innerHTML="";
}

function validar_codigo_promo(){
var dscodigo = document.getElementById("dscodigo_promo").value;
if(dscodigo!=""){
 		conexion=AjaxObj();
		conexion.open("POST","modulos/validaciones/validar.codigo.php?dscodigo="+dscodigo,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("CODIGO INVALIDO");
  		}else{
  		location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if


  }//  fin funcion
function guardar_talla(preciox,idproducto){
var mensaje=2;
var ruta="guardar.talla.php?idproducto="+idproducto;
var idtalla 	= document.getElementById('idtalla').value;
var idcolor 	= document.getElementById('idcolor').value;



if(idtalla==""){
	alert("seleccione Talla ");
	document.getElementById('idtalla').focus();
	return;

}

ruta=ruta+"&idtalla="+idtalla;




if(idcolor==""){
	alert("seleccione Color ");
	document.getElementById('idcolor').focus();
	return;
}
ruta=ruta+"&idcolor="+idcolor;




if(preciox>=1){
var dsprecio1 	= document.getElementById('dsprecio_1').value;
if(dsprecio1==""){
alert("Ingrese Valor 1");
document.getElementById('dsprecio_1').focus();
return;
}
ruta=ruta+"&dsprecio_1="+dsprecio1;
}



if(preciox>=2){
var dsprecio2 	= document.getElementById('dsprecio_2').value;
if(dsprecio2==""){
alert("Ingrese Valor 2");
document.getElementById('dsprecio_2').focus();
return;
}
ruta=ruta+"&dsprecio_2="+dsprecio2;
}



if(preciox>=3){
var dsprecio3 	= document.getElementById('dsprecio_3').value;
if(dsprecio3==""){
alert("Ingrese Valor 3");
document.getElementById('dsprecio_3').focus();
return;
}
ruta=ruta+"&dsprecio_3="+dsprecio3;
}



if(preciox>=4){
var dsprecio4 	= document.getElementById('dsprecio_4').value;
if(dsprecio4==""){
alert("Ingrese Valor 4");
document.getElementById('dsprecio_4').focus();
return;
}
ruta=ruta+"&dsprecio_4="+dsprecio4;
}




if(preciox>=5){
var dsprecio5 	= document.getElementById('dsprecio_5').value;
if(dsprecio5==""){
alert("Ingrese Valor 5");
document.getElementById('dsprecio_5').focus();
return;
}
ruta=ruta+"&dsprecio_5="+dsprecio5;
}


var dsunidades = document.getElementById('dsuni_talla').value;
ruta=ruta+"&dsunidad="+dsunidades;


if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar");
		return;
  		}else{
  		mostar_tallas(idproducto,mensaje);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion


function cargar_tallas(idproducto){
        conexion1=AjaxObj()
        contenedor1="idtalla";
        conexion1.open("POST","modulos/validaciones/cargar.tallas.php?idproducto="+idproducto,true);
        conexion1.onreadystatechange =function() {
	        if (conexion1.readyState==4) {
	        	var _resultado = conexion1.responseText;
	        	if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
				        if (contenedor1){
				        contenedor1=document.getElementById(contenedor1);
				        contenedor1.innerHTML = _resultado;
			        	}
	       		}
	        } // fin conexion1
      	} // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}// fin funcion cargar_tallas


function valor_color(capa){
var x = document.producto_detalle.idcolor.value;

if(x!=""){
partir=x.split("|");
idcolor=partir[0];
valorm=partir[1];
valor=partir[2];
dsdescuento=partir[4];//  valor sin formato
dsdescuentof=partir[3];//  valrr con formato
document.getElementById("precio").value=valor;
document.getElementById("color").value=idcolor;
document.getElementById("preciox_m").innerHTML="$ "+valorm
if(dsdescuento>1){
var capa_descuento=document.getElementById("dsdescuento");
if(capa_descuento)capa_descuento.innerHTML="Ahorras <span>$ "+dsdescuentof+"</span>"
}
}else{


}

}

function valor_talla(idproducto,op){
var valor1=0;
var id;
var x = document.getElementById("idtalla").value;
if(x!=""){
var partir;
partir = x.split("|");
id=partir[0];
valor1=partir[1];
dsdescuento=partir[3];
document.getElementById("talla").value=id;
document.getElementById("preciox_m").innerHTML="$ "+valor1
if(dsdescuento>1){
var capa_descuento=document.getElementById("dsdescuento");
if(capa_descuento)capa_descuento.innerHTML="Ahorras <span>$ "+partir[4]+"</span>"
}
colores(id,idproducto);
}

}
function valor_talla_dis(idproducto,pos){
	//var xx=document.forma_carrito.elements['idtalla[]'].length;
	//alert(xx)
	for (i=0;i<document.forma_carrito.elements['idtalla[]'].length;i++){
		if (i==pos) {
		var x=document.forma_carrito.elements['idtalla[]'][i].value;
		var partir=x.split("|");
		x0=partir[0];
		x1=partir[1];
		x2=partir[2];
		x3=partir[3];
		//alert(x0+x1+x2+x3+"--"+pos)
		document.getElementsByName('xidtalla[]')[i].value=x0;// idtalla
		colores_dis(x0,idproducto,pos);
		break;
		}
	}

}


function colores_dis(id,idproducto,pos){
        conexion1=AjaxObj()

        conexion1.open("POST","modulos/validaciones/cargar.colores.tallas.distribuidor.php?idproducto="+idproducto+"&idtalla="+id+"&ip="+pos,true);
        conexion1.onreadystatechange =function() {
        if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
		for (i=0;i<document.forma_carrito.elements['idtalla[]'].length;i++){
		if (i==pos) {
		document.getElementsByName('idcolor[]')[i].innerHTML=_resultado;
		break;
		}
		}
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}


function valor_color_dis(pos){
		for (i=0;i<document.forma_carrito.elements['idtalla[]'].length;i++){
		if (i==pos) {
		var x=document.forma_carrito.elements['color[]'][i].value;
		partir=x.split("|");
		document.getElementsByName('xidcolor[]')[i].value=partir[0];// idcolor
		document.getElementsByName('valorunitario[]')[i].value=partir[2];//  valor  unitario del color
		document.getElementsByName('precio[]')[i].innerHTML=partir[1];//  precio unitario para
		break;
		}
		}

}






function colores(id,idproducto){
        conexion1=AjaxObj()
    	contenedor2="capa_mensaje";
        contenedor1="idcolor";

        conexion1.open("POST","modulos/validaciones/cargar.colores.tallas.php?idproducto="+idproducto+"&idtalla="+id,true);
        conexion1.onreadystatechange =function() {
        if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        contenedor2=document.getElementById(contenedor2);
        if(contenedor2)contenedor2.style.display ="";
        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}



function auto_adicionar(pos,codigoc,idproducto){


calcularsubtotal(pos)

}






function adicionar_tallas_colores(ruta){

var base=document.getElementById('mensaje');
var precio=document.getElementById('precio').value;
var talla=document.getElementById('idtalla').value;
if(talla==""){
if (base) base.style.display="";
document.getElementById("mensaje").innerHTML="<h4>Seleccione un talla</h4>";
return;
}else{
talla=document.getElementById('talla').value;
}


if(document.producto_detalle.idcolor.value==""){
if (base) base.style.display="";
document.getElementById("mensaje").innerHTML="<h4>Seleccione un color</h4>";
return;
}else{
partir=document.producto_detalle.idcolor.value.split("|");
idcolor=partir[0];
}
location.href=ruta+"&sel_colores="+idcolor+"&sel_tallas="+talla+"&talla_valor="+precio;

}










function mostar_tallas(idproducto,mensaje){
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="tallas";
    conexion1.open("POST","tallas.cargadas.php?idproducto="+idproducto+"&mensaje="+mensaje,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}

function eliminar_talla(idtalla,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idtalla!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.talla.php?idtalla="+idtalla,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        mostar_tallas(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}
function modificar_talla(idtalla,idproducto,pos,preciox){
	////alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	ruta="modificar.talla.php?idtalla="+idtalla
	var unidades= document.p.elements['dsunidad[]'].length
	if(unidades>0){


	for (i=0;i<document.p.elements['dsunidad[]'].length;i++){
		if (i==pos) {
		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'][i].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'][i].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'][i].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'][i].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'][i].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'][i].value;
		ruta=ruta+"&dsunidad="+dsunidad
		break;
		}

		}

		}else{

		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'].value;
		ruta=ruta+"&dsunidad="+dsunidad


	}
	if(idtalla!="" && ruta!="" ){
    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        mostar_tallas(idproducto,mensaje);
        }else{

        alert("Problema Al Modificar"+_resultado);

        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}
       function validar_reservar(){

	 var fechallegada=document.reservarcabl.dsfechallegadal.value;
	 var fechasalida=document.reservarcabl.dsfechasalidal.value;

	   if(document.reservarcabl.dsfechallegadal.value==""){
	    document.getElementById("fechallegadal").style.display="";
	    return;
	   }
	   if(document.reservarcabl.dsfechasalidal.value==""){
	    document.getElementById("fechasalidal").style.display="";
	    return;
	   }
	   if(document.reservarcabl.dsadultosl.value==""){
	    document.getElementById("adultosl").style.display="";
	    return;
	   }
	   if(document.reservarcabl.dsfechallegadal.value=="Fecha de arribo"){
	    document.getElementById("fechallegadal").style.display="";
	    return;
	   }
	    if(document.reservarcabl.dsfechasalidal.value=="Fecha de salida"){
	    document.getElementById("fechasalidal").style.display="";
	    return;
	   }

	  var totala=document.reservarcabl.dsadultosl.value;
	  var totaln=document.reservarcabl.dsniniosl.value;
	  var total=totala+totaln;


	  if(total<=5 || document.reservarcabl.dsadultosl.value<5){
	  document.reservarcabl.submit();
	  }else{
	  //location.href="index_conference.php";
	   document.reservarcabl.submit();
	  }

	 }

	  function displaycab(param){
	   document.getElementById(param).style.display="none";
	 }
	 function cambiarfecha(){
	  document.getElementById('fechas').style.display="";
	  document.getElementById('fechas2').style.display="none";
	 }

	 function cambio(){
	   if(document.cambiofechas.dsfechallegada.value=="" || document.cambiofechas.dsfechallegada.value=="Llegada"){
	    document.getElementById("fechallegada").style.display="";
	    return false;
	   }
	   if(document.cambiofechas.dsfechasalida.value=="" || document.cambiofechas.dsfechasalida.value=="Salida"){
	    document.getElementById("fechasalida").style.display="";
	    return false;
	   }
	    if(document.cambiofechas.dsadultos.value==0){
	    document.getElementById("adultos").style.display="";
	    return false;
	   }

	 }
	 function display(param){
	   document.getElementById(param).style.display="none";
	 }

	 function efectuar(forma){
	   var base="document."+forma+".";
	   eval(base+"submit()");
	   //document.param.submit();
	 }
	 function buscar_tiendas(op){

var pais= document.getElementById('idpais').value;
var dep= document.getElementById('iddepartamento').value;
var idciudad= document.getElementById('idciudad').value;



//========================bloque cargar departamentos=============================//
	if(op==1 && pais!=""){
		conexion1=AjaxObj()
		contenedor1="iddepartamento";
		conexion1.open("POST","modulos/validaciones/cargar.departamentos.php?idpais="+pais,true);
		conexion1.onreadystatechange =function() {
				if (conexion1.readyState==4) {
						var _resultado = conexion1.responseText;
						if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
								if (contenedor1){
									contenedor1=document.getElementById(contenedor1);
									contenedor1.innerHTML = _resultado;





conexion2=AjaxObj()
contenedor2="tiendas_busqueda";
conexion2.open("POST","modulos/validaciones/ubicacion.php?idpais="+pais,true);
conexion2.onreadystatechange =function() {
if (conexion2.readyState==4) {
var _resultado2 = conexion2.responseText;
if (_resultado2 !="0" && _resultado2 !=-1 && _resultado2 !="") {
if (contenedor2){
contenedor2=document.getElementById(contenedor2);
contenedor2.innerHTML = _resultado2;
}
}
} // fin conexion2
} // fin funcion conexion2 interna
conexion2.send(null) // limpia conexion









								}
						}
						document.getElementById('iddepartamento').disabled=false;
						document.getElementById('idciudad').disabled=true;
						document.getElementById('idciudad').value="";

				} // fin conexion1
		} // fin funcion conexion1 interna
		conexion1.send(null) // limpia conexion
	}
		if(op==1 && pais==""){
		document.getElementById('iddepartamento').disabled=true;
		document.getElementById('iddepartamento').value="";
		document.getElementById('idciudad').disabled=true;
		document.getElementById('idciudad').value="";
		}

//========================fin cargar departamentos=============================//

//========================inicio cargar ciudades =============================//
	if(op==2 && pais!="" && dep!=""){
		conexion1=AjaxObj()
		contenedor1="idciudad";
		conexion1.open("POST","modulos/validaciones/cargar.ciudades.php?iddepartamento="+dep,true);
		conexion1.onreadystatechange =function() {
				if (conexion1.readyState==4) {
						var _resultado = conexion1.responseText;
						if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
								if (contenedor1){
									contenedor1=document.getElementById(contenedor1);
									contenedor1.innerHTML = _resultado;




conexion2=AjaxObj()
contenedor2="tiendas_busqueda";
conexion2.open("POST","modulos/validaciones/ubicacion.php?idpais="+pais+"&iddepartamento="+dep,true);
conexion2.onreadystatechange =function() {
if (conexion2.readyState==4) {
var _resultado2 = conexion2.responseText;
if (_resultado2 !="0" && _resultado2 !=-1 && _resultado2 !="") {
if (contenedor2){
contenedor2=document.getElementById(contenedor2);
contenedor2.innerHTML = _resultado2;
}
}
} // fin conexion2
} // fin funcion conexion2 interna
conexion2.send(null) // limpia conexion

	document.getElementById('idciudad').disabled=false;












								}
						}
				} // fin conexion1
		} // fin funcion conexion1 interna
		conexion1.send(null) // limpia conexion
	}
	if(op==2 && dep==""){
	document.getElementById('idciudad').disabled=true;
	document.getElementById('idciudad').value="";
	}

//========================fin cargar ciudades =============================//

if(op==3 && pais!="" && dep!="" && idciudad!=""){
conexion1=AjaxObj()
contenedor1="tiendas_busqueda";
conexion1.open("POST","modulos/validaciones/ubicacion.php?idpais="+pais+"&iddepartamento="+dep+"&idciudad="+idciudad,true);
conexion1.onreadystatechange =function() {
if (conexion1.readyState==4) {
var _resultado = conexion1.responseText;
if (_resultado !="0" && _resultado !=-1 && _resultado !="") {
if (contenedor1){
contenedor1=document.getElementById(contenedor1);
contenedor1.innerHTML = _resultado;
}
}
} // fin conexion1
} // fin funcion conexion1 interna
conexion1.send(null) // limpia conexion
}



if(op==4){
conexion1=AjaxObj()
contenedor1="tiendas_busqueda";
conexion1.open("POST","modulos/validaciones/ubicacion.php?idpais=1&iddepartamento=1&idciudad=1",true);
conexion1.onreadystatechange =function() {
if (conexion1.readyState==4) {
var _resultado = conexion1.responseText;
if (_resultado !="0" && _resultado !=-1 && _resultado !="") {
if (contenedor1){
contenedor1=document.getElementById(contenedor1);
contenedor1.innerHTML = _resultado;
}
}
} // fin conexion1
} // fin funcion conexion1 interna
conexion1.send(null) // limpia conexion
}





}
// FUNCIONES TIPO DE LISTADO PRODUCTOS ECOMMERCE

    function CambiarEstilo() {
        if ($('#li-producto').hasClass('list3')){
          $('#li-producto').addClass('list3');
          $('#li-producto').removeClass('list4');
        }else {
          $('#li-producto').removeClass('list4');
          $('#li-producto').addClass('list3');
        }
    }

    function CambiarEstilo2() {
        if ($('#li-producto').hasClass('list4')){
          $('#li-producto').addClass('list4');
          $('#li-producto').removeClass('list3');
        }else {
          $('#li-producto').removeClass('list3');
          $('#li-producto ').addClass('list4');
        }
    }
// FIN  FUNCIONES TIPO DE LISTADO PRODUCTOS ECOMMERCE
     function encuestavotar(){
        var idencuesta=document.encuesta.idencuesta.value;
        //var idrespuesta=document.encuesta.idrespuesta.value;
        var idrespuesta;
        var cantidad=document.encuesta.elements['idrespuesta'].length;
        for(var i=0;i<cantidad;i++){
            if(document.encuesta.elements['idrespuesta'][i].checked){
                idrespuesta=document.encuesta.elements['idrespuesta'][i].value;
                //votar=1;
                break;
            }
        }
        //alert(idrespuesta);
        conexion=AjaxObj();
        var ruta="<? echo $rut?>modulos/validaciones/encuesta.php?idencuesta="+idencuesta+"&idrespuesta="+idrespuesta;
        //alert(ruta);
         conexion.open("POST",ruta);
         conexion.onreadystatechange =function() {
         if (conexion.readyState==4) {
         var resultado = conexion.responseText;
            if (resultado!="") {
                if(resultado==1)document.getElementById('mensaje').innerHTML="Su voto ha sido registrado";
                if(resultado==0)document.getElementById('mensaje').innerHTML="Su voto ya fue registrado";
            }
        } // fin funcion
    } // fin conexion
    //contenedor.innerHTML ="";
    conexion.send(null) // limpia conexion
    //document.calificar.calificacion.value=num;
    //document.calificar.submit();
}
//===============================================================================================================//
function CargarTamanoColor(idproducto,mensaje){
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="tamanos";
    conexion1.open("POST","tamanios.cargadas.php?idproducto="+idproducto+"&mensaje="+mensaje,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}

function CargarTamanoColor1(idproducto,mensaje){
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="tamanos";
    conexion1.open("POST","tamanios.cargadas1.php?idproducto="+idproducto+"&mensaje="+mensaje,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}
function EliminarTamano(idtalla,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idtalla!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.tamano.php?idtalla="+idtalla,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoColor(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}
function EliminarTamano1(idtalla,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idtalla!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.tamano1.php?idtalla="+idtalla,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoColor(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}
function ModificarTamano(idtalla,idproducto,pos,preciox){
	//alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	ruta="modificarTamano.php?idtalla="+idtalla;
	var unidades= document.pp.elements['dsunidad[]'].length;
	if(unidades>0){


	for (i=0;i<document.pp.elements['dsunidad[]'].length;i++){
		if (i==pos) {
		if(preciox>=1){
		var precio1=document.pp.elements['xprecio_1[]'][i].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.pp.elements['xprecio_2[]'][i].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.pp.elements['xprecio_3[]'][i].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.pp.elements['xprecio_4[]'][i].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.pp.elements['xprecio_5[]'][i].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.pp.elements['dsunidad[]'][i].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.pp.elements['dsref[]'][i].value;
		ruta=ruta+"&dsref="+dsref
		break;
		}

		}

		}else{

		if(preciox>=1){
		var precio1=document.pp.elements['xprecio_1[]'].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.pp.elements['xprecio_2[]'].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.pp.elements['xprecio_3[]'].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.pp.elements['xprecio_4[]'].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.pp.elements['xprecio_5[]'].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.pp.elements['dsunidad[]'].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.pp.elements['dsref[]'].value;
		ruta=ruta+"&dsref="+dsref


	}
	if(idtalla!="" && ruta!="" ){
    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoColor(idproducto,mensaje);
        }else{

        alert("Problema Al Modificar"+_resultado);

        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}
function ModificarTamano1(idtalla,idproducto,pos,preciox){
	//alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	ruta="modificarTamano1.php?idtalla="+idtalla;
	var unidades= document.pp.elements['dsunidad[]'].length;
	if(unidades>0){


	for (i=0;i<document.pp.elements['dsunidad[]'].length;i++){
		if (i==pos) {
		if(preciox>=1){
		var precio1=document.pp.elements['xprecio_1[]'][i].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.pp.elements['xprecio_2[]'][i].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.pp.elements['xprecio_3[]'][i].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.pp.elements['xprecio_4[]'][i].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.pp.elements['xprecio_5[]'][i].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.pp.elements['dsunidad[]'][i].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.pp.elements['dsref[]'][i].value;
		ruta=ruta+"&dsref="+dsref
		break;
		}

		}

		}else{

		if(preciox>=1){
		var precio1=document.pp.elements['xprecio_1[]'].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.pp.elements['xprecio_2[]'].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.pp.elements['xprecio_3[]'].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.pp.elements['xprecio_4[]'].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.pp.elements['xprecio_5[]'].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.pp.elements['dsunidad[]'].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.pp.elements['dsref[]'].value;
		ruta=ruta+"&dsref="+dsref


	}
	if(idtalla!="" && ruta!="" ){
    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoColor1(idproducto,mensaje);
        }else{

        alert("Problema Al Modificar"+_resultado);

        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}
function GuardarTamanio(preciox,idproducto){
var mensaje=2;
var ruta="GuardarTamanio.php?idproducto="+idproducto;
var idtalla 	= document.getElementById('idtalla').value;
var idcolor 	= document.getElementById('idcolorx').value;
// alert(document.getElementById('idcolorx').value);
// var refere_asoci 	= document.getElementById('refere_asoci').value;



if(idtalla==""){
	alert("seleccione Talla ");
	document.getElementById('idtalla').focus();
	return;

}

ruta=ruta+"&idtalla="+idtalla;




if(idcolor==""){
	alert("seleccione Color ");
	document.getElementById('idcolorx').focus();
	return;
}
ruta=ruta+"&idcolor="+idcolor;
// ruta=ruta+"&refere_asoci="+refere_asoci;




if(preciox>=1){
var dsprecio1 	= document.getElementById('dsprecio_1').value;
if(dsprecio1==""){
alert("Ingrese Valor 1");
document.getElementById('dsprecio_1').focus();
return;
}
ruta=ruta+"&dsprecio_1="+dsprecio1;
}



if(preciox>=2){
var dsprecio2 	= document.getElementById('dsprecio_2').value;
if(dsprecio2==""){
alert("Ingrese Valor 2");
document.getElementById('dsprecio_2').focus();
return;
}
ruta=ruta+"&dsprecio_2="+dsprecio2;
}



if(preciox>=3){
var dsprecio3 	= document.getElementById('dsprecio_3').value;
if(dsprecio3==""){
alert("Ingrese Valor 3");
document.getElementById('dsprecio_3').focus();
return;
}
ruta=ruta+"&dsprecio_3="+dsprecio3;
}



if(preciox>=4){
var dsprecio4 	= document.getElementById('dsprecio_4').value;
if(dsprecio4==""){
alert("Ingrese Valor 4");
document.getElementById('dsprecio_4').focus();
return;
}
ruta=ruta+"&dsprecio_4="+dsprecio4;
}




if(preciox>=5){
var dsprecio5 	= document.getElementById('dsprecio_5').value;
if(dsprecio5==""){
alert("Ingrese Valor 5");
document.getElementById('dsprecio_5').focus();
return;
}
ruta=ruta+"&dsprecio_5="+dsprecio5;
}


var dsunidades = document.getElementById('dsuni_talla').value;
ruta=ruta+"&dsunidad="+dsunidades;


if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar");
		return;
  		}else{
  		CargarTamanoColor(idproducto,mensaje);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion

function GuardarTamanio1(preciox,idproducto){
var mensaje=2;
var ruta="GuardarTamanio1.php?idproducto="+idproducto;
var idtalla 	= document.getElementById('idtalla').value;
var idcolor 	= document.getElementById('idcolorx').value;
// alert(document.getElementById('idcolorx').value);
// var refere_asoci 	= document.getElementById('refere_asoci').value;



if(idtalla==""){
	alert("seleccione Talla ");
	document.getElementById('idtalla').focus();
	return;

}

ruta=ruta+"&idtalla="+idtalla;




if(idcolor==""){
	alert("seleccione Color ");
	document.getElementById('idcolorx').focus();
	return;
}
ruta=ruta+"&idcolor="+idcolor;
// ruta=ruta+"&refere_asoci="+refere_asoci;




if(preciox>=1){
var dsprecio1 	= document.getElementById('dsprecio_1').value;
if(dsprecio1==""){
alert("Ingrese Valor 1");
document.getElementById('dsprecio_1').focus();
return;
}
ruta=ruta+"&dsprecio_1="+dsprecio1;
}



if(preciox>=2){
var dsprecio2 	= document.getElementById('dsprecio_2').value;
if(dsprecio2==""){
alert("Ingrese Valor 2");
document.getElementById('dsprecio_2').focus();
return;
}
ruta=ruta+"&dsprecio_2="+dsprecio2;
}



if(preciox>=3){
var dsprecio3 	= document.getElementById('dsprecio_3').value;
if(dsprecio3==""){
alert("Ingrese Valor 3");
document.getElementById('dsprecio_3').focus();
return;
}
ruta=ruta+"&dsprecio_3="+dsprecio3;
}



if(preciox>=4){
var dsprecio4 	= document.getElementById('dsprecio_4').value;
if(dsprecio4==""){
alert("Ingrese Valor 4");
document.getElementById('dsprecio_4').focus();
return;
}
ruta=ruta+"&dsprecio_4="+dsprecio4;
}




if(preciox>=5){
var dsprecio5 	= document.getElementById('dsprecio_5').value;
if(dsprecio5==""){
alert("Ingrese Valor 5");
document.getElementById('dsprecio_5').focus();
return;
}
ruta=ruta+"&dsprecio_5="+dsprecio5;
}


var dsunidades = document.getElementById('dsuni_talla').value;
ruta=ruta+"&dsunidad="+dsunidades;


if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar");
		return;
  		}else{
  		CargarTamanoColor(idproducto,mensaje);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion

function CargarTamano(idproducto,idcolor,ruta){
        conexion1=AjaxObj()
        contenedor1="idtalla";
        conexion1.open("POST",ruta+"modulos/validaciones/CargarTamano.php?idproducto="+idproducto+"&idcolor="+idcolor,true);
        conexion1.onreadystatechange =function() {
	        if (conexion1.readyState==4) {
	        	var _resultado = conexion1.responseText;
	        	if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
				        contenedor1=document.getElementById(contenedor1);
				        if (contenedor1){
				        contenedor1.innerHTML = _resultado;
			        	}
	       		}
	        } // fin conexion1
      	} // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}// fin funcion cargar_tallas


function CargarTamano1(idproducto,idcolor,ruta){
        conexion1=AjaxObj()
        contenedor1="idtalla";
        conexion1.open("POST",ruta+"modulos/validaciones/CargarTamano1.php?idproducto="+idproducto+"&idcolor="+idcolor,true);
        conexion1.onreadystatechange =function() {
	        if (conexion1.readyState==4) {
	        	var _resultado = conexion1.responseText;
	        	if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
				        if (contenedor1){
				        contenedor1=document.getElementById(contenedor1);
				        contenedor1.innerHTML = _resultado;
			        	}
	       		}
	        } // fin conexion1
      	} // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}// fin funcion cargar_tallas
function ValorTamano(idproducto,op){
var valor1=0;
var id;
// var x = document.getElementById("idtalla").value;
var porNombre=document.getElementsByName("idtalla");
for(var i=0;i<porNombre.length;i++)
{
if(porNombre[i].checked)
x=porNombre[i].value;
}
if(x!=""){
var partir;
partir = x.split("|");
id=partir[0];
valor1=partir[1];
dsdescuento=partir[3];
document.getElementById("talla").value=id;
document.getElementById("preciox_m").innerHTML="$ "+valor1
if(dsdescuento>1){
var capa_descuento=document.getElementById("dsdescuento");
if(capa_descuento)capa_descuento.innerHTML="Ahorras <span>$ "+partir[4]+"</span>"
}
// ColoresTamano(id,idproducto);
// alert(id);
}

}
function ColoresTamano(idproducto,ruta){
	var id;
        conexion1=AjaxObj()
    	contenedor2="capa_mensaje";
        contenedor1="idcolor";

        conexion1.open("POST",ruta+"modulos/validaciones/CargarColoresTamano.php?idproducto="+idproducto+"&idtalla="+id,true);
        conexion1.onreadystatechange =function() {
        if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        contenedor2=document.getElementById(contenedor2);
        if(contenedor2)contenedor2.style.display ="";
        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}

function ColoresTamano1(idproducto,ruta){
	var id;
        conexion1=AjaxObj()
    	contenedor2="capa_mensaje";
        contenedor1="idcolor";

        conexion1.open("POST",ruta+"modulos/validaciones/CargarColoresTamano1.php?idproducto="+idproducto+"&idtalla="+id,true);
        conexion1.onreadystatechange =function() {
        if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        contenedor2=document.getElementById(contenedor2);
        if(contenedor2)contenedor2.style.display ="";
        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
}

function ActivarColor(campo) {
    var div = document.getElementById("img-color");
    var nodelist = div.getElementsByClassName("color_activo");
	var i;
	for (i = 0; i < nodelist.length; i++) {
	nodelist[i].removeAttribute('class');
	}

	document.getElementById(campo).setAttribute('class', 'color_activo');
}
function ActivarTamano(campo) {
    var div = document.getElementById("text_tamanos");
    var nodelist = div.getElementsByClassName("tamanos_activo");
	var i;
	for (i = 0; i < nodelist.length; i++) {
	nodelist[i].removeAttribute('class');
	}

	document.getElementById(campo).setAttribute('class', 'tamanos_activo');
}
//===============================================================================================================//
function CargarColor(idproducto,mensaje){
	// alert(idproducto+"<--->"+mensaje)
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="colores";
    conexion1.open("POST","colores.cargados.php?idproducto="+idproducto+"&mensaje="+mensaje,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}

function EliminarColor(idtalla,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idtalla!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.Color.php?idtalla="+idtalla,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarColor(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}
function ModificarColor(idtalla,idproducto,pos,preciox){
	//alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	ruta="modificarColor.php?idtalla="+idtalla

	var unidades= document.p.elements['dsunidad[]'].length
	if(unidades>0){


	for (i=0;i<document.p.elements['dsunidad[]'].length;i++){
		if (i==pos) {
		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'][i].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'][i].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'][i].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'][i].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'][i].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'][i].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.p.elements['dsref[]'][i].value;
		ruta=ruta+"&dsref="+dsref
		break;
		}

		}

		}else{

		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.p.elements['dsref[]'].value;
		ruta=ruta+"&dsref="+dsref


	}
	if(idtalla!="" && ruta!="" ){
		// alert(ruta)

    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarColor(idproducto,mensaje);
        }else{

        alert("Problema Al Modificar"+_resultado);
        alert(ruta);
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}

function ModificarCiudad(idciudad,idproducto,pos,preciox){
	//alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	var cant=document.getElementsByName("descripcion_f[]").length;
	// alert(cant);
	ruta="modificarciudad.php?idciudad="+idciudad+"&idproducto="+idproducto;
	for (i=0;i<cant;i++){
		if (i==pos) {
		var descripcion=document.getElementsByName('descripcion_f[]')[i].value;
		alert(descripcion);
		break;
		}
	}
	ruta=ruta+"&descripcion="+descripcion;
        alert(ruta);
	if(idciudad!="" && ruta!="" ){
		// alert(ruta)

    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        cargar_ciudades(idproducto,mensaje);
        
        }else{
        alert("Problema Al Modificar"+_resultado);
        alert(ruta);
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}

function EliminarCiudad(idciudad,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idciudad!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.ciudad.php?idciudad="+idciudad+"&idproducto="+idproducto,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        cargar_ciudades(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}

function GuardarColor(preciox,idproducto){
var mensaje=2;
var ruta="GuardarColor.php?idproducto="+idproducto;
var idcolor 	= document.getElementById('idcolor').value;
if(idcolor==""){
	alert("seleccione Color ");
	document.getElementById('idcolor').focus();
	return;
}
ruta=ruta+"&idcolor="+idcolor;

if(preciox>=1){
var dsprecio1 	= document.getElementById('dsprecio_1').value;
if(dsprecio1==""){
alert("Ingrese Valor 1");
document.getElementById('dsprecio_1').focus();
return;
}
ruta=ruta+"&dsprecio_1="+dsprecio1;
}
if(preciox>=2){
var dsprecio2 	= document.getElementById('dsprecio_2').value;
if(dsprecio2==""){
alert("Ingrese Valor 2");
document.getElementById('dsprecio_2').focus();
return;
}
ruta=ruta+"&dsprecio_2="+dsprecio2;
}
if(preciox>=3){
var dsprecio3 	= document.getElementById('dsprecio_3').value;
if(dsprecio3==""){
alert("Ingrese Valor 3");
document.getElementById('dsprecio_3').focus();
return;
}
ruta=ruta+"&dsprecio_3="+dsprecio3;
}
if(preciox>=4){
var dsprecio4 	= document.getElementById('dsprecio_4').value;
if(dsprecio4==""){
alert("Ingrese Valor 4");
document.getElementById('dsprecio_4').focus();
return;
}
ruta=ruta+"&dsprecio_4="+dsprecio4;
}
if(preciox>=5){
var dsprecio5 	= document.getElementById('dsprecio_5').value;
if(dsprecio5==""){
alert("Ingrese Valor 5");
document.getElementById('dsprecio_5').focus();
return;
}
ruta=ruta+"&dsprecio_5="+dsprecio5;
}
var dsunidades = document.getElementById('dsuni_talla').value;
ruta=ruta+"&dsunidad="+dsunidades;
// alert(ruta);
if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar");
		return;
  		}else{
  		CargarColor(idproducto,mensaje);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion

 	function cargar_ciudades(idproducto){
	// alert(idproducto+"<--->"+mensaje)
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="ciudades";
    conexion1.open("POST","ciudades.cargadas.php?idproducto="+idproducto,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}

function GuardarCiudad(ciudad,idproducto){
var mensaje=2;
var ruta="Guardarciudad.php?idproducto="+idproducto;
var idciudad = document.getElementById('idciudad').value;
var fecha = document.getElementById('fecha_f1').value;
var cantidad = document.getElementById('cantidad_f1').value;
if(idciudad==""){
	alert("seleccione ciudad ");
	document.getElementById('idciudad').focus();
	return;
}
ruta=ruta+"&idciudad="+idciudad;
var descripcion = document.getElementById('descripcion_f1').value;
if(descripcion==""){
alert("Ingrese descripcion");
document.getElementById('descripcion_f1').focus();
return;
}
ruta=ruta+"&descripcion="+descripcion+"&fecha="+fecha+"&cantidad="+cantidad;
// alert(ruta);
if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar"+ _resultado);
		return;
  		}else{
  			console.log(_resultado);
  		cargar_ciudades(idproducto);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion
//=======================================================================
function CargarTamanoSimple(idproducto,mensaje){
if(idproducto!=""){
    conexion1=AjaxObj()
    contenedor1="tamanossimple";
    conexion1.open("POST","https://bikehouse.com.co/tienda/modulos/ecommerce/listaproductos/TamanosCargados.php?idproducto="+idproducto+"&mensaje="+mensaje,true);

    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        	// alert("entra");
        if (contenedor1){
        contenedor1=document.getElementById(contenedor1);
        contenedor1.innerHTML = _resultado;

        }
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion

}//( fin if )

}

function EliminarTamanoSimple(idtalla,idproducto){
var m1="Esta seguro de eliminar este item";
var mensaje=1;
if (confirm(m1)== true ){
	if(idtalla!=""){
    conexion1=AjaxObj()
    conexion1.open("POST","eliminar.TamanoSimple.php?idtalla="+idtalla,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoSimple(idproducto,mensaje);
        }else{
        alert("problema al eliminar");
        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )



	} //  fin (confirm)
}
function ModificarTamanoSimple(idtalla,idproducto,pos,preciox){
	//alert(idtalla+"--"+idproducto+"--"+pos+"--"+preciox)
	var mensaje=3;
	ruta="modificarTamanoSimple.php?idtalla="+idtalla
	var unidades= document.p.elements['dsunidad[]'].length
	if(unidades>0){


	for (i=0;i<document.p.elements['dsunidad[]'].length;i++){
		if (i==pos) {
		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'][i].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'][i].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'][i].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'][i].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'][i].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'][i].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.p.elements['dsref[]'][i].value;
		ruta=ruta+"&dsref="+dsref
		break;
		}

		}

		}else{

		if(preciox>=1){
		var precio1=document.p.elements['xprecio_1[]'].value;
		ruta=ruta+"&dsprecio_1="+precio1
		}
		if(preciox>=2){
		var precio2=document.p.elements['xprecio_2[]'].value;
		ruta=ruta+"&dsprecio_2="+precio2
		}
		if(preciox>=3){
		var precio3=document.p.elements['xprecio_3[]'].value;
		ruta=ruta+"&dsprecio_3="+precio3
		}
		if(preciox>=4){
		var precio4=document.p.elements['xprecio_4[]'].value;
		ruta=ruta+"&dsprecio_4="+precio4
		}
		if(preciox>=5){
		var precio5=document.p.elements['xprecio_5[]'].value;
		ruta=ruta+"&dsprecio_5="+precio5
		}
		var dsunidad=document.p.elements['dsunidad[]'].value;
		ruta=ruta+"&dsunidad="+dsunidad

		var dsref=document.p.elements['dsref[]'].value;
		ruta=ruta+"&dsref="+dsref


	}
	if(idtalla!="" && ruta!="" ){
		alert(ruta)
    conexion1=AjaxObj()
    conexion1.open("POST",ruta,true);
    conexion1.onreadystatechange =function() {
    if (conexion1.readyState==4) {
        var _resultado = conexion1.responseText;
        if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
        CargarTamanoSimple(idproducto,mensaje);
        }else{

        alert("Problema Al Modificar"+_resultado);

        }
        } // fin conexion1
      } // fin funcion conexion1 interna
      conexion1.send(null) // limpia conexion
	}//( fin if )

}

function GuardarTamanoSimple(preciox,idproducto){
var mensaje=2;
var ruta="GuardarTamanoSimple.php?idproducto="+idproducto;
var idcolor 	= document.getElementById('idcolor').value;
if(idcolor==""){
	alert("seleccione Tamaño ");
	document.getElementById('idcolor').focus();
	return;
}
ruta=ruta+"&idcolor="+idcolor;
var dsref 	= document.getElementById('dsref').value;
if(dsref==""){
	alert("Ingrese la refrencia para el tamaño");
	document.getElementById('dsref').focus();
	return;
}
ruta=ruta+"&dsref="+dsref;


if(preciox>=1){
var dsprecio1 	= document.getElementById('dsprecio_1').value;
if(dsprecio1==""){
alert("Ingrese Valor 1");
document.getElementById('dsprecio_1').focus();
return;
}
ruta=ruta+"&dsprecio_1="+dsprecio1;
}
if(preciox>=2){
var dsprecio2 	= document.getElementById('dsprecio_2').value;
if(dsprecio2==""){
alert("Ingrese Valor 2");
document.getElementById('dsprecio_2').focus();
return;
}
ruta=ruta+"&dsprecio_2="+dsprecio2;
}
if(preciox>=3){
var dsprecio3 	= document.getElementById('dsprecio_3').value;
if(dsprecio3==""){
alert("Ingrese Valor 3");
document.getElementById('dsprecio_3').focus();
return;
}
ruta=ruta+"&dsprecio_3="+dsprecio3;
}
if(preciox>=4){
var dsprecio4 	= document.getElementById('dsprecio_4').value;
if(dsprecio4==""){
alert("Ingrese Valor 4");
document.getElementById('dsprecio_4').focus();
return;
}
ruta=ruta+"&dsprecio_4="+dsprecio4;
}
if(preciox>=5){
var dsprecio5 	= document.getElementById('dsprecio_5').value;
if(dsprecio5==""){
alert("Ingrese Valor 5");
document.getElementById('dsprecio_5').focus();
return;
}
ruta=ruta+"&dsprecio_5="+dsprecio5;
}
var dsunidades = document.getElementById('dsuni_talla').value;
ruta=ruta+"&dsunidad="+dsunidades;
// alert(ruta);
if(idproducto!=""){
 		conexion=AjaxObj();
		conexion.open("POST",ruta,true);
		conexion.onreadystatechange =function() {
        if (conexion.readyState==4) {
		var _resultado = conexion.responseText;

		if (_resultado==0){
		alert("Problemas al insertar");
		return;
  		}else{
  		CargarTamanoSimple(idproducto,mensaje);
  		//location.reload();
   		}

			} // fin conexion
	  } // fin funcion conexion interna
	  conexion.send(null) // limpia conexion


	}// fin de if
}//  fin funcion

function incrementar(campox,valorMax,valor,campototal) {
	ocultar("mensaje");
contador=document.getElementById(campox).value;
if(contador==valorMax){

document.getElementById("mensaje").innerHTML='M&aacute;ximo permitido: '+valorMax
}else {
contador=document.getElementById(campox).value;
// alert(contador)
document.getElementById(campox).value= eval(contador)+eval(1);
// document.getElementById("preciox_m").innerHTML=eval(valor)*(eval(contador)+eval(1));
document.getElementById(campototal).value=redondear(eval(valor)*(eval(contador)+eval(1)));

}
totales();
}

function decrementar(campox,valorMax,valor,campototal) {
	ocultar("mensaje");
contador=document.getElementById(campox).value;
// alert(contador);
if(document.getElementById(campox).value==0){
document.getElementById("mensaje").innerHTML="M&iacute;nimo permitido : 0";
}else {
document.getElementById(campox).value= eval(contador)-eval(1);
// document.getElementById("preciox_m").innerHTML=redondear(eval(valor)*(eval(contador)-eval(1)));
document.getElementById(campototal).value=redondear(eval(valor)*(eval(contador)-eval(1)));
}
totales();
}
function incrementar_kit(campox,valorMax,valor,campototal) {
	ocultar("mensaje");
contador=document.getElementById(campox).value;
var cnt = document.getElementById("tallas").value;
var val = document.getElementById("idcantk").value;
if(contador==valorMax || val==cnt){

document.getElementById("mensaje").innerHTML='M&aacute;ximo permitido: '+valorMax
}else {
contador=document.getElementById(campox).value;
// alert(contador)
document.getElementById(campox).value= eval(contador)+eval(1);
// document.getElementById("preciox_m").innerHTML=eval(valor)*(eval(contador)+eval(1));
document.getElementById(campototal).value=redondear(eval(valor)*(eval(contador)+eval(1)));
var tal= document.getElementById("tallas").value;
document.getElementById("tallas").value= eval(tal)+eval(1);
}
totales();
}

function decrementar_kit(campox,valorMax,valor,campototal) {
	ocultar("mensaje");
contador=document.getElementById(campox).value;
// alert(contador);
if(document.getElementById(campox).value==0){
document.getElementById("mensaje").innerHTML="M&iacute;nimo permitido : 0";
}else {
document.getElementById(campox).value= eval(contador)-eval(1);
// document.getElementById("preciox_m").innerHTML=redondear(eval(valor)*(eval(contador)-eval(1)));
document.getElementById(campototal).value=redondear(eval(valor)*(eval(contador)-eval(1)));
var tal= document.getElementById("tallas").value;
document.getElementById("tallas").value= eval(tal)-eval(1);
}
totales();
}


function totales() {
	var total=0;
	var can=0;
	var num=document.producto_detalle.elements['totales[]'].length;
	if(num>0){
	for (i=0;i<document.producto_detalle.elements['totales[]'].length;i++){
	var valor=document.producto_detalle.elements['totales[]'][i].value;
	var contador1=document.producto_detalle.elements['cantidad[]'][i].value;
	total=eval(total)+eval(valor);
	can=eval(can)+eval(contador1);
	}
	}else{
		var total=document.producto_detalle.elements['totales[]'].value;
		var can=document.producto_detalle.elements['cantidad[]'].value;
	}
	// alert(total);
	if (total==0) {
		total=document.getElementById("preciox_mc").value;
	}
	// alert(document.getElementById("preciox_mc").value);
	document.getElementById("total").value=	total;
	document.getElementById("preciox_m").innerHTML="<span class'tit_ttl'>Total</span> $ "+number_format(total)+"";
	document.getElementById("can").value=can;
// alert(can);

}
function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}
function validateTelefono(elemento)
{
	var validar = document.getElementById(elemento).value;
	var re  = /^[\w ]+$/;
	if(validar.charAt(0) == "-")
	{
		document.getElementById(elemento).value='';
	    document.getElementById(elemento).focus();

	}

 if(!re.test(validar))
    {


    	document.getElementById(elemento).value='';
      	document.getElementById(elemento).focus();


    }

}

function validateEmail(elemento,capa_msn)
{
var email = document.getElementById(elemento).value;
   if(email != ''){
    var re = /\S+@\S+\.\S+/;
	    if(!re.test(email))
	    {
	    	document.getElementById(capa_msn).style.display='';
	    	document.getElementById(elemento).focus();

	    }else
	    {
	    	document.getElementById(capa_msn).style.display='none';
	    }
    }else
    {
    	document.getElementById(capa_msn).style.display='none';
    }
}

function boletin (ruta) {
			var re  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			var dscorreo = document.getElementById("dscorreo");
			var dsacepto = document.getElementById("dsacepto");
			if (!re.test(dscorreo.value)){
			document.getElementById('capax_dscorreo').innerHTML="El correo no es valido<br>";
			document.getElementById('capax_dscorreo').style.display='';
			dscorreo.focus();
			return false;
			}
			if(dsacepto.checked!=true){
			document.getElementById('capax_dsacepto').style.display="";
			document.getElementById('capax_dsacepto').innerHTML="Acepte Los terminos y condiciones";
			return false;
			}
			var correo = dscorreo.value;
			if(correo!=""){
			conexion1=AjaxObj()
			conexion1.open("POST",ruta+"?dscorreo="+correo+"&dsacepto=SI",true);
			conexion1.onreadystatechange =function() {
			if (conexion1.readyState==4) {
			var _resultado = conexion1.responseText;
			if (_resultado !="0" && _resultado !="-1" && _resultado !="") {
			document.getElementById('boletin_1').style.display="";
			document.getElementById('boletin').style.display="none";
			}else{
			alert("Problema Al Modificar");
			}
			} // fin conexion1
			} // fin funcion conexion1 interna
			conexion1.send(null) // limpia conexion
			}
	}

function cp(id,idproducto,img) {

	imgx = img;

	var div = document.getElementById("cont1");
    var nodelist = div.getElementsByClassName("sp-current");
	var i;
	for (i = 0; i < nodelist.length; i++) {
	nodelist[i].removeAttribute('class');
	}

	// document.getElementById(id).setAttribute('class', 'sp-current');

    // document.getElementById(id).removeAttribute("class");
    var imgcontx = imgx;
    if(imgcontx == "") imgcontx = $("i"+id).attr("src");
	var im = $(".sp-current-big").attr("id");
    $("#i"+im).attr({
	  src: imgcontx,
	  id: "i"+im
	});
    $("#"+id).addClass('sp-current');



}

	 function buscar_tiendas2(op,ruta){
	var pais= document.getElementById('idpais').value;
	// var producto= pro;
//========================bloque cargar departamentos=============================//
	if(op==1 && pais!=""){

// alert(producto);
conexion2=AjaxObj()
contenedor2="tiendas_busqueda";
conexion2.open("POST",ruta+"/modulos/validaciones/ubicaciontiendas1.php?idpais="+pais,true);

conexion2.onreadystatechange =function() {
// alert(conexion2.readyState);
if (conexion2.readyState==2 || conexion2.readyState==4) {
// alert("entra");

var _resultado2 = conexion2.responseText;
// alert(_resultado2);

if (_resultado2 !="0" && _resultado2 !=-1 && _resultado2 !="") {
if (contenedor2){
contenedor2=document.getElementById(contenedor2);
contenedor2.innerHTML = _resultado2;
}
}
} // fin conexion2
} // fin funcion conexion2 interna
conexion2.send(null) // limpia conexion
								}

						document.getElementById('iddepartamento').disabled=false;
						document.getElementById('idciudad').disabled=true;
						document.getElementById('idciudad').value="";



//========================fin cargar departamentos=============================//
}
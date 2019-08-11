
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="es"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="es"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="es"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="es"> <![endif]-->
<!--[if gt IE 9]><!--><html lang="es"><!--<![endif]-->

<script language=JavaScript>
/**
This is a JavaScript library that will allow you to easily add some basic DHTML
drop-down datepicker functionality to your Notes forms. This script is not as
full-featured as others you may find on the Internet, but it's free, it's easy to
understand, and it's easy to change.

You'll also want to include a stylesheet that makes the datepicker elements
look nice. An example one can be found in the database that this script was
originally released with, at:

http://www.nsftools.com/tips/NotesTips.htm#datepicker

I've tested this lightly with Internet Explorer 6 and Mozilla Firefox. I have no idea
how compatible it is with other browsers.

version 1.5
December 4, 2005
Julian Robichaux -- http://www.nsftools.com

HISTORY
--  version 1.0 (Sept. 4, 2004):
Initial release.

--  version 1.1 (Sept. 5, 2004):
Added capability to define the date format to be used, either globally (using the
defaultDateSeparator and defaultDateFormat variables) or when the displayDatePicker
function is called.

--  version 1.2 (Sept. 7, 2004):
Fixed problem where datepicker x-y coordinates weren't right inside of a table.
Fixed problem where datepicker wouldn't display over selection lists on a page.
Added a call to the datePickerClosed function (if one exists) after the datepicker
is closed, to allow the developer to add their own custom validation after a date
has been chosen. For this to work, you must have a function called datePickerClosed
somewhere on the page, that accepts a field object as a parameter. See the
example in the comments of the updateDateField function for more details.

--  version 1.3 (Sept. 9, 2004)
Fixed problem where adding the <div> and <iFrame> used for displaying the datepicker
was causing problems on IE 6 with global variables that had handles to objects on
the page (I fixed the problem by adding the elements using document.createElement()
and document.body.appendChild() instead of document.body.innerHTML += ...).

--  version 1.4 (Dec. 20, 2004)
Added "targetDateField.focus();" to the updateDateField function (as suggested
by Alan Lepofsky) to avoid a situation where the cursor focus is at the top of the
form after a date has been picked. Added "padding: 0px;" to the dpButton CSS
style, to keep the table from being so wide when displayed in Firefox.

-- version 1.5 (Dec 4, 2005)
Added display=none when datepicker is hidden, to fix problem where cursor is
not visible on input fields that are beneath the date picker. Added additional null
date handling for date errors in Safari when the date is empty. Added additional
error handling for iFrame creation, to avoid reported errors in Opera. Added
onMouseOver event for day cells, to allow color changes when the mouse hovers
over a cell (to make it easier to determine what cell you're over). Added comments
in the style sheet, to make it more clear what the different style elements are for.
*/

var datePickerDivID = "datepicker";
var iFrameDivID = "datepickeriframe";

var dayArrayShort = new Array('Do', 'Lu', 'Mar', 'Mie', 'Ju', 'Vi', 'Sa');
var dayArrayMed = new Array('Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab');
var dayArrayLong = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabadi');
var monthArrayShort = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic');
var monthArrayMed = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agp', 'Sept', 'Oct', 'Nov', 'Dic');
var monthArrayLong = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

// these variables define the date formatting we're expecting and outputting.
// If you want to use a different format by default, change the defaultDateSeparator
// and defaultDateFormat variables either here or on your HTML page.
var defaultDateSeparator = "/";        // common values would be "/" or "."
var defaultDateFormat = "ymd"    // valid values are "mdy", "dmy", and "ymd"
var dateSeparator = defaultDateSeparator;
var dateFormat = defaultDateFormat;

/**
This is the main function you'll call from the onClick event of a button.
Normally, you'll have something like this on your HTML page:

Start Date: <input name="StartDate">
<input type=button value="select" onclick="displayDatePicker('StartDate');">

That will cause the datepicker to be displayed beneath the StartDate field and
any date that is chosen will update the value of that field. If you'd rather have the
datepicker display beneath the button that was clicked, you can code the button
like this:

<input type=button value="select" onclick="displayDatePicker('StartDate', this);">

So, pretty much, the first argument (dateFieldName) is a string representing the
name of the field that will be modified if the user picks a date, and the second
argument (displayBelowThisObject) is optional and represents an actual node
on the HTML document that the datepicker should be displayed below.

In version 1.1 of this code, the dtFormat and dtSep variables were added, allowing
you to use a specific date format or date separator for a given call to this function.
Normally, you'll just want to set these defaults globally with the defaultDateSeparator
and defaultDateFormat variables, but it doesn't hurt anything to add them as optional
parameters here. An example of use is:

<input type=button value="select" onclick="displayDatePicker('StartDate', false, 'dmy', '.');">

This would display the datepicker beneath the StartDate field (because the
displayBelowThisObject parameter was false), and update the StartDate field with
the chosen value of the datepicker using a date format of dd.mm.yyyy
*/
function displayDatePicker(dateFieldName, displayBelowThisObject, dtFormat, dtSep)
{
  var targetDateField = document.getElementsByName (dateFieldName).item(0);

  // if we weren't told what node to display the datepicker beneath, just display it
  // beneath the date field we're updating
  if (!displayBelowThisObject)
    displayBelowThisObject = targetDateField;

  // if a date separator character was given, update the dateSeparator variable
  if (dtSep)
    dateSeparator = dtSep;
  else
    dateSeparator = defaultDateSeparator;

  // if a date format was given, update the dateFormat variable
  if (dtFormat)
    dateFormat = dtFormat;
  else
    dateFormat = defaultDateFormat;

  var x = displayBelowThisObject.offsetLeft;
  var y = displayBelowThisObject.offsetTop + displayBelowThisObject.offsetHeight ;

  // deal with elements inside tables and such
  var parent = displayBelowThisObject;
  while (parent.offsetParent) {
    parent = parent.offsetParent;
    x += parent.offsetLeft;
    y += parent.offsetTop ;
  }

  drawDatePicker(targetDateField, x, y);
}


/**
Draw the datepicker object (which is just a table with calendar elements) at the
specified x and y coordinates, using the targetDateField object as the input tag
that will ultimately be populated with a date.

This function will normally be called by the displayDatePicker function.
*/
function drawDatePicker(targetDateField, x, y)
{
  var dt = getFieldDate(targetDateField.value );

  // the datepicker table will be drawn inside of a <div> with an ID defined by the
  // global datePickerDivID variable. If such a div doesn't yet exist on the HTML
  // document we're working with, add one.
  if (!document.getElementById(datePickerDivID)) {
    // don't use innerHTML to update the body, because it can cause global variables
    // that are currently pointing to objects on the page to have bad references
    //document.body.innerHTML += "<div id='" + datePickerDivID + "' class='dpDiv'></div>";
    var newNode = document.createElement("div");
    newNode.setAttribute("id", datePickerDivID);
    newNode.setAttribute("class", "dpDiv");
    newNode.setAttribute("style", "visibility: hidden;");
    document.body.appendChild(newNode);
  }

  // move the datepicker div to the proper x,y coordinate and toggle the visiblity
  var pickerDiv = document.getElementById(datePickerDivID);
  pickerDiv.style.position = "absolute";
  pickerDiv.style.left = x + "px";
  pickerDiv.style.top = y + "px";
  pickerDiv.style.visibility = (pickerDiv.style.visibility == "visible" ? "hidden" : "visible");
  pickerDiv.style.display = (pickerDiv.style.display == "block" ? "none" : "block");
  pickerDiv.style.zIndex = 10000;

  // draw the datepicker table
  refreshDatePicker(targetDateField.name, dt.getFullYear(), dt.getMonth(), dt.getDate());
}


/**
This is the function that actually draws the datepicker calendar.
*/
function refreshDatePicker(dateFieldName, year, month, day)
{
  // if no arguments are passed, use today's date; otherwise, month and year
  // are required (if a day is passed, it will be highlighted later)
  var thisDay = new Date();

  if ((month >= 0) && (year > 0)) {
    thisDay = new Date(year, month, 1);
  } else {
    day = thisDay.getDate();
    thisDay.setDate(1);
  }

  // the calendar will be drawn as a table
  // you can customize the table elements with a global CSS style sheet,
  // or by hardcoding style and formatting elements below
  var crlf = "\r\n";
  var TABLE = "<table cols=7 class='dpTable'>" + crlf;
  var xTABLE = "</table>" + crlf;
  var TR = "<tr class='dpTR'>";
  var TR_title = "<tr class='dpTitleTR'>";
  var TR_days = "<tr class='dpDayTR'>";
  var TR_todaybutton = "<tr class='dpTodayButtonTR'>";
  var xTR = "</tr>" + crlf;
  var TD = "<td class='dpTD' onMouseOut='this.className=\"dpTD\";' onMouseOver=' this.className=\"dpTDHover\";' ";    // leave this tag open, because we'll be adding an onClick event
  var TD_title = "<td colspan=5 class='dpTitleTD'>";
  var TD_buttons = "<td class='dpButtonTD'>";
  var TD_todaybutton = "<td colspan=7 class='dpTodayButtonTD'>";
  var TD_days = "<td class='dpDayTD'>";
  var TD_selected = "<td class='dpDayHighlightTD' onMouseOut='this.className=\"dpDayHighlightTD\";' onMouseOver='this.className=\"dpTDHover\";' ";    // leave this tag open, because we'll be adding an onClick event
  var xTD = "</td>" + crlf;
  var DIV_title = "<div class='dpTitleText'>";
  var DIV_selected = "<div class='dpDayHighlight'>";
  var xDIV = "</div>";

  // start generating the code for the calendar table
  var html = TABLE;

  // this is the title bar, which displays the month and the buttons to
  // go back to a previous month or forward to the next month
  html += TR_title;
  html += TD_buttons + getButtonCode(dateFieldName, thisDay, -1, "&lt;") + xTD;
  html += TD_title + DIV_title + monthArrayLong[ thisDay.getMonth()] + " " + thisDay.getFullYear() + xDIV + xTD;
  html += TD_buttons + getButtonCode(dateFieldName, thisDay, 1, "&gt;") + xTD;
  html += xTR;

  // this is the row that indicates which day of the week we're on
  html += TR_days;
  for(i = 0; i < dayArrayShort.length; i++)
    html += TD_days + dayArrayShort[i] + xTD;
  html += xTR;

  // now we'll start populating the table with days of the month
  html += TR;

  // first, the leading blanks
  for (i = 0; i < thisDay.getDay(); i++)
    html += TD + "&nbsp;" + xTD;

  // now, the days of the month
  do {
    dayNum = thisDay.getDate();
    TD_onclick = " onclick=\"updateDateField('" + dateFieldName + "', '" + getDateString(thisDay) + "');\">";

    if (dayNum == day)
      html += TD_selected + TD_onclick + DIV_selected + dayNum + xDIV + xTD;
    else
      html += TD + TD_onclick + dayNum + xTD;

    // if this is a Saturday, start a new row
    if (thisDay.getDay() == 6)
      html += xTR + TR;

    // increment the day
    thisDay.setDate(thisDay.getDate() + 1);
  } while (thisDay.getDate() > 1)

  // fill in any trailing blanks
  if (thisDay.getDay() > 0) {
    for (i = 6; i > thisDay.getDay(); i--)
      html += TD + "&nbsp;" + xTD;
  }
  html += xTR;

  // add a button to allow the user to easily return to today, or close the calendar
  var today = new Date();
  var todayString = "Today is " + dayArrayMed[today.getDay()] + ", " + monthArrayMed[ today.getMonth()] + " " + today.getDate();
  html += TR_todaybutton + TD_todaybutton;
  html += "<button class='dpTodayButton' onClick='refreshDatePicker(\"" + dateFieldName + "\");'>Este Mes</button> ";
  html += "<button class='dpTodayButton' onClick='updateDateField(\"" + dateFieldName + "\");'>Cerrar</button>";
  html += xTD + xTR;

  // and finally, close the table
  html += xTABLE;

  document.getElementById(datePickerDivID).innerHTML = html;
  // add an "iFrame shim" to allow the datepicker to display above selection lists
  adjustiFrame();
}


/**
Convenience function for writing the code for the buttons that bring us back or forward
a month.
*/
function getButtonCode(dateFieldName, dateVal, adjust, label)
{
  var newMonth = (dateVal.getMonth () + adjust) % 12;
  var newYear = dateVal.getFullYear() + parseInt((dateVal.getMonth() + adjust) / 12);
  if (newMonth < 0) {
    newMonth += 12;
    newYear += -1;
  }

  return "<button class='dpButton' onClick='refreshDatePicker(\"" + dateFieldName + "\", " + newYear + ", " + newMonth + ");'>" + label + "</button>";
}


/**
Convert a JavaScript Date object to a string, based on the dateFormat and dateSeparator
variables at the beginning of this script library.
*/
function getDateString(dateVal)
{
  var dayString = "00" + dateVal.getDate();
  var monthString = "00" + (dateVal.getMonth()+1);
  dayString = dayString.substring(dayString.length - 2);
  monthString = monthString.substring(monthString.length - 2);

  switch (dateFormat) {
    case "dmy" :
      return dayString + dateSeparator + monthString + dateSeparator + dateVal.getFullYear();
    case "ymd" :
      return dateVal.getFullYear() + dateSeparator + monthString + dateSeparator + dayString;
    case "mdy" :
    default :
      return monthString + dateSeparator + dayString + dateSeparator + dateVal.getFullYear();
  }
}


/**
Convert a string to a JavaScript Date object.
*/
function getFieldDate(dateString)
{
  var dateVal;
  var dArray;
  var d, m, y;

  try {
    dArray = splitDateString(dateString);
    if (dArray) {
      switch (dateFormat) {
        case "dmy" :
          d = parseInt(dArray[0], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[2], 10);
          break;
        case "ymd" :
          d = parseInt(dArray[2], 10);
          m = parseInt(dArray[1], 10) - 1;
          y = parseInt(dArray[0], 10);
          break;
        case "mdy" :
        default :
          d = parseInt(dArray[1], 10);
          m = parseInt(dArray[0], 10) - 1;
          y = parseInt(dArray[2], 10);
          break;
      }
      dateVal = new Date(y, m, d);
    } else if (dateString) {
      dateVal = new Date(dateString);
    } else {
      dateVal = new Date();
    }
  } catch(e) {
    dateVal = new Date();
  }

  return dateVal;
}


/**
Try to split a date string into an array of elements, using common date separators.
If the date is split, an array is returned; otherwise, we just return false.
*/
function splitDateString(dateString)
{
  var dArray;
  if (dateString.indexOf("/") >= 0)
    dArray = dateString.split("/");
  else if (dateString.indexOf(".") >= 0)
    dArray = dateString.split(".");
  else if (dateString.indexOf("-") >= 0)
    dArray = dateString.split("-");
  else if (dateString.indexOf("\\") >= 0)
    dArray = dateString.split("\\");
  else
    dArray = false;

  return dArray;
}

/**
Update the field with the given dateFieldName with the dateString that has been passed,
and hide the datepicker. If no dateString is passed, just close the datepicker without
changing the field value.

Also, if the page developer has defined a function called datePickerClosed anywhere on
the page or in an imported library, we will attempt to run that function with the updated
field as a parameter. This can be used for such things as date validation, setting default
values for related fields, etc. For example, you might have a function like this to validate
a start date field:

function datePickerClosed(dateField)
{
  var dateObj = getFieldDate(dateField.value);
  var today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  if (dateField.name == "StartDate") {
    if (dateObj < today) {
      // if the date is before today, alert the user and display the datepicker again
      alert("Please enter a date that is today or later");
      dateField.value = "";
      document.getElementById(datePickerDivID).style.visibility = "visible";
      adjustiFrame();
    } else {
      // if the date is okay, set the EndDate field to 7 days after the StartDate
      dateObj.setTime(dateObj.getTime() + (7 * 24 * 60 * 60 * 1000));
      var endDateField = document.getElementsByName ("EndDate").item(0);
      endDateField.value = getDateString(dateObj);
    }
  }
}

*/
function updateDateField(dateFieldName, dateString)
{
  var targetDateField = document.getElementsByName (dateFieldName).item(0);
  if (dateString)
    targetDateField.value = dateString;

  var pickerDiv = document.getElementById(datePickerDivID);
  pickerDiv.style.visibility = "hidden";
  pickerDiv.style.display = "none";

  adjustiFrame();
  targetDateField.focus();

  // after the datepicker has closed, optionally run a user-defined function called
  // datePickerClosed, passing the field that was just updated as a parameter
  // (note that this will only run if the user actually selected a date from the datepicker)
  if ((dateString) && (typeof(datePickerClosed) == "function"))
    datePickerClosed(targetDateField);
}


/**
Use an "iFrame shim" to deal with problems where the datepicker shows up behind
selection list elements, if they're below the datepicker. The problem and solution are
described at:

http://dotnetjunkies.com/WebLog/jking/archive/2003/07/21/488.aspx
http://dotnetjunkies.com/WebLog/jking/archive/2003/10/30/2975.aspx
*/
function adjustiFrame(pickerDiv, iFrameDiv)
{
  // we know that Opera doesn't like something about this, so if we
  // think we're using Opera, don't even try
  var is_opera = (navigator.userAgent.toLowerCase().indexOf("opera") != -1);
  if (is_opera)
    return;

  // put a try/catch block around the whole thing, just in case
  try {
    if (!document.getElementById(iFrameDivID)) {
      // don't use innerHTML to update the body, because it can cause global variables
      // that are currently pointing to objects on the page to have bad references
      //document.body.innerHTML += "<iframe id='" + iFrameDivID + "' src='javascript:false;' scrolling='no' frameborder='0'>";
      var newNode = document.createElement("iFrame");
      newNode.setAttribute("id", iFrameDivID);
      newNode.setAttribute("src", "javascript:false;");
      newNode.setAttribute("scrolling", "no");
      newNode.setAttribute ("frameborder", "0");
      document.body.appendChild(newNode);
    }

    if (!pickerDiv)
      pickerDiv = document.getElementById(datePickerDivID);
    if (!iFrameDiv)
      iFrameDiv = document.getElementById(iFrameDivID);

    try {
      iFrameDiv.style.position = "absolute";
      iFrameDiv.style.width = pickerDiv.offsetWidth;
      iFrameDiv.style.height = pickerDiv.offsetHeight ;
      iFrameDiv.style.top = pickerDiv.style.top;
      iFrameDiv.style.left = pickerDiv.style.left;
      iFrameDiv.style.zIndex = pickerDiv.style.zIndex - 1;
      iFrameDiv.style.visibility = pickerDiv.style.visibility ;
      iFrameDiv.style.display = pickerDiv.style.display;
    } catch(e) {
    }

  } catch (ee) {
  }

}


</script>

<style>

/* the div that holds the date picker calendar */
.dpDiv {
	}


/* the table (within the div) that holds the date picker calendar */
.dpTable {
	font-family: Tahoma, Arial, Helvetica, sans-serif;
	font-size: 12px;
	text-align: center;
	color: #505050;
	background-color: #eee;
	border: 1px solid #AAAAAA;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
	}


/* a table row that holds date numbers (either blank or 1-31) */
.dpTR {
	}


/* the top table row that holds the month, year, and forward/backward buttons */
.dpTitleTR {
  background: #555;
  color: #fff;
	}


/* the second table row, that holds the names of days of the week (Mo, Tu, We, etc.) */
.dpDayTR {
	}


/* the bottom table row, that has the "This Month" and "Close" buttons */
.dpTodayButtonTR {
	}


/* a table cell that holds a date number (either blank or 1-31) */
.dpTD {
	border: 1px solid #bbb;
  padding: 7px;
  background: rgb(252,252,252); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(252,252,252,1) 0%, rgba(221,221,221,1) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(252,252,252,1)), color-stop(100%,rgba(221,221,221,1))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(221,221,221,1) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(221,221,221,1) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(221,221,221,1) 100%); /* IE10+ */
  background: linear-gradient(to bottom,  rgba(252,252,252,1) 0%,rgba(221,221,221,1) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfcfc', endColorstr='#dddddd',GradientType=0 ); /* IE6-9 */

	}


/* a table cell that holds a highlighted day (usually either today's date or the current date field value) */
.dpDayHighlightTD {
	background-color: #CCCCCC;
	border: 1px solid #AAAAAA;
	}


/* the date number table cell that the mouse pointer is currently over (you can use contrasting colors to make it apparent which cell is being hovered over) */
.dpTDHover {
	background-color: #bbb;
	border: 1px solid #888888;
	cursor: pointer;
	color: red;
	}


/* the table cell that holds the name of the month and the year */
.dpTitleTD {
	}


/* a table cell that holds one of the forward/backward buttons */
.dpButtonTD {
	}


/* the table cell that holds the "This Month" or "Close" button at the bottom */
.dpTodayButtonTD {
	}


/* a table cell that holds the names of days of the week (Mo, Tu, We, etc.) */
.dpDayTD {
	background-color: #fff;
	color: #666;
	}


/* additional style information for the text that indicates the month and year */
.dpTitleText
{
	font-size: 14px;
  border: 0;
	}


/* additional style information for the cell that holds a highlighted day (usually either today's date or the current date field value) */
.dpDayHighlight {
	color: 4060ff;
	font-weight: bold;
	}


/* the forward/backward buttons at the top */
.dpButton {
	font-family: Verdana, Tahoma, Arial, Helvetica, sans-serif;
	font-size: 10px;
	color: #fff;
  background: none;
	font-weight: bold;
	padding: 0px;
  border: 0;
	}


/* the "This Month" and "Close" buttons at the bottom */
.dpTodayButton {
	font-family: Verdana, Tahoma, Arial, Helvetica, sans-serif;
	font-size: 10px;
	color: gray;
	background: #d8e8ff;
	font-weight: bold;
	}

</style><head>
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
   <![endif]-->
    <title>Carro de compras  En bike house amamos tu pasión!!! Las mejores marcas de ciclismo del mundo en un solo lugar desde 1989.</title>
    <meta charset="utf-8">
    <meta property="og:title" content="Carro de compras  En bike house amamos tu pasión!!! Las mejores marcas de ciclismo del mundo en un solo lugar desde 1989.">
    <meta property="og:site_name" content="Bike House  &copy;  2019">
    <meta property="og:description" content="">
    <meta property="og:type" content="website" />
    <meta property="og:image" content="www.bikehouse.com.co">
    <meta property="og:image:secure_url" content="http://www.bikehouse.com.co/contenidos/images/empresa/logo-bikehouse.png" />
    <meta property="og:image:type" content="image/jpeg" />

    <meta name="description" content="" />
    <meta name="keywords" content=""/>

<!-- Hojas de estilo -->
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/x-icon" href="/tienda/favicon.ico">
    <link rel="stylesheet" href="/tienda/css/style.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/style.formulario.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/style.ecommerce.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/mapa.sitio.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/paginador.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/style.blog.min.css" type="text/css" media="all" rel="stylesheet">
    <link rel="stylesheet" href="/tienda/css/style.reservas.min.css" type="text/css" media="all" rel="stylesheet">
    <link rel="stylesheet" href="/tienda/css/stylemenu.min.css" type="text/css"/>
    <link rel="stylesheet" href="/tienda/css/proceso.pago.min.css" type="text/css"/>
    <link rel="stylesheet" href="/tienda/css/estilo_chat.min.css" type="text/css" media="all" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/tienda/css/jquery.lightbox.min.css" />
    <link rel="stylesheet" href="/tienda/css/colorbox.min.css" />
    <link rel="stylesheet" href="/tienda/css/slider.automatico.min.css">
    <link rel="stylesheet" href="/tienda/css/slider.responsive.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/skitter.styles.min.css" type="text/css" media="all" rel="stylesheet" >
    <link rel="stylesheet" href="/tienda/css/smoothproducts.min.css">
    <link rel="stylesheet" type="text/css" href="/tienda/css/style.menu.desplegable.min.css" />
    <link rel="stylesheet" href="/tienda/css/navbar_techandall.min.css"> <!-- Navigation CSS -->
    <link href="/tienda/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="/tienda/css/jquery-ui.min.css" type="text/css" media="all">

<!-- Hojas JS -->
    <script type="text/javascript" src="/tienda/js_modulos/javageneral.js"></script>
    <script language="JavaScript" src="/tienda/js_modulos/ajax.js" type="text/javascript" ></script>
    <script src="/tienda/js_sitio/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/tienda/js_sitio/tinydropdown.js"></script>
    <script src="js_sitio/placeholders.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="/tienda/js_modulos/responsivemobilemenu.js"></script>
    <!--CHAT-->
    <script type="text/javascript" src="/tienda/js_modulos/funciones_chat.js"></script>
    <!--CHAT-->

    
    
    
 <!--   <script>
        $(document).ready(function(){
            var elemento = $(".cont_eventos");
            var posicion = elemento.position();
            console.log( "left: " + posicion.left + ", top: " + posicion.top );      
        });
    </script>-->

    <!--  LIGHTBOX -->

    <script>

$(document).ready(function() {
    $('.titu_tarjeta_acordeon').click(function() {
        $('.titu_tarjeta_acordeon').removeClass('on');
        $('.text_tarjeta_acordeon').slideUp('normal');
        if($(this).next().is(':hidden') == true) {
            $(this).addClass('on');
            $(this).next().slideDown('normal');
            }
    });
    $('.titu_tarjeta_acordeon').mouseover(function() {
        $(this).addClass('over');
    }).mouseout(function() {
        $(this).removeClass('over');
    });
    $('.text_tarjeta_acordeon').hide();


    $('.cont_anclas_tarjeta ul li a').click(function(){
    var strAncla=$(this).attr('href'); 
        $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top-0
        },1000);
});
});



</script>

        <script type="text/javascript" src="/tienda/js_sitio/jquery.lightbox.js"></script>

            <script type="text/javascript">
              $(document).ready(function(){

                $('.lightbox').lightbox();

                $("a.customlightbox").lightbox({
                  buttons: [
                    {
                      'class'     : 'jquery-lightbox-button-openurl',
                      'html'      : '<span>open in new window</span>',
                      'callback'  : function(url, object) {
                        window.location.href = url;
                      }
                    }
                  ]
                });

              });

    </script>

        <script type="text/javascript">
    $(document).ready(function(){
        $('.cont_projectone_sup .btn_general').click(function(){
            $('.cont_projectone_infe').css("display","block");


        })
    });
    </script>

<script>
        $(function(){
    $('a[href*=#frm_1]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
    var targetOffset = $target.offset().top-50;
    $('html,body').animate({scrollTop: targetOffset}, 1000);
    return false;
    }
    }
    });
    });

</script>

    <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principal').click(function() {
                $('.barra_principal').removeClass('on');
                $('.mostrar_contenido').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principal').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenido').hide();
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principal3').click(function() {
                $('.barra_principal3').removeClass('on');
                $('.mostrar_contenido3').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principal3').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenido3').hide();
        });
    </script>

    <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principal4').click(function() {
                $('.barra_principal4').removeClass('on');
                $('.mostrar_contenido4').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principal4').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenido4').hide();
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principal2').click(function() {
                $('.barra_principal2').removeClass('on');
                $('.mostrar_contenido2').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principal2').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenido2').hide();
        });
    </script>

        <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principal1').click(function() {
                $('.barra_principal1').removeClass('on');
                $('.mostrar_contenido1').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principal1').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenido1').hide();
        });
    </script>


     <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principalpre').click(function() {
                $('.barra_principalpre').removeClass('on');
                $('.mostrar_contenidopre').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principalpre').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenidopre').hide();
        });
    </script>


    <script type="text/javascript">
        $(document).ready(function() {
            $('.barra_principalzpm').click(function() {
                $('.barra_principalzpm').removeClass('on');
                $('.mostrar_contenidozpm').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.barra_principalzpm').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.mostrar_contenidozpm').hide();
        });
    </script>


        <!--  LIGHTBOX FIN -->
    <!-- LIGHTBOX  -->

        <script src="/tienda/js_sitio/jquery.colorbox.js"></script>
        <script>
            $(document).ready(function(){
                $(".galeria_detalle").colorbox({rel:'galeria_detalle'});
                $(".terminos_condiciones").colorbox({iframe:true, width:"60%", height:"80%"});
                $(".inscripcion_evento").colorbox({iframe:true, width:"60%", height:"80%"});
                $(".imagenes_bici").colorbox({iframe:true, width:"60%", height:"80%"});
                $(".ver_mapa").colorbox({iframe:true, width:"650", height:"700px"});
                $(".inline").colorbox({inline:true, width:"50%"});
                $(".editar-modulo").colorbox({width:"90%", height:"90%", iframe:true, scrolling:true, onOpen:function() { $("body").css("overflow", "hidden"); }, onClosed:function() { $("body").css("overflow", "auto");  location.reload();}});
                //Example of preserving a JavaScript event for inline calls.
                $("#click").click(function(){
                    $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
                    return true;
                });
            });

                    function cargarColorBox(ruta,ancho,alto,parametro){
                    if(ancho=="")ancho="80";
                    if(alto=="")alto="80";
                    if(ruta=="")var ruta="https://bikehouse.com.co";
                    if(ruta!="")ruta=ruta+"?ruta="+parametro;
                   $.colorbox({
                    width:ancho+"px", 
                    height:alto+"", 
                    iframe:true,
                    escKey:false,
                    overlayClose:false,
                    closeButton:false,
                    href:ruta,
                    scrolling:true,
                    transition:"elastic",
                    onOpen:function(){ 
                    $("body").css("overflow", "hidden"); 
                    }, 
                    onClosed:function(){
                    $("body").css("overflow", "auto");
                    }
                });
            } 
        </script>

    <!-- LIGHTBOX  -->

  <!-- CAPAS -->

      <script type="text/javascript">
        $(document).ready(function(){
        $('#tabs div').hide();
        $('#tabs div:first').show();
        $('#tabs ul li a:first').addClass('active');
        $('#tabs ul li a').click(function(){
        $('#tabs ul li a').removeClass('active');
        $(this).addClass('active');
        var currentTab = $(this).attr('href');
        $('#tabs .tabs_content').hide();
        $(currentTab).show();
        return false;
        });
        });
    </script>

    <script type="text/javascript">
          $(document).ready(function(){ // Script del men&uacute; con pesta&ntilde;as
           $('ul.tabs').each(function(){
                // For each set of tabs, we want to keep track of
                // which tab is active and it's associated content
                var $active, $content, $links = $(this).find('a');

                // If the location.hash matches one of the links, use that as the active tab.
                // If no match is found, use the first link as the initial active tab.
                $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
                $active.addClass('active');
                $content = $($active.attr('href'));

                // Hide the remaining content
                $links.not($active).each(function () {
                    $($(this).attr('href')).hide();
                });

                // Bind the click event handler
                $(this).on('click', 'a', function(e){
                    $active.removeClass('active');
                    $content.hide();

                    $active = $(this);
                    $content = $($(this).attr('href'));

                    $active.addClass('active');
                    $content.show();

                    e.preventDefault();
                });
            });


        });

      function abrir_forma(capa1,capa2) {
        var vari = document.getElementById('dsnombre_mostrar_frm').value;
        document.getElementById('servicio').value= vari;
        document.getElementById('dsmnombre').value= vari;
        document.getElementById(capa1).style.display="";
        document.getElementById(capa2).style.display="none";

    }


        function abrir_forma1(capa1,capa2) {
        var vari = document.getElementById('dsnombre_mostrar_frm').value;
        document.getElementById('evento').value= vari;
        document.getElementById('dsmnombre').value= vari;
        document.getElementById(capa1).style.display="";
        document.getElementById(capa2).style.display="none";

    }


    </script>

    <!-- FIN CAPAS -->


    <!-- Galeria slider automatico -->
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
    <!-- Galeria slider automatico -->


    <!-- Carrusel con scroll -->

        <script type="text/javascript" language="javascript" src="/tienda/js_sitio/jquery.carouFredSel-6.2.0-packed.js"></script>
        <script type="text/javascript" language="javascript" src="/tienda/js_sitio/jquery.mousewheel.min.js"></script>
        <script type="text/javascript" language="javascript" src="/tienda/js_sitio/jquery.touchSwipe.min.js"></script>
        <script type="text/javascript">

            $(document).ready(function(){

                $('#carrusel_imagenes_caracteristicas_n').carouFredSel({
                   // width: "650px",
                    height:"200px",
                    auto:{
                        play:false,
                        pauseOnHover:true,
                        duration:9000,
                        timeoutDuration:90000
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"200px",
                    auto:{
                        play:false,
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
                    height:"variable",
                    auto:{
                        play:true,
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
                    height:"98px",
                    auto:{
                        play:false,
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
                        play:false,
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
                        play:false,
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
                        play:false,
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
                            $pager.find( 'img' ).eq( getCenterThumb() ).addClass( 'selected' );
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
                        $pager.trigger( 'slideTo', [ -center, { duration: 0 } ] );
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

    <!-- GALERÃA RESPONSIVE -->

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

    <!-- GALERÃA RESPONSIVE -->
    <!-- Carrusel con scroll -->

    <!-- Galeria Index -->
        <script src="/tienda/js_sitio/jquery.easing.1.3.js"></script>
        <script src="/tienda/js_sitio/jquery.animate-colors-min.js"></script>
        <script src="/tienda/js_sitio/jquery.skitter.min.js"></script>
        <script>
        $(document).ready(function(){
            $('.box_skitter_small').css({width: 691, height: 270}).skitter({label: false, numbers: false, animation: 'blind', hideTools: true, navigation: true, dots: false});
            $('.box_skitter_large').css({width: 1012, height: 300}).skitter({
                animation: 'blind',// AnimaciÃ³n de galeria
                interval: 8000, //Tiempo de espera
                label: true,// Texto en la galeria
                labelAnimation: 'slideUp',// slideUp, left, right, fixed (AnimaciÃ³n de texto)
                theme: 'clean', // minimalist, round, clean, square (Tema de galeria)
                progressbar: true,//Linea tiempo cambio de imagen
                hideTools: true,// Mostar flechas con el hover
                navigation: true,//Paginador por flechas
                numbers: true,//Paginador por numeros
                dots: true,//Paginador por punticos
                numbers_align: 'center',//Alineacion paginador
                preview: false// Zoom de las demÃ¡s imagenes
            });
            $('.box_skitter_lateral').css({width: 285, height: 207}).skitter({label: false, numbers: false, animation: 'blind', hideTools: true, navigation: true, dots: false});
        });
        </script>
    <!-- Galeria Index -->


    <!-- GALERIA DE PRODUCTOS-->
        <!--script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"></script-->
        <script type="text/javascript" src="/tienda/js_sitio/smoothproducts.min.js"></script>
        <script type="text/javascript">
                /* wait for images to load */
                $(window).load( function() {
                    $('.sp-wrap').smoothproducts();
                });
        </script>
    <!-- GALERIA DE PRODUCTOS-- >

    <!-- Acordion -->

    <script type="text/javascript">
        $(document).ready(function() {
            $('.titu_pregunta').click(function() {
                $('.titu_pregunta').removeClass('on');
                $('.txt_pregunta').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                 }
             });
            $('.titu_pregunta').mouseover(function() {
                $(this).addClass('over');
            }).mouseout(function() {
                $(this).removeClass('over');
            });
            $('.txt_pregunta').hide();
        });
    </script>

    <!--  Fin Acordion -->

    <!--Poo up-->

        <script language="JavaScript">
            function Abrir_ventana (pagina) {
            var opciones="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,          resizable=yes, width=750, height=700, top=100, left=200";

            window.open(pagina,"",opciones);
            }
        </script>

    <!--Poo up-->

    <!--   MENU DESPLEGABLE   -->
    <script type="text/javascript" src="/tienda/js_sitio/menu.jquery.js"></script>
    <!-- FIN MENU DESPLEGABLE   -->
    <!--menu productos-->
    <!--menu productos-->
      <!-- CSS POR MODULOS   -->
        <!--FIN CSS POR MODULOS   -->
    <!-- JS POR MODULOS   -->
    <!-- FIN JS POR MODULOS   -->
<!--BLOQUE DE FECHAS MODULOS DE RESERVAS -->
<script type="text/javascript" src="/tienda/js_sitio/jquery-ui.js"></script>
<script type='text/javascript'>
//<![CDATA[
$(window).load(function(){
//======================  FECHA DE LLEGADA ======================================//
$('#dsfechallegadal').datepicker({
minDate: 0,


/*  Bloque La fechas  Solo Saldrian Las Rangos de los dos calendario
beforeShow: function() {
$(this).datepicker('option', 'maxDate', $('#dsfechasalidal').val());
}
*/


});

//====================== FIN FECHA DE LLEGADA ======================================//
//======================  FECHA DE SALIDA ======================================//
$('#dsfechasalidal').datepicker(
{
defaultDate: "+1d",
minDate: 10,
beforeShow: function() {
var fecha= $('#dsfechallegadal').val();
fecha=sumar_fecha(fecha),
$(this).datepicker('option', 'minDate', fecha);
if ($('#dsfechallegadal').val() === '') $(this).datepicker('option', 'minDate',0);
}
});
//====================== FIN  FECHA DE SALIDA ======================================//

});
//]]>



</script>
<script type='text/javascript'>
//<![CDATA[
$(window).load(function(){
$('#dsfechallegada').datepicker(
{
minDate: 0,
/*
beforeShow: function() {
$(this).datepicker('option', 'maxDate', $('#dsfechasalida').val());

}
*/
});
$('#dsfechasalida').datepicker(
{
defaultDate: "+1d",
minDate: 10,
beforeShow: function() {
var fecha= $('#dsfechallegada').val();
fecha=sumar_fecha(fecha),
$(this).datepicker('option', 'minDate',fecha);
if ($('#dsfechallegada').val() === '') $(this).datepicker('option', 'minDate', 0);
}
});
});
//]]>

function sumar_fecha(fecha) {

var sumarDias=parseInt(1);
fecha=fecha.replace("-", "/").replace("-", "/");
fecha= new Date(fecha);
fecha.setDate(fecha.getDate()+sumarDias);
var anio=fecha.getFullYear();
var mes= fecha.getMonth()+1;
var dia= fecha.getDate();
if(mes.toString().length<2){
mes="0".concat(mes);
}
if(dia.toString().length<2){
dia="0".concat(dia);
}
fecha=anio+"/"+mes+"/"+dia;
return fecha;
}
</script>
<!--BLOQUE DE FECHAS MODULOS DE RESERVAS -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68375532-1', 'auto');
  ga('send', 'pageview');


  
</script>
</head>
        <body>
                <div class="fondo_img_color" style="background-color:#ffffff;">                        <section class="cont_pagina">
                                                                <section class="cont_header">
                                <header>
	<section class="cont_header_interior">
				<article class="centro_header">
			<article class="ecommerce_header">

			<article class="cont_ingreso">

																	

												<a href="/tienda/inicio.sesion.php">Inicio de sesi&oacute;n</a><!--
						<a href="/tienda/registro.php"> Cliente nuevo</a> -->
						
						
			</article>



</article>
						 				<article class ="redes">
					<ul>
										<li><a href="https://www.facebook.com/Bikehousecolombia" target="_blank">
							<img src="/contenidos/images/redes/facebook-bikehouse.png">							</a>
						</li>

									<li><a href="https://twitter.com/bikehouse_co" target="_blank">
							<img src="/contenidos/images/redes/twitter-bikehouse.png">							</a>
						</li>

									<li><a href="https://www.youtube.com/channel/UCE2uABlz23hWDwwgaB6GYmQ" target="_blank">
							<img src="/contenidos/images/redes/youtube-bikehouse.png">							</a>
						</li>

									<li><a href="https://instagram.com/bikehousecol/" target="_blank">
							<img src="/contenidos/images/redes/instagram-bikehouse.png">							</a>
						</li>

			
					</ul>

		</article>
								
<article class="buscador">
        <form action="/tienda/buscador.php" method=get name="cms_frm_buscador">
		<!--label for="search">Buscador</label-->
		<input type="text" name="dsbusqueda" id="dsbusqueda" placeholder="Qu&eacute; est&aacute;s buscando?">
		<input type="submit" value="HACER B&Uacute;SQUEDA">
	</form>
</article>

		<article class="logo_encabezado">
		<a href="/tienda/">
			<img src="/contenidos/images/empresa/logo-bikehouse.png" alt="" >
		</a>
	</article>
				
			<article class="cont_gnal_car">
				<article class="ico_carrito">

					<a href="/tienda/carrito.php">
											<img src="/contenidos/images/empresa/carrito_ico.png">
											<p>CARRO DE COMPRAS</p></a>
				</article>
				<article class="contador_prod">
					<a href="/tienda/carrito.php" class="cantidad">
						0					</a>
				</article>
		</article>
		</article>
	</section>
</header>
                                </section>
                                
<nav class="menu_superior">
    <ul id="menu" class="menu">
    	

<li class="dropdown">
  <a href="/pag/qsomos">Bike house</a>  
  
</li>

<li>
<a href="/categorias/bicicletas">Bicicletas</a>
  
  <ul>
        <!-- <li><a href="/producto/bicicleta-nacional-bcn">Atl&eacute;tico Nacional</a></li> -->
        <li><a href="/categorias/bicicletas">Trek</a></li>
<!--        <li><a href="/subcategoria/bicicletas/bicicletas-cliff">Cliff</a></li>-->
         <li>
      <a href="financiacion.php">Financiaci&oacute;n</a>
    </li>

         <li>
      <a href="por-que-comprar-una-trek.php">&iquest;Por qu&eacute; comprar una Trek?</a>
    </li>

       </ul>
 </li>

<li>
<a href="/categorias/accesorios">Accesorios</a>
</li>
<li>
<a href="/pag/noticias">Noticias</a>
</li>
<li>
<a href="/pag/promociones">Promociones</a>
</li>
<li>
<a href="/pag/tiendas">Tiendas</a>
</li>
<li>
<a href="/pag/eventos">Eventos</a>
</li>
<li>
<a href="/pag/historias">Historias</a>
</li>
<li>
<a href="/pag/tarjeta-de-credito">Tarjeta de cr&eacute;dito Bike House</a>
</li>
<!-- <a></a> -->
<li class="dropdown">
  <a>Conoce m&aacute;s</a>  
  
  <ul>
         <li>
      <a href="/pag/politicas-de-devoluciones-y-garantias">pol&iacute;ticas de devoluciones y garant&iacute;as</a>
    </li>

         <li>
      <a href="/pag/servicios">Centro de Mantenimiento</a>
    </li>

         <li>
      <a href="/pag/financiacion">Financiaci&oacute;n</a>
    </li>

         <li>
      <a href="/pag/creemos-en-las-bicis">Creemos en las bicis</a>
    </li>

         <li>
      <a href="/pag/por-que-comprar-una-trek">&iquest;Por qu&eacute; comprar una Trek?</a>
    </li>

         <li>
      <a href="/pag/preguntas_frecuentes">Preguntas frecuentes</a>
    </li>

         <li>
      <a href="/pag/labor-social">Responsabilidad social</a>
    </li>

         <li>
      <a href="/pag/contacto">Cont&aacute;ctanos</a>
    </li>

       </ul>
 
</li>

<!-- Paginas Nuevas -->










    </ul>
</nav>

<script type="text/javascript">
var dropdown=new TINY.dropdown.init("dropdown", {id:'menu', active:'menuhover'});
</script>

       
	
            

<div class="callbacks_container">
    <ul class="rslides" id="slider_responsive">
                 <li>

          <a href='https://bikehouse.com.co/pag/tarjeta-de-credito' target='_self' title=''>            <img src="/contenidos/images/banners/banner-tarjeta-bikehouse.jpg" class="block" />
          </a>          <article class="cont_info_slider">
            <h1>banner tarjeta</h1>
            <p></p>
            <!-- <a href="https://bikehouse.com.co/pag/tarjeta-de-credito" class="ver">Ver m&aacute;s</a> -->
            <!-- <h2>Subtitulo slider</h2>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerÃ¡ con el contenido del texto.</p> -->
            <a href='https://bikehouse.com.co/pag/tarjeta-de-credito' target='_self' title=''>Ver mÃ¡s</a>          </article>
        </li>
                 <li>

          <a href='<p>https://bikehouse.com.co/pag/tiendas</p>' target='_self' title=''>            <img src="/contenidos/images/banners/banner-explorar-bogota.jpg" class="block" />
          </a>          <article class="cont_info_slider">
            <h1>banner recorrido bogota</h1>
            <p></p>
            <!-- <a href="<p>https://bikehouse.com.co/pag/tiendas</p>" class="ver">Ver m&aacute;s</a> -->
            <!-- <h2>Subtitulo slider</h2>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerÃ¡ con el contenido del texto.</p> -->
            <a href='<p>https://bikehouse.com.co/pag/tiendas</p>' target='_self' title=''>Ver mÃ¡s</a>          </article>
        </li>
                 <li>

                      <img src="/contenidos/images/banners/banner-credito-bike.jpg" class="block" />
                    <article class="cont_info_slider">
            <h1>banner credito</h1>
            <p></p>
            <!-- <a href="" class="ver">Ver m&aacute;s</a> -->
            <!-- <h2>Subtitulo slider</h2>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerÃ¡ con el contenido del texto.</p> -->
                      </article>
        </li>
              </ul>
  </div>




                        
                                <section class="cont_carrito">
	<h1>Su carro de compras</h1>

	
	<article class="no_producto">
		<img src="/tienda/images/carrito_ico.png">
		<h3>NO HAY PRODUCTOS ASOCIADOS EN ESTOS MOMENTOS</h3>
		<nav>
			<a href="ecommerce.subcategorias.php?idrelacion=1" class="btn_general"><p>Por favor agregue uno</p></a>
		</nav>
	</article>
	
</section>

<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript">
function validar_distribuidorx() {
var total=document.forma_carrito.totalvalor.value;
var compara=document.forma_carrito.preciomcliente.value;
var idtipo=document.forma_carrito.tipo.value;
if(parseInt(document.forma_carrito.totalvalor.value) < parseInt(document.forma_carrito.preciomcliente.value)) {
alert("<b>Su compra m&iacute;nima  debe ser de $"+compara+" , lo invitamos a seguir a&ntilde;adiendo productos a su carritoo de compras </b><br>")
return;
}
validar_cantidad(2);
//document.forma_carrito.submit();
}
//un alert
</SCRIPT>


<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript">//SCRIPT PARA VALIDAR LA CNTIDAD SELECCIONADA Y LA UNIDAD DISPONIBLE
function validar_cantidad(paso) {
	var nump = document.forma_carrito.elements['idx[]'].length;
	if(nump>1){
			for (i=0;i<document.forma_carrito.elements['cantidad[]'].length;i++){
					if(parseInt(document.forma_carrito.elements['cantidad[]'][i].value)>=parseInt(document.forma_carrito.elements['unidadispo[]'][i].value)) {
					var nombreproduc = document.forma_carrito.elements['nombreprod[]'][i].value
					var id = document.forma_carrito.elements['idx[]'][i].value
					document.getElementById("producto_"+id).style.display="";
					document.getElementById("mensaje_"+id).innerHTML="La cantidad del producto "+ nombreproduc +" debe ser menor a las unidades disponibles."
					document.forma_carrito.elements['cantidad[]'][i].focus();
					return;
					}
			}
	}else{
	//=========validacion cuando solo tiene un item agregado al carrito
		if(parseInt(document.forma_carrito.elements['cantidad[]'].value)>=parseInt(document.forma_carrito.elements['unidadispo[]'].value)) {
		var nombreproduc = document.forma_carrito.elements['nombreprod[]'].value
		var id = document.forma_carrito.elements['idx[]'].value
		document.getElementById("producto_"+id).style.display="";
		document.getElementById("mensaje_"+id).innerHTML="La cantidad del producto "+ nombreproduc +" debe ser menor a las unidades disponibles."
		document.forma_carrito.elements['cantidad[]'].focus();
		return;
		}
	//=========validacion cuando solo tiene un item agregado al carrito
	}
			if(paso==1)forma_carrito.action="modificar.php";
			forma_carrito.submit();
		}
//un alert
</SCRIPT>

                                <section class="cont_footer">
                                <footer>
<section class="footer_derecho">
	<article class="cont_menu_footer">
	<nav class="menu_footer">
		<ul>
										<li>
						<a href="/pag/politicas-privacidad">Politicas de privacidad</a>
					</li>
									<li>
						<a href="/pag/qsomos">Qui&eacute;nes somos</a>
					</li>
									<li>
						<a href="/pag/garantia">garant&iacute;a</a>
					</li>
									<li>
						<a href="/pag/marcas">Marcas</a>
					</li>
									<li>
						<a href="/pag/promociones">Promociones</a>
					</li>
									<li>
						<a href="/pag/tiendas">Tiendas</a>
					</li>
									<li>
						<a href="/pag/eventos">Eventos</a>
					</li>
									<li>
						<a href="/pag/historias">Historias</a>
					</li>
									<li>
						<a href="/pag/tarjeta-de-credito">Tarjeta de cr&eacute;dito</a>
					</li>
									<li>
						<a href="/pag/inicio_sesion">Inicio de sesi&oacute;n</a>
					</li>
						</ul>
	</nav>
</article>				<article class="cont_cat_foot">
			<ul>
								<li>
					<a href="/categorias/accesorios"><h2>Accesorios</h2></a>
				</li>

										<li><a href="/subcategoria/accesorios/accesorios-para-bicicleta"><h3>accesorios para bicicleta</h3></a></li>

									<li><a href="/subcategoria/accesorios/accesorios-para-el-cuerpo-hombres"><h3>accesorios para el cuerpo hombres</h3></a></li>

									<li><a href="/subcategoria/accesorios/accesorios-para-el-cuerpo-mujeres"><h3>accesorios para el cuerpo mujeres</h3></a></li>

									<li><a href="/subcategoria/accesorios/accesorios-para-el-cuerpo-ninios"><h3>accesorios para el cuerpo ni&ntilde;os</h3></a></li>

									
								<li>
					<a href="/categorias/bicicletas"><h2>Bicicletas</h2></a>
				</li>

										<li><a href="/subcategoria/bicicletas/ruta"><h3>ruta</h3></a></li>

									<li><a href="/subcategoria/bicicletas/ninios"><h3>ni&ntilde;os</h3></a></li>

									<li><a href="/subcategoria/bicicletas/montania"><h3>monta&ntilde;a</h3></a></li>

									
						    </ul>
		</article>
		


<article class ="cont_info">
	<p>(4) 373 25 00 - 018000 522 225</p>	<p>Carrera 43A #31-193, Av. El Poblado <br> Medell&iacute;n</p>	<a href="/pag/tiendas" class="btn_general">Ver todas las tiendas</a>
	<p>mercadeo@bikehouse.com.co</p>	</article>


</section>

<section class="footer_izquierdo">
	
		<article class="cont_logo_remate">
				

			<img src="/contenidos/images/empresa/logo-bikehouse-blanco.png" alt="" >

	
					</article><article class="cont_redes_inferior">
<ul class="redes_inferior">


		<li>
					<a href="https://www.facebook.com/Bikehousecolombia" target="_blank" title="Facebook">
			<img src="/contenidos/images/redes/facebook-bikehouse.png" alt="Facebook">
		</a>
					</li>

		<li>
					<a href="https://twitter.com/bikehouse_co" target="_blank" title="Twitter">
			<img src="/contenidos/images/redes/twitter-bikehouse.png" alt="Twitter">
		</a>
					</li>

		<li>
					<a href="https://www.youtube.com/channel/UCE2uABlz23hWDwwgaB6GYmQ" target="_blank" title="Youtube">
			<img src="/contenidos/images/redes/youtube-bikehouse.png" alt="Youtube">
		</a>
					</li>

		<li>
					<a href="https://instagram.com/bikehousecol/" target="_blank" title="Instagram">
			<img src="/contenidos/images/redes/instagram-bikehouse.png" alt="Instagram">
		</a>
					</li>


</ul>
</article>


<article class="formas_pago">
	<article class="lista_logo">

								<img src="/contenidos/images/medios_de_pago/pse.png" alt="Pse">
					


								<img src="/contenidos/images/medios_de_pago/visa.png" alt="Visa">
					


								<img src="/contenidos/images/medios_de_pago/americanexpress.png" alt="americanexpress">
					


			


								<img src="/contenidos/images/medios_de_pago/mastercard.png" alt="mastercard">
					


								<img src="/contenidos/images/medios_de_pago/paypal.png" alt="paypal">
					

	</article>
</article>
</section>

</footer>
<article class="derechos">
    <article class="cont_izquierda">
        <p>Todos los derechos reservados - Bike House  &copy;  2019</p>
    </article>
    <article class="cont_derecha">
        <p>Dise&ntilde;o y Desarrollo <a href="https://www.serviciosparaempresarios.com/" target="_blank">Servicios para Empresarios<img src="/tienda/images/dw.png" alt="dw"></a></p>
    </article>
</article>





<a href="https://api.whatsapp.com/send?phone=573166460707" class="btn_chat" target="_blank">Chatea en l&iacute;nea</a>
<!-- 
<script type="text/javascript" src="../mibew/js/compiled/chat_popup.js">
</script>
          
<script type="text/javascript">
window.onload=function(){
    //Iniciamos el servicio de chat con el id y url que podemos encontrar al generar cÃ³digo.
    //Tener en cuenta que el id y url pueden cambiar, verificar al generar cÃ³digo de botÃ³n
Mibew.ChatPopup.init({"id":"5adf81f76bafbef5","url":"\/mibew\/chat?locale=es","preferIFrame":true,"modSecurity":false,"forceSecure":false,"width":640,"height":480,"resizable":true,"styleLoader":"\/mibew\/chat\/style\/popup"});
//Abrimos la ventana de chat
    //Tener en cuenta que el id puede cambiar, verificar al generar cÃ³digo de botÃ³n
    Mibew.Objects.ChatPopups['5adf81f76bafbef5'].open();
}
</script> -->                                </section>
                        </section>
                </div>
        </body>
</html>

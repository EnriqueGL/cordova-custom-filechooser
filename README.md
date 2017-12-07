# cordova custom filechooser
plugin para poder seleccionar archivos desde android, personalizando que tipo de archivo vas a buscar.
 
Requiere Cordova >= 2.8.0 

Instalar con Cordova CLI
	
	$ cordova plugin add https://github.com/EnriqueGL/cordova-custom-filechooser.git
  
API

	customFileChooser.open(type ,successCallback, failureCallback); 
  type: string
  
  	customFileChooser.open('application/pdf, image/png',function (uri){
      		console.log(uri)
    	}, function(err){
      		console.log(err);
    	});
  
Types: 

	image/jpeg
	audio/mpeg4-generic
	text/html
	audio/mpeg
	audio/aac
	audio/wav
	audio/ogg
	audio/midi
	audio/x-ms-wma
	video/mp4
	video/x-msvideo
	video/x-ms-wmv
	image/png
	image/jpeg
	image/gif
	.xml ->text/xml
	.txt -> text/plain
	.cfg -> text/plain
	.csv -> text/plain
	.conf -> text/plain
	.rc -> text/plain
	.htm -> text/html
	.html -> text/html
	.pdf -> application/pdf
	.apk -> application/vnd.android.package-archive

	Donaciones

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="CSA7RBWMGH26G">
<input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
</form>



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


## Donacion

## Support on Paypal

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CSA7RBWMGH26G)



## Support on Beerpay

[![Beerpay](https://beerpay.io/EnriqueGL/cordova-custom-filechooser/badge.svg?style=beer-square)](https://beerpay.io/EnriqueGL/cordova-custom-filechooser)  [![Beerpay](https://beerpay.io/EnriqueGL/cordova-custom-filechooser/make-wish.svg?style=flat-square)](https://beerpay.io/EnriqueGL/cordova-custom-filechooser?focus=wish)

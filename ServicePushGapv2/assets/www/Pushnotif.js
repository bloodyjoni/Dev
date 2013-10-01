


var PushConf = {
		 addTokenScript : "http://www.proyectored.com.ar/mobile/addtoken.php?token=",
		 deleteTokenScript  : "http://www.proyectored.com.ar/mobile/deletetoken.php?token=",
		 senderID : "447745035223",
		 token : "0" ,

		 initialize : function() {

			this.bindEvents();
		},
		// Bind Event Listeners
		//
		// Bind any events that are required on startup. Common events are:
		// 'load', 'deviceready', 'offline', and 'online'.
		 bindEvents : function() {

			document.addEventListener('deviceready', onDeviceReadyforPush, false);
			//onDeviceReadyforPush();

		}
};




function onDeviceReadyforPush() {
			pushNotification = window.plugins.pushNotification;
			pushRegister();
			// used to unregister the device
			document.addEventListener("backbutton", onBackButton, false);


		}


			
			
function pushRegister(){

	pushNotification.register(successHandler, errorHandler,{"senderID":PushConf.senderID,"ecb":"onNotificationGCM"});

}

function getXMLHttpRequest(){
	var xhr = null;

			xhr = new XMLHttpRequest(); 
		

	return xhr;
}

function  onNotificationGCM(e) {
	switch( e.event )
	{
	case 'registered':
		if ( e.regid.length > 0 )

		{		}

		break;

	case 'message':
		// this is the actual push notification. its format depends on the data model from the push server
		alert('message = '+e.message+' msgcnt = '+e.msgcnt);
		break;

	case 'error':
		alert('GCM error = '+e.msg);
		break;

	default:
		alert('An unknown GCM event has occurred');
	break;
	}
}
function onBackButton(e){

	if (e){
		e.preventDefault();


	}
	else
	{
		navigator.app.backHistory();
	}


}
function errorHandler(error) {
	alert(error);
}
	 function successHandler(e) {


			console.log(result);

		}
		



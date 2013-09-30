var myService = cordova.require('cordova/plugin/myService');
        	var pushNotification = window.plugins.pushNotification;
        	document.addEventListener('deviceready', function() {
				getStatus();
  			}, true);

 			function handleSuccess(data) {
 				updateView(data);
 			}
 			
 			function handleError(data) {
				alert("Error: " + data.ErrorMessage);
 				alert(JSON.stringify(data));
				updateView(data);
 			}

			/*
			 * Button Handlers
			 */ 			
 			function getStatus() {
 				myService.getStatus(	function(r){handleSuccess(r)},
 										function(e){handleError(e)});
 			};
 			
 			function startService() {
 				
				myService.startService(	function(r){handleSuccess(r)},
										function(e){handleError(e)});
				
 			}

 			function stopService() {
	 			myService.stopService(	function(r){handleSuccess(r)},
 										function(e){handleError(e)});
			}

 			function enableTimer() {
				myService.enableTimer(	60000,
										function(r){handleSuccess(r)},
										function(e){handleError(e)});
 			}

 			function disableTimer() {
	 			myService.disableTimer(	function(r){handleSuccess(r)},
 										function(e){handleError(e)});
			};

 			function registerForBootStart() {
				myService.registerForBootStart(	function(r){handleSuccess(r)},
												function(e){handleError(e)});
 			}

 			function deregisterForBootStart() {
				myService.deregisterForBootStart(	function(r){handleSuccess(r)},
													function(e){handleError(e)});
 			}

 			function setConfig() {
 				 				
 				var helloToTxt = document.getElementById("helloToTxt");
 				var helloToString = helloToTxt.value;
 				var config = PushConf;
				myService.setConfiguration(	config,
											function(r){handleSuccess(r)},
											function(e){handleError(e)});
 			}

			/*
			 * View logic
			 */
 			function updateView(data) {
				var serviceBtn = document.getElementById("toggleService");
				var timerBtn = document.getElementById("toggleTimer");
				var bootBtn = document.getElementById("toggleBoot");
				var updateBtn = document.getElementById("updateBtn");
				var refreshBtn = document.getElementById("refreshBtn");

				var serviceStatus = document.getElementById("serviceStatus");
				var timerStatus = document.getElementById("timerStatus");
				var bootStatus = document.getElementById("bootStatus");

				serviceBtn.disabled = false;
				if (data.ServiceRunning) {
					serviceStatus.innerHTML = "Running";
					serviceBtn.onclick = stopService;
					timerBtn.disabled = false;
					if (data.TimerEnabled) {
						timerStatus.innerHTML = "Enabled";
						timerBtn.onclick = disableTimer;
					} else {
						timerStatus.innerHTML = "Disabled";
						timerBtn.onclick = enableTimer;
					} 

					updateBtn.disabled = false;
					updateBtn.onclick = setConfig;

					refreshBtn.disabled = false;
					refreshBtn.onclick = getStatus;

				} else { 
					serviceStatus.innerHTML = "Not running";
					serviceBtn.onclick = startService;
					timerBtn.disabled = true;
					timerEnabled = false; 

					updateBtn.disabled = false;
					refreshBtn.disabled = false;
				} 

				bootBtn.disabled = false;
				if (data.RegisteredForBootStart) {
					bootStatus.innerHTML = "Registered";
					bootBtn.onclick = deregisterForBootStart;
				} else {
					bootStatus.innerHTML = "Not registered";
					bootBtn.onclick = registerForBootStart;
				}

				if (data.Configuration != null)
				{
					try {
						var helloToTxt = document.getElementById("helloToTxt");
						helloToTxt.value = data.Configuration.HelloTo;
					} catch (err) {
					}
				}

				if (data.LatestResult != null)
				{
					try {
						var resultMessage = document.getElementById("resultMessage");
						resultMessage.innerHTML = data.LatestResult.Message;
 					} catch (err) {
 					}
				}
 			}

		

   

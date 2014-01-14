/*var GeneralConf={
	rootURL: "http://www.proyectored.com.ar/mobile/",
	appContentPath: 'file:///data/data/com.elovillo.cytype/files/content'
}*/
/* Para que las configuraciones sean permanentes y adaptadas a cualquier disposivo se usa el LocalStroage de phonegap
* que permite guadar informaciones de la forma key value
*/
function getLocalConfig(strKey){
	return window.localStorage.getItem(strKey);
}
function setLocalConfig(strKey,strValue){
	return window.localStorage.setItem(strKey,strValue);
}
document.addEventListener("deviceready",function (){
	firstLocalConfig();}, false);
function firstLocalConfig(){
	if(getLocalConfig("rootURL")==undefined)
		setLocalConfig("rootURL","http://www.proyectored.com.ar/mobile/");
	if(getLocalConfig("appContentPath")==undefined)
		setLocalConfig("appContentPath","file://.");
	if(getLocalConfig("mailContact")==undefined)
		setLocalConfig("mailContact","diguet.jonathan@gmail.com");
	
}
/*
 * Parte correspondiente a la lista en la pagina PoliticasPublicas html 
 */
function getDBPPublicasList(tx){
	tx.executeSql('Select id,Titulo,img from PPublicasCategorias', [], querySuccessPPublicas, errorCB);


}

//modificate here to get the full item results
function querySuccessPPublicas(tx, results) {

	var len = results.rows.length;
	console.log("Tabla PPublicasCategorias: " + len + " filas encontradas.");
	$('#listPPCategorias').empty();
	for (var i=0; i<len; i++){
		//	alert(results.rows.item(i).img);
		$('#listPPCategorias').append($('<li/>', { 
			'data-id':results.rows.item(i).id//here appending `<li>`
		}).append(function(){
			if(results.rows.item(i).img=='true'){
				return $('<img/>',{
					'src': getLocalConfig("appContentPath")+'/images/PPublicas/'+results.rows.item(i).id+'.jpg',
					'class':'thumb'
				})}})
				.append($('<a/>',{    //here appending `<a>` into `<li>`
					'href': 'javascript:goToFicha('+results.rows.item(i).id+',"PPublicas")',
					'data-transition': 'slide',
					'text': results.rows.item(i).Titulo
				})));

		$('#listPPCategorias').listview('refresh');
		console.log($('#listPPCategorias').html());
	}
}
function getPPublicasList(){ 
	db.transaction(getDBPPublicasList , errorCB);
}
/*
 * Parte Actualisacion
 */
/*
 * Parte del codigo responsable de la actualisacion de la base PPublicas
 * 
 */
function insertPPublicasDB(tx,obj){
	for(var i = 0; typeof(obj[i])!= "undefined"; i++){
		tx.executeSql('INSERT INTO PPublicasCategoria (id, Titulo, text, FechaIni, FechaFin) VALUES ("'
				+ obj[i].id
				+ '","'
				+ obj[i].Titulo
				+ '","'
				+ obj[i].text
				+ '","'
				+ obj[i].FechaIni
				+ '","'
				+ obj[i].FechaFin
				+ '")');
	}

}
function updatePPublicasDB(data){
	var obj = JSON.parse(data);
	//alert(obj);
	//alert(obj[i]);
	/*alert("INSERT INTO Eventos (id, Titulo, Desc, FechaIni, FechaFin) VALUES ('"
														+ obj[i].id
														+ "','"
														+ obj[i].Titulo
														+ "','"
														+ obj[i].text
														+ "','"
														+ obj[i].FechaIni
														+ "','"
														+ obj[i].FechaFin
														+ "')");*/
	var type='PPublicas';
	db.transaction(function(tx){insertPPublicasDB(tx,obj)},function (err){errorUpdate(err,"PPublicas")},function (){successUpdate("PPublicas");}); 

}

function updatePPublicas(diferenceStr){
	console.log("inside update PPublicas");
	//if(typeof(diferenceStr)==='undefined') diferenceStr = "+0 day";
	$.ajax({
		type : 'GET', // Le type de ma requete
		url : 'http://www.proyectored.com.ar/mobile/UPDTPPublicas.php', // L'url vers laquelle la requete sera envoyee
		data : {
			currid:  getCurrentDBId('PPublicas'),
			minid: getMinDBId('PPublicas'),
			diference: diferenceStr,
		},
		success : function(data, textStatus, jqXHR){
			//alert(data);
			updatePPublicasDB(data);
			updateExtraPPublicas();
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('Problema de connexion' + textStatus+ " : " + errorThrown);
		}
	});
}
/*
 * Parte del codigo responsable de la actualisacion de los Extras de la base PPublicas
 * 
 */
function insertExtraPPublicasDB(tx,obj){
	//for(var j=0; typeof(obj[j])!= "undefined";j++){
	//alert("inside  insert Extra PPublicas");
	for(var i = 0; i<obj.length; i++){
		for(var j=0;j<obj[i].length;j++){
		//	alert(obj[i][j]);
		//	alert(obj[i][j].externalId  + obj[i][j].key +obj[i][j].value)
			if(obj[i][j].externalId && obj[i][j].key && obj[i][j].value){	
				tx.executeSql('INSERT INTO ExtraPPublicas (externalId, key, value) VALUES ("'
						+ obj[i][j].externalId
						+ '","'
						+ obj[i][j].key
						+ '","'
						+ obj[i][j].value
						+ '")');
				if(obj[i][j].key=="img"){ 
					enableImg(obj[i][j].externalId,"PPublicas");
					downloadImg(obj[i][j].externalId,"PPublicas");
				}
			}
		}
	}
	//	}
}

function updateExtraPPublicasDB(data){
	var obj = JSON.parse(data);
	//alert(obj);
	//alert(obj[i]);
	/*alert("INSERT INTO Eventos (id, Titulo, Desc, FechaIni, FechaFin) VALUES ('"
													+ obj[i].id
													+ "','"
													+ obj[i].Titulo
													+ "','"
													+ obj[i].text
													+ "','"
													+ obj[i].FechaIni
													+ "','"
													+ obj[i].FechaFin
													+ "')");*/
	db.transaction(function(tx){insertExtraPPublicasDB(tx,obj);},function (err){errorUpdate(err,"ExtrasPPublicas")},function (){successUpdate("ExtrasPPublicas");});
}

function updateExtraPPublicas() {
	//if(typeof(diferenceStr)==='undefined') diferenceStr = "+0 day";
	getPPublicasIds();
}
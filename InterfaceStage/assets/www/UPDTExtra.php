<?php
include('db_abstract_model.php');
$currid=$_GET['currid'];
$minid=$_GET['minid'];
$diference=$_GET['diference'];

class DbUser extends DBAbstractModel{

public function consultarFuturo($currid=0,$minid=0,$diference="+ 0 Day")
{

	//echo date("Y-m-d");
	$dateIni=date("Y-m-d");
	$date=strtotime(date("Y-m-d", strtotime($dateIni)) . $diference);
	//echo 'SELECT * FROM Eventos where FechaFin>='.date("Y-m-d",$date);
        $this->query='SELECT * FROM Eventos where id>='.$currid.' AND FechaFin>="'.date("Y-m-d").'"';
	$this->consultar();
}
public function consultarHistorico($currid,$minid,$diference="+ 0 Day")
{
	//echo date("Y-m-d");
	$dateIni=date("Y-m-d");
	$date=strtotime(date("Y-m-d", strtotime($dateIni)) . $diference);
	//echo 'SELECT * FROM Eventos where FechaFin>="'.date("Y-m-d",$date).' AND FechaFin<="'.date("Y-m-d").'"';
        $this->query='SELECT * FROM Eventos where FechaFin>="'.date("Y-m-d",$date).'" AND FechaFin<="'.date("Y-m-d").'"';
	$this->consultar();
}
};

function getTokenDB($currid,$minid,$diference){
try
{

$db=new DbUser();
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
try
{
	if($currid==null) $currid=0;
	if($minid==null) $minid=0;
	if($diference==null) {
	$diference=" + 0 Day";
	$db->consultarFuturo($currid,$minid,$diference); 
	}
	else{
	$db->consultarHistorico($currid,$minid,$diference);
	}
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
	
	print_r (json_encode($db->rows));

}
getTokenDB($currid,$minid,$diference);


?>

<?php
/*
$data[] = $_POST['data'];

$inp = file_get_contents('results.json');
$tempArray = json_decode($inp);
array_push($tempArray, $data);
$jsonData = json_encode($tempArray);
file_put_contents('results.json', $jsonData);*/

//$orderTheme = "33";

$response = array(
	"theme" =>  htmlspecialchars($_POST['theme']),
	"themeText" =>  htmlspecialchars($_POST['themeText']),
	"projectName" =>  htmlspecialchars($_POST['projectName']),
	"orderUrgency" =>  htmlspecialchars($_POST['orderUrgency']),
	"test" =>  33,
);


echo json_encode($response);
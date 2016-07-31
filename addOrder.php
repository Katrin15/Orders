<?php

$receivedData = array (

	"theme" => htmlspecialchars($_POST['theme']),
    "themeText" => htmlspecialchars($_POST['themeText']),
    "projectName" => htmlspecialchars($_POST['projectName']),
    "orderUrgency" => htmlspecialchars($_POST['orderUrgency'])

);

$inp = file_get_contents('orders.json');
$tempArray = json_decode($inp);
array_unshift($tempArray, $receivedData);
$jsonData = json_encode($tempArray);
file_put_contents('orders.json', $jsonData);

//$orderTheme = "33";

$response = array(
	"theme" =>  htmlspecialchars($_POST['theme']),
	"themeText" =>  htmlspecialchars($_POST['themeText']),
	"projectName" =>  htmlspecialchars($_POST['projectName']),
	"orderUrgency" =>  htmlspecialchars($_POST['orderUrgency']),
	"test" =>  33,
);


echo json_encode($response);
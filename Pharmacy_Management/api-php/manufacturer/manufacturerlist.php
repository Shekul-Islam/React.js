<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST,Delete');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','pharmacy_management');
$data=$con->query('select * from manufacturer order by id desc')->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);
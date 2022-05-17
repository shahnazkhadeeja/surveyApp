<?php
include "dBase.php";
$dbase= new dBase();
$tcon=$dbase->con;


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$final_out = array('status' => 'fail');

$error = "";
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {




// Extract the data.
$recvd = json_decode($postdata);
$request = json_decode($recvd->send);

$stage_one_data=$request->stagedata1;
$sta=$request->stagedata2;
$stage_three_data=$request->stagedata3;
$stage_four_data=$request->stagedata4;
$stage_five_data=$request->stagedata5;

// stage1
// $id= mysqli_real_escape_string($tcon, $stage_one_data->id);
$username = mysqli_real_escape_string($tcon, $stage_one_data->username);
$email= mysqli_real_escape_string($tcon, $stage_one_data->email);
$phone1= mysqli_real_escape_string($tcon, $stage_one_data->phone1);
$phone2= mysqli_real_escape_string($tcon, $stage_one_data->phone2);
$q1= mysqli_real_escape_string($tcon, $sta->q1);

$q2= mysqli_real_escape_string($tcon, $stage_three_data->q2);
$q3= mysqli_real_escape_string($tcon, $stage_four_data->q3);
$q4= mysqli_real_escape_string($tcon, $stage_five_data->q4);



$dbase->execute("INSERT INTO `survey_data`( `username`, `email`, `phone1`, `phone2`,`q1`, `q2`, `q3`, `q4`) VALUES ('$username','$email','$phone1','$phone2','$q1','$q2','$q3','$q4')");
                   $response = array('status' => 'success', 'message' => 'data saved');
}
                   echo json_encode($response);
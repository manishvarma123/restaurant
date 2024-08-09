<?php
    $dbhost="localhost";
    $user="root";
    $password="";
    $dbname="restaurant";

    $conn = mysqli_connect($dbhost,$user,$password,$dbname);
    if($conn){
        echo "Connection Successful";
    }
    else{
        echo "Failed";
    }


?>

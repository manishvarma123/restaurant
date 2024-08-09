<?php
    
        header('Access-Control-Allow-Origin: *');
        include("conn.php");

        $email = $_POST['email'];
        $password = $_POST['password'];
        $cpassword = $_POST['cpassword'];

        $insert = mysqli_query($conn, "INSERT INTO `signup list`(`Sr No`, `Email`, `Password`, `Confirm Password`, `Time`) VALUES ('','$email','$password','$cpassword','')");

        if($insert){
            echo "<h2>Insert Form Successfully</h2>";
            header('location:Login.js');
        }
        else{
            echo "<h2>Form Failed</h2>";
        }
    
?>
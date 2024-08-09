<?php

    if(isset($_POST['login'])){
        include("conn.php");
        $email = $_POST["email"];
        $password = $_POST["password"];

        $login = "SELECT `Sr No`, `Email`, `Password`, `Confirm Password`, `Time` FROM `signup list` WHERE Email='$email' and Password='$password'";

        $sql = mysqli_query($conn,$login);

        if(mysqli_num_rows($sql)>0){
            while($res=mysqli_fetch_array($sql)){
                session_start();
                $_SESSION['id'] = $res['Id'];
                $_SESSION['email']=$res['Email'];
                $_SESSION['password']=$res['Password'];

                header("location:http://localhost/manish/restaurant/src/Component/Home.js")
            }
        }
        else{
            echo "<script>
            alert('email & password does not matched');
            </script>";
            header('location:');
        }
    }

?>
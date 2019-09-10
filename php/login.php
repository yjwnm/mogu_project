<?php
require 'conn.php';
if(isset($_POST['$unames']) && isset($_POST['$pword'])){
    $yhname=$_POST['$unames'];
    $code=$_POST['$pword'];
    $result=$conn->query("select * from usertable where username='$yhname' and password='$code'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}
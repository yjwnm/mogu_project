<?php
require 'conn.php';
//检测用户名重名
if(isset($_GET['checkname'])){
    $names=$_GET['checkname'];
    $result=$conn->query("select * from usertable where username='$names'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}
//点击submit按钮将前端的用户注册信息提交给后端
if(isset($_POST['submit'])){
    $name=$_POST['username'];
    $pass=$_POST['password'];
    $conn->query("insert usertable values(null,'$name','$pass',NOW())");
    header('location:http://localhost/js1907/mogu/src/login.html');
}
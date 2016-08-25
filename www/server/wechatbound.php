<?php
	$servername = "localhost";
        $username = "root";
        $password = "0d3a546dc7";
	    //Create Connection
	    $db = mysqli_connect($servername, $username, $password);
	    $db_selected = mysqli_select_db($db, 'prt');
	    mysqli_query($db,"set names utf8");

	    //Check connection
		if(!$db){
			die("Connection failed: " . mysqli_connect_error($db));
		}
		$email = $_GET["email"];
		$openId = $_GET["openid"];
		$icon = $_GET["headimgurl"];

		$query = "UPDATE userDetail SET wechatopenId='".$openId."', icon='".$icon."' WHERE email='".$email."'";
		$result = mysqli_query($db, $query);
		// echo $result;
		mysqli_close($db);
		echo $query;
?>
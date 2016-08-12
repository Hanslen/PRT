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
		$password = $_GET["password"];

		$query = "UPDATE userDetail SET password=".$password."WHERE email=".$email;
		$result = mysqli_query($db, $query);
		echo $result;
		mysqli_close($db);
		?>
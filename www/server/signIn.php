<?php

	    $servername = "localhost";
      $username = "root";
      $password = "";
	    //Create Connection
	    $db = mysqli_connect($servername, $username, $password);
	    $db_selected = mysqli_select_db($db, 'prt');
	    mysqli_query($db,"set names utf8");

	    //Check connection
		if(!$db){
			die("Connection failed: " . mysqli_connect_error($db));
		}
		$email = $_POST["email"];
		$password = $_POST["password"];

		//check is correct or not
		$query = "SELECT * FROM userDetail";
		$success = 0;
		if($result = mysqli_query($db, $query)){
			while($row = mysqli_fetch_array($result, MYSQL_NUM)){
				if($row[4] == $email && $row[2] == $password){
					echo $row;

				}
			}
		}
		else{
			print "Error - the query could not be executed" . mysqli_error($db) . " <br/>";
		}
		mysqli_close($db);
		?>

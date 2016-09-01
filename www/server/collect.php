<?php 

		$servername = "localhost";
        $username = "root";
        $password = "0d3a546dc7";
	    //Create Connection
	    $db = mysqli_connect($servername, $username, $password);
	    // $db_selected = mysqli_select_db($db, 'prt');
	    mysqli_query($db,"set names utf8");

	    //Check connection
		if(!$db){
			die("Connection failed: " . mysqli_connect_error($db));
		}
		$email = $_GET["email"];
		$categoryId = $_GET["categoryId"];
		$articleId = $_GET["articleId"];
					
		$query = "INSERT INTO prt.articlecollections (email, categoryId, articleId) VALUES ('" . $email ."','" . $categoryId ."','" . $articleId . "')";
		if (!mysqli_query($db, $query)){
			echo "Failed";
        	die('Error: ' . mysqli_error($db));
      	}
      	else{
      		echo "1";
      	}
		mysqli_close($db);
		?>
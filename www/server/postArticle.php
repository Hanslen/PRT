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
		$author = $_GET["author"];
		$categoryId = $_GET["categoryId"];
		$title = $_GET["title"];
		$content = $_GET["content"];
		$time = date("Y/m/d");
					
		$query = "INSERT INTO prt.articles (categoryId, title, author, postDate, content) VALUES ('" . $categoryId ."','" . $title ."','" . $author ."','" . $time ."','" . $content . "')";
		if (!mysqli_query($db, $query)){
			echo "Failed";
        	die('Error: ' . mysqli_error($db));
      	}
      	else{
      		echo "1";
      	}
		mysqli_close($db);
		?>
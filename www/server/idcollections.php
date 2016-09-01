<?php 
		$servername = "localhost";
        $username = "root";
        $password = "0d3a546dc7";
	    //Create Connection
	    $db = mysqli_connect($servername, $username, $password);
	    $db_selected = mysqli_select_db($db, 'prt');
	    mysqli_query($db,"set names utf8");

	 //    //Check connection
		if(!$db){
			die("Connection failed: " . mysqli_connect_error($db));
		}
		$articleId = $_GET["articleId"];
		// echo $categoryId;
		//check is correct or not
		$query = "SELECT * FROM articles WHERE id='".$articleId."'";
		$final = array();
		if($result = mysqli_query($db, $query)){
			while($row = mysqli_fetch_array($result, MYSQL_NUM)){
					$result2["articleId"] = $row[0];
					$result2["categoryId"] = $row[1];
					$result2["title"] = $row[2];
					$result2["author"] = $row[3];
					$result2["postDate"] = $row[4];
					$result2["commentnum"] = $row[5];
					$result2["content"] = $row[6];
					$result2["image"] = $row[7];
					array_push($final, $result2);
					// echo json_encode($result2, JSON_UNESCAPED_UNICODE);
			}
			echo json_encode($final, JSON_UNESCAPED_UNICODE);
		}
		else{
			print "Error - the query could not be executed" . mysqli_error($db) . " <br/>";
		}
		mysqli_close($db);
		?>
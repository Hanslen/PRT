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
		// echo $categoryId;
		//check is correct or not
		$query = "SELECT * FROM userDetail";
		$final = array();
		if($result = mysqli_query($db, $query)){
			while($row = mysqli_fetch_array($result, MYSQL_NUM)){
					$result2["userId"] = $row[0];
					$result2["username"] = $row[1];
					$result2["password"] = $row[2];
					$result2["position"] = $row[3];
					$result2["email"] = $row[4];
					$result2["studentId"] = $row[5];
					$result2["major"] = $row[6];
					$result2["tele"] = $row[7];
					$result2["birthday"] = $row[8];
					$result2["wechatId"] = $row[9];
					$result2["icon"] = $row[10];
					
					
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
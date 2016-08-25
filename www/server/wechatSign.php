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
		$openid = $_GET["openid"];

		//check is correct or not
		$query = "SELECT * FROM userDetail";
		if($result = mysqli_query($db, $query)){
			while($row = mysqli_fetch_array($result, MYSQL_NUM)){
				if($row[11] == $openid){
					
					// echo "success";
					$result2["username"] = $row[1];
					$result2["password"] = $row[2];
					$result2["position"] = $row[3];
					$result2["email"] = $row[4];
					$result2["icon"] = $row[10];
					$result2["wechatopenId"] = $row[11];
					$result2["web_designer"] = $row[12];
					$result2["proj_accom"] = $row[13];
					$result2["team_accom"] = $row[14];
					$result2["book5"] = $row[15];
					$result2["video"] = $row[16];
					$result2["writing"] = $row[17];
					$result2["newroute"] = $row[18];
					$result2["social"] = $row[19];
					$result2["organize"] = $row[20];
					$result2["Captain"] = $row[21];
					$result2["Minster"] = $row[22];
					$result2["PACoor"] = $row[23];
					$result2["ViceCaptain"] = $row[24];
					$result2["AE"] = $row[25];
					$result2["DW"] = $row[26];
					$result2["LR"] = $row[27];
					$result2["PS"] = $row[28];
					$result2["AI"] = $row[29];
					$result2["FW"] = $row[30];
					$result2["PR"] = $row[31];
					// print_r($result2);
					echo json_encode($result2, JSON_UNESCAPED_UNICODE);
					// echo "<script type=text/javascript>";   
					// echo "window.location.href=\"../index.php\"";   
					// echo "</script>";

				}
			}

		}
		else{
			print "Error - the query could not be executed" . mysqli_error($db) . " <br/>";
		}
		mysqli_close($db);
		?>
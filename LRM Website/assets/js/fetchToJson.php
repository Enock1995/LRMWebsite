<?php
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'mydb';


$conn = new mysqli($db_host, $db_username, $db_password, $db_name);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$current_date = date('Y-m-d');


$sql = "SELECT * FROM admindashboard WHERE date >= ? ORDER BY date ASC LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $current_date);
$stmt->execute();
$result = $stmt->get_result();


if ($result->num_rows > 0) {
 
    $event = $result->fetch_assoc();


    $json_data = json_encode($event);

   
    echo $json_data;
} else {
    echo "No upcoming events found!";
}

$stmt->close();
$conn->close();

?>
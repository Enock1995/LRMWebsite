<?php 

//configuration
$dbhost = 'sql8.freesqldatabase.com';
$dbuser = 'sql8760381';
$dbpass = 'nbpM5mPJC6';
$dbname = 'sql8760381';

//file upload config
$upload_dir = 'pictures/';
$allowed_file_types = array('jpg', 'jpeg', 'png', 'webp');

//connect to db
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//check connection
if ($conn->connect_error) {
    die("connection failed:" . $conn->connect_error);
}

//handle file upload
if($_FILES['image'] ['error'] ==0) {
    $file_name = basename($_FILES['image'] ['name']);
    $file_type = pathinfo($file_name, PATHINFO_EXTENSION);
    $file_path = $upload_dir . $file_name;

    //check if file type is allowed
    if(in_array($file_type, $allowed_file_types)) {

        //move uploaded file to upload directory
        if(move_uploaded_file($_FILES['image'] ['tmp_name'], $file_path)) {

            //insert data into db table
            $sql = "INSERT INTO admindashboard ( bgnames, date, venue_first, venue_second, file_name, file_path) VALUES (?, ?, ?, ?, ?, ?)";

            $stmt = $conn->prepare($sql);
            if(!$stmt) {
                echo "Prepare sql failed: " . $conn->error;
            }
            $stmt->bind_param("ssssss", $_POST['bgnames'], $_POST['date'], $_POST['venue_first'], $_POST['venue_second'], $file_name, $file_path);
            $stmt->execute();

            echo "File uploaded and data inserted successfully.";
        }
        else{
            echo "Error uploading files: ";
        }
    }
    else{
        echo "File type not allowed: ";
    }
}
else{
    echo "Error uploading file: ";
}

//close db connection
$conn->close();

?>

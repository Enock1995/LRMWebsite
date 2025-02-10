<?php
$upload_dir = 'pictures/';
$allowed_file_types = array('jpg', 'jpeg', 'png', 'webp');

if ($_FILES['image']['error'] == 0) {
    $file_name = basename($_FILES['image']['name']);
    $file_type = pathinfo($file_name, PATHINFO_EXTENSION);
    $file_path = $upload_dir . $file_name;

    if (in_array($file_type, $allowed_file_types)) {
        if (move_uploaded_file($_FILES['image']['tmp_name'], $file_path)) {
            $data = array(
                'bgnames' => $_POST['bgnames'],
                'date' => $_POST['date'],
                'venue_first' => $_POST['venue_first'],
                'venue_second' => $_POST['venue_second'],
                'file_name' => $file_name,
                'file_path' => $file_path
            );

            $json_file = 'weddingsData.json';
            $existing_data = file_exists($json_file) ? json_decode(file_get_contents($json_file), true) : array();
            $existing_data[] = $data;
            file_put_contents($json_file, json_encode($existing_data, JSON_PRETTY_PRINT));

            echo "File uploaded and data saved successfully.";
        } else {
            echo "Error uploading files: ";
        }
    } else {
        echo "File type not allowed: ";
    }
} else {
    echo "Error uploading file: ";
}
?>

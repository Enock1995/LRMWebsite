<?php
$file_path = "fin.json";
$json_data = file_get_contents($file_path);
$data = json_decode($json_data, true);
echo json_encode($data);
?>

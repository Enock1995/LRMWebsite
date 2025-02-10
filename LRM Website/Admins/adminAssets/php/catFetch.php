<?php
$file_path = "data.json";
$json_data = file_get_contents($file_path);
$data = json_decode($json_data, true);

$js_file_path = "data.js";
$js_code = "var development = '" . $data["development"] . "';";

file_put_contents($js_file_path, $js_code);

echo "JavaScript file updated with new data";
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $textarea_data = $_POST["development"];

  // Convert the textarea data to JSON format
  $json_data = json_encode(array("development" => $textarea_data));

  // Upload the JSON data to a file
  $file_path = "dev.json";
  file_put_contents($file_path, $json_data);

  echo "Data saved to $file_path successifully.";
}
?>
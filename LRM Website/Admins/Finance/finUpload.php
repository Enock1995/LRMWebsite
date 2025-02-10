<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $textarea_data = $_POST["finance"];

  // Convert the textarea data to JSON format
  $json_data = json_encode(array("finance" => $textarea_data));

  // Upload the JSON data to a file
  $file_path = "fin.json";
  file_put_contents($file_path, $json_data);

  echo "Data saved to $file_path successifully.";
}
?>
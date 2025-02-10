
<?php
$json_file = 'weddingsData.json';
$existing_data = file_exists($json_file) ? json_decode(file_get_contents($json_file), true) : array();

$current_date = date('Y-m-d');
$upcoming_events = array();

foreach ($existing_data as $event) {
    if ($event['date'] >= $current_date) {
        $upcoming_events[] = $event;
    }
}

if (!empty($upcoming_events)) {
    usort($upcoming_events, function($a, $b) {
        return strcmp($a['date'], $b['date']);
    });

    $next_event = $upcoming_events[0];
    echo json_encode($next_event, JSON_PRETTY_PRINT);
} else {
    echo "No upcoming events found!";
}
?>
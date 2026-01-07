<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

require 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->full_name) && !empty($data->email) && !empty($data->password)) {
        // Check if email exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$data->email]);
        if ($stmt->rowCount() > 0) {
            echo json_encode(["message" => "Email already registered"]);
            exit;
        }

        // Hash password
        $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

        // Insert user into database
        $stmt = $conn->prepare("INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)");
        if ($stmt->execute([$data->full_name, $data->email, $hashed_password])) {
            echo json_encode(["message" => "Registration successful"]);
        } else {
            echo json_encode(["message" => "Registration failed"]);
        }
    } else {
        echo json_encode(["message" => "All fields are required"]);
    }
}
?>

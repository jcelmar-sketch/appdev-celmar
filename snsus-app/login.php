<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->email) && !empty($data->password)) {
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$data->email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($data->password, $user["password"])) {
            session_start();
            $_SESSION["user_id"] = $user["id"];
            echo json_encode(["message" => "Login successful", "user" => $user]);
        } else {
            echo json_encode(["message" => "Invalid email or password"]);
        }
    } else {
        echo json_encode(["message" => "Email and password required"]);
    }
}
?>

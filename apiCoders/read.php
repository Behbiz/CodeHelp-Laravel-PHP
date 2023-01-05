<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../class/coders.php';
    $database = new Database();
    $db = $database->getConnection();
    $items = new Coders($db);
    $stmt = $items->getCoders();
    $itemCount = $stmt->rowCount();
    
    if($itemCount > 0){
        $CodersArr = array();
        $CodersArr["body"] = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "coderName" => $coderName,
            );
            array_push($CodersArr["body"], $e);
        }
        echo json_encode($CodersArr);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>
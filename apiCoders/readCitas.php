<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../class/citas.php';
    $database = new Database();
    $db = $database->getConnection();
    $items = new Citas($db);
    $stmt = $items->getCitas();
    $itemCount = $stmt->rowCount();
    
    if($itemCount > 0){
        $CitasArr = array();
        $CitasArr["body"] = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "name" => $name,
                "date" => $date,
                "theme" => $theme,
            );
            array_push($CitasArr["body"], $e);
        }
        echo json_encode($CitasArr);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
?>
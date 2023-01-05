<?php
    class Coders{
        // Connection
        private $conn;
        // Table
        private $db_table = "Coders";
        // Columns
        public $id;
        public $coderName;
        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }
        // GET ALL
        public function getCoders(){
            $sqlQuery = "SELECT id, coderName FROM " . $this->db_table . "";
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->execute();
            return $consulta;
        }
        // CREATE
        public function createCoders(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        coderName = :coderName";
        
            $consulta = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->coderName=htmlspecialchars(strip_tags($this->coderName));

        
            // bind data
            $consulta->bindParam(":coderName", $this->coderName);

        
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // READ single
        public function getSingleCoders(){
            $sqlQuery = "SELECT
                        id, 
                        coderName, 

                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->bindParam(1, $this->id);
            $consulta->execute();
            $dataRow = $consulta->fetch(PDO::FETCH_ASSOC);
            
            $this->coderName = $dataRow['coderName'];
           
        }        
        // UPDATE
        public function updateCoders(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        coderName = :coderName, 
                    WHERE 
                        id = :id";
        
            $consulta = $this->conn->prepare($sqlQuery);
        
            $this->coderName=htmlspecialchars(strip_tags($this->coderName));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $consulta->bindParam(":coderName", $this->coderName);
            $consulta->bindParam(":id", $this->id);
        
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteCoders(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $consulta = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $consulta->bindParam(1, $this->id);
        
            if($consulta->execute()){
                return true;
            }
            return false;
        }
    }
?>
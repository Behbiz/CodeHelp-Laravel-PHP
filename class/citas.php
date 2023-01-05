<?php
    class Citas{
        // Connection
        private $conn;
        // Table
        private $db_table = "Citas";
        // Columns
        public $id;
        public $name;
        public $date;
        public $theme;
        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }
        // GET ALL
        public function getCitas(){
            $sqlQuery = "SELECT id, name, date, theme  FROM " . $this->db_table . "";
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->execute();
            return $consulta;
        }
        // CREATE
        public function createCitas(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        name = :name,
                        date = :date,
                        theme = :theme";
        
            $consulta = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->date=htmlspecialchars(strip_tags($this->date));
            $this->theme=htmlspecialchars(strip_tags($this->theme));

        
            // bind data
            $consulta->bindParam(":name", $this->name);
            $consulta->bindParam(":date", $this->date);
            $consulta->bindParam(":theme", $this->theme);

        
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // READ single
        public function getSingleCitas(){
            $sqlQuery = "SELECT
                        id, 
                        name, 
                        date,
                        theme,

                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";
            $consulta = $this->conn->prepare($sqlQuery);
            $consulta->bindParam(1, $this->id);
            $consulta->execute();
            $dataRow = $consulta->fetch(PDO::FETCH_ASSOC);
            
            $this->name = $dataRow['name'];
            $this->date = $dataRow['date'];
            $this->theme = $dataRow['theme'];
           
        }        
        // UPDATE
        public function updateCitas(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        name = :name, 
                        date = :date, 
                        theme = :theme, 
                    WHERE 
                        id = :id";
        
            $consulta = $this->conn->prepare($sqlQuery);
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $consulta->bindParam(":name", $this->name);
            $consulta->bindParam(":date", $this->date);
            $consulta->bindParam(":theme", $this->theme);
            $consulta->bindParam(":id", $this->id);
        
            if($consulta->execute()){
               return true;
            }
            return false;
        }
        // DELETE
        function deleteCitas(){
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
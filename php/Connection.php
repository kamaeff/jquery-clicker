<?php

class Connection
{
    private $host;
    private $port;
    private $database;
    private $user;
    private $password;
    private $connection;

    public function __construct()
    {
        $config = parse_ini_file(__DIR__ . '/database.ini');
        $this->host = $config['host'];
        $this->port = $config['port'];
        $this->database = $config['database'];
        $this->user = $config['user'];
        $this->password = $config['password'];
    }

    public function connect()
    {
        $dsn = "pgsql:host=$this->host;port=$this->port;dbname=$this->database;";
        try {
            $this->connection = new PDO($dsn, $this->user, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $this->connection;
        } catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
            return null;
        }
    }
}

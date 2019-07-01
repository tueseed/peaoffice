<?php

  ini_set('display_errors', 1);
	error_reporting(~0);

  /*$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

  $server = $url["host"];
  $username = $url["user"];
  $password = $url["pass"];
  $db = substr($url["path"], 1);*/

  $server = 'us-cdbr-iron-east-02.cleardb.net';
  $username = 'bdccc00c61bf0c';
  $password = 'f228f0e1';
  $db = 'heroku_879726484b63350';

  $conn = new mysqli($server, $username, $password, $db);

	// $conn = mysqli_connect($serverName, $userName, $userPassword, $dbName, $db_port) or die('Unable to establish a CRM_BU connection');
  $conn->set_charset("utf8");

  
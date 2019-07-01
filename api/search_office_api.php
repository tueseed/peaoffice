<?php
    require('../utils/db_connector.php');

    $keyword = $_POST["keyword"];

    $sql_search = "SELECT * FROM tbl_pea_office WHERE pea_name LIKE '%$keyword%'";
    $query_search = mysqli_query($conn,$sql_search);
    $obj_result = mysqli_fetch_all($query_search,MYSQLI_ASSOC);

    echo json_encode($obj_result);


?>
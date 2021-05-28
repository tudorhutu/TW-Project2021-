<?php
include 'db_connection.php';
$conn = OpenCon();
if($conn != NULL)
	echo "Connection Success";
else echo 'ERROR: '. mysqli_error($conn);

if(isset($_GET['id'])){
  $id = mysqli_real_escape_string($conn, $_GET['id']);
  $query = "SELECT link FROM greeting_card_gifs WHERE id=$id";

  $result = mysqli_query($conn, $query);
  $link = mysqli_fetch_all($result, MYSQLI_ASSOC);
  echo json_encode($link);
}

CloseCon($conn);
?>
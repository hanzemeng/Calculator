<!DOCTYPE html>
<html>
<body>
<?php
include("connec.php");
$num = $_POST["try"];
$sql = "UPDATE number SET performance = $num WHERE id=0";

mysqli_query($con, $sql);
mysqli_close($con);
header("Location: index.php");
?>
</body>
</html>


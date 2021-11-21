<?php
include('connec.php');
$sql = "SELECT performance FROM number";
$result = mysqli_query($con, $sql);
while($row = mysqli_fetch_assoc($result))
{
	$pass = $row['performance'];
}
?>

<script type="text/javascript">
	function check()
	{
		var num = <?php
		echo $pass 
		?>; 
		document.getElementById('sub').value=num;
		document.getElementById("form").action = "update.php";
	}
	function submit()
	{
	var i =document.getElementById("sub").value;
	i=Number(i)+Number(1);
	document.getElementById("sub").value=i;
	document.getElementById("form").submit();
	}
</script>
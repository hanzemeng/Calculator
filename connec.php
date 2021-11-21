<?php

function debug_to_console( $data ) 
{
    	$output = $data;
    	if ( is_array( $output ) )
        $output = implode( ',', $output);
   	echo "<script>console.log('$output');</script>";
}

$con = mysqli_connect("localhost","zach","zach","zach");

if(!$con)
{
debug_to_console( "Failed to connect to server" );
}
else
{
debug_to_console( "Connected to server" );
}
?>

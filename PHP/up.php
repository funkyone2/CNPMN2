<?php
	exec("mode com7: BAUD=9600 PARITY=n DATA=8 STOP=1 to=off dtr=off rts=off");
	$fp =fopen("com7", "w");
	//$fp = fopen('/dev/ttyUSB0','r+'); //use this for Linux
	fwrite($fp, '1'); //write string to serial
	fclose($fp);
	echo "{'status':'OK'}";
?>
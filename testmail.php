<?php
	/*
	DONT FORGET TO DELETE THIS SCRIPT WHEN FINISHED!
	*/
	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );
	
	$from = 'epichospitality@bh-48.webhostbox.net';
	
	
	ini_set( 'SMTP', 'bh-48.webhostbox.net' );
	ini_set( 'SMTP_PORT', 465 );
	ini_set( 'sendmail_from', $from );
	
	
	$server = array( 
		'HTTP_HOST', 'SERVER_NAME', 'SERVER_ADDR', 'SERVER_PORT',
 		'SERVER_ADMIN', 'SERVER_SIGNATURE', 'SERVER_SOFTWARE', 
		'REMOTE_ADDR', 'DOCUMENT_ROOT', 'REQUEST_URI', 
		'SCRIPT_NAME', 'SCRIPT_FILENAME',
	);
    // define variables and set to empty values
    $to=$name = $email = $phone = $shortMsg= $msg = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $phone = test_input($_POST["phone"]);
      $shortMsg = test_input($_POST["shortMsg"]);
      $msg = test_input($_POST["msg"]);
      $to="byindians@epichospitality.in""
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    $subject = $shortMsg;
    

	$message = 'You got a mail from ' . $name . '\n' . $msg ;
	

	foreach ( $server as $s )
	{
		$message .= sprintf( '%s: %s', $s, $_SERVER[$s] ) . PHP_EOL;
	};
	
	$headers = 'From: ' . $from . PHP_EOL 
		 . 'Reply-To: ' . $from . PHP_EOL 
		 . 'X-Mailer: PHP/' . phpversion(); 
         

    $success = mail( $to, $subject, $message, $headers );

	
	if ( isset( $success ) && $success )
	{	
		echo 'sent';
	}
	else
	{
		echo 'Problem in EMail.Pls contact us  through epichosp@gmail.com';
	};
	
	
?>
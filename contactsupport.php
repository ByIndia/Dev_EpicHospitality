<?php
	
	// define variables and set to empty values
    $to=$name = $email = $phone = $shortMsg= $msg = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $reason=test_input($_POST["reason"]);
      $name = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $phone = test_input($_POST["phone"]);
      $shortMsg = test_input($_POST["shortMsg"]);
      $msg = test_input($_POST["msg"]);      
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    
    function getReasonText($reasonCode){
   		$reasonText="";
    	switch($reasonCode){
    		case "1":
    			$reasonText = "Request for New Service";
    			break;
    		case "2":
    			$reasonText = "Request for Bill Quotation Service";
    			break;
    		case "3":
    			$reasonText = "Other";
    			break;
    		default:
    			$reasonText="Unknown";    	
    	}
    	return $reasonText;
    }
    
    $submittedReasonText = getReasonText($reason);
    
    // Sending message to the CustomerSupport mail box    
    $subject = $submittedReasonText. " - " .$shortMsg. " - ". $name;
    
    $message = "You got a mail from Mr\Mrs " . $name . ".\n" .
				"=========================== Customer Details ========================== \n\n".
				"Reason for contacting :: " . $submittedReasonText ."\n".
				"Name :: " . $name . "\n".
				"Email Id :: ". $email . "\n".
				"Telephone number :: ". $phone . "\n".
				"Request short description ::" . $shortMsg . "\n".
				"Detailed request description::". $msg . "\n\n".
				"======================= End of Details==================================";
	

    $headers = "From: webadmin@epichospitality.co.in"."\r\n";
    $to="customersupport@epichospitality.co.in";    
    $success = mail( $to, $subject, $message, $headers );
    
    //Sending Message to Customer
    $customerTo=$email;
    $customerHeaders = "From: customersupport@epichospitality.co.in"."\r\n";
    $customerSubject = "Request received acknowledgement - " . $shortMsg;
    $customerMessage = "Dear ". $name. ",\n".
    					"Thank you for contacting epichospitality.\n".
    					"We acknowledge that we have received your request and we will get back to you shortly.\n\n" . 
    					"=========================== Received Details ========================== \n\n".
    					"Reason for contacting :: " . $submittedReasonText ."\n".
    					"Name :: " . $name . "\n".
    					"Email Id :: ". $email . "\n".
    					"Telephone number :: ". $phone . "\n".
    					"Request short description ::" . $shortMsg . "\n".
    					"Detailed request description::". $msg . "\n\n".
    					"======================= End of Details==================================" .
    					"\n\n\n".
    					"Yours Sincerly,\n".
    					"Epichospitality Customer Support\n\n".
    					"email: customersupport@epichospitality.co.in\n".
    					"website: epichospitality.co.in";

    $success = mail( $customerTo, $customerSubject, $customerMessage, $customerHeaders );
    
	if ( isset( $success ) && $success )
	{	
		echo 'sent';
	}
	else
	{
		echo 'Problem in EMail.Pls contact us  through epichosp@gmail.com';
	};
	
?>
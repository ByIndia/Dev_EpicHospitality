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
    

    //HTML formated email
    $message = '<!DOCTYPE html><html>';
    $message .= '<head><style>table{border-collapse:collapse;width:80%;border:1px solid #000}td,th{text-align:left;padding:8px;border:none}tr:nth-child(odd){background-color:#4CAF50}</style></head>';
    $message .="<div>Dear Epic Team, \n<br><br>";
    $message .= "<i>You got a mail from Mr\Mrs " . $name . ".\n" ;
    $message .= "<center><h3>Customer Details</h3><table style='border:1px solid #000; border-collapse: collapse;width: 80%;'>";
    $message .= "<tr style='background-color: #4CAF50' ><th style='text-align: left;padding: 8px;'>Reason for contacting</th><td style='text-align: left;padding: 8px;'>" . $submittedReasonText ."</td></tr>";
    $message .= "<tr><th style='text-align: left;padding: 8px;'>Customer Name</th><td style='text-align: left;padding: 8px;'>" . $name ."</td></tr>";
    $message .= "<tr style='background-color: #4CAF50' ><th>Email Id</th><td>" . $email ."</td></tr>";
    $message .= "<tr><th style='text-align: left;padding: 8px;'>Telephone number</th><td style='text-align: left;padding: 8px;'>" . $phone ."</td></tr>";
    $message .= "<tr style='background-color: #4CAF50'><th style='text-align: left;padding: 8px;'>Request short description</th><td style='text-align: left;padding: 8px;'>" . $shortMsg ."</td></tr>";
    $message .= "<tr><th style='text-align: left;padding: 8px;' >Detailed request description</th><td style='text-align: left;padding: 8px;'>" . $msg ."</td></tr>";
    $message .= "</table></center></i><br>";
    $message .= "Yours Sincerly,<br>";
    $message .= "<b>Epichospitality Customer Support</b><br>";
    $message .= "email: customersupport@epichospitality.co.in<br>";
    $message .= "website: epichospitality.co.in<br>";
    $message .= "</div></body></html>";

    $headers = "From: webadmin@epichospitality.co.in"."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $to="customersupport@epichospitality.co.in";    
    $success = mail( $to, $subject, $message, $headers );
    
    //Sending Message to Customer
    $customerTo=$email;
    $customerHeaders = "From: customersupport@epichospitality.co.in"."\r\n";
    $customerHeaders .= "MIME-Version: 1.0\r\n";
    $customerHeaders .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $customerSubject = "Request received acknowledgement - " . $shortMsg;


    $customerMessage = '<!DOCTYPE html><html>';
    $customerMessage .= '<head><style>td,th{text-align:left;padding:8px;border:none}tr:nth-child(odd){background-color:#4CAF50}</style></head>';
    $customerMessage .="<div>Dear ".$name. ", <br><br>";
    $customerMessage .= "<i>Thank you for contacting epichospitality.<br>";
    $customerMessage .= "<i>We acknowledge that we have received your request and we will get back to you shortly.<br>";
    $customerMessage .= "<center><h3>Customer Details</h3><table style='border:1px solid #000; border-collapse: collapse;width: 80%;'>";
    $customerMessage .= "<tr style='background-color: #4CAF50' ><th style='text-align: left;padding: 8px;'>Reason for contacting</th><td style='text-align: left;padding: 8px;'>" . $submittedReasonText ."</td></tr>";
    $customerMessage .= "<tr><th style='text-align: left;padding: 8px;'>Customer Name</th><td style='text-align: left;padding: 8px;'>" . $name ."</td></tr>";
    $customerMessage .= "<tr style='background-color: #4CAF50' ><th>Email Id</th><td>" . $email ."</td></tr>";
    $customerMessage .= "<tr><th style='text-align: left;padding: 8px;'>Telephone number</th><td style='text-align: left;padding: 8px;'>" . $phone ."</td></tr>";
    $customerMessage .= "<tr style='background-color: #4CAF50'><th style='text-align: left;padding: 8px;'>Request short description</th><td style='text-align: left;padding: 8px;'>" . $shortMsg ."</td></tr>";
    $customerMessage .= "<tr><th style='text-align: left;padding: 8px;' >Detailed request description</th><td style='text-align: left;padding: 8px;'>" . $msg ."</td></tr>";
    $customerMessage .= "</table></center></i><br>";
    $customerMessage .= "Yours Sincerly,<br>";
    $customerMessage .= "<b>Epichospitality Customer Support</b><br>";
    $customerMessage .= "email: customersupport@epichospitality.co.in<br>";
    $customerMessage .= "website: epichospitality.co.in<br>";
    $customerMessage .= "</div></body></html>";

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
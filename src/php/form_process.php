<?php
	$pieceOfTrashSpammerName = $_POST['name'];
	$name = $_POST['name_2'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];
	$isPeriodJerk = strlen($message) > 0 && strlen($message) <= 10;
	
	// If spammer filled out the honeypot field, send them a nice little thank you present
	if (!empty($pieceOfTrashSpammerName) || $isPeriodJerk)
	{
		$headers = "From: AnnoyedPerson@StopSpammingMe.com \r\n";
		$headers .= "Reply-To: $visitor_email \r\n";	
		$to = $visitor_email;
		$email_subject = "Spammers will not be tolerated";
		
		//If this is the obnoxious jerk that sends me 2 emails with 1 period in each input field everyday at 4:17 p.m.,
		//write a more personal message
		if ($isPeriodJerk)
		{
			$email_body = "Hey, you obnoxious jerk who loves sending me 2 freaking messages everyday at 4:17 P.M. with a \".\" in each input field.  I have a message for you-\n\n\n\".\"\n\n\nP.S. - If you try to keep this up, I swear that I will absolutely make it my life's mission to hunt you down and smash your computer and whatever stupid bot your pathetic personage is using to send this stupid email into absolute oblivion.  I am sick and tired of looking through your stupid messages all the time.\n\nI am a programmer.  I know what I'm doing. I know how to find you.  Don't tempt me.";
		}
		else 
		{
			$email_body = "Hi, $name, go spam someone else.  If you try to keep this up, I swear that I will absolutely make it my life's mission to hunt you down and smash your computer and whatever stupid bot your pathetic personage is using to send this stupid email into absolute oblivion.  I am sick and tired of looking through your stupid messages all the time.\n\nI am a programmer.  I know what I'm doing. I know how to find you.  Don't tempt me.";
		}
		mail($to,$email_subject,$email_body, $headers);
		header("Location:https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	}
	// This is a legitimate message
	else 
	{
		$email_from = 'noreply@phumphreys.com';
		$email_subject = "New Form Submission";
		$email_body = "User Name: $name.\n".
						"User Email: $visitor_email.\n".
							"User Message: $message.\n";
		$to = "the_phscale@yahoo.com";
		$headers = "From: $email_from \r\n";
		$headers .= "Reply-To: $visitor_email \r\n";	
		mail($to,$email_subject,$email_body,$headers);
	}
	header("Location:../thank-you.html");
?>
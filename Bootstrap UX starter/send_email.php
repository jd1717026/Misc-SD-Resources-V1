<?php

$name = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_STRING);

// Prepare email
$to = '1527460@stu.tmc.ac.uk';
$subject = 'New Message from Contact Form';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <' . $email . '>' . "\r\n";

$email_content = "
    <html>
        <head>
            <title>New Message from Contact Form</title>
        </head>
        <body>
            <p><strong>Name:</strong> $name</p>
        </body>
    </html>
";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    echo "Email sent successfully.";
    } else {
    echo "Failed to send email.";
    }
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';

    $recipient = '1527460@stu.tmc.ac.uk';
    $subject = 'New Message from Contact Form';

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <' . $email . '>' . "\r\n";

    $email_content = "
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
    ";

    if (mail($recipient, $subject, $email_content, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
<?php 
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["message"]);

require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->Username = "fiftzon1@gmail.com";
$mail->Password = "kbbnxrzgdzpbsvce";

$mail->setFrom($email, $name);
$mail->addAddress("fiftzon1@gmail.com",);

$mail->Subject = "Contact Form Submission from $name";

$emailBody = "
    <div style='font-family: Arial, sans-serif;'>
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong>$message</p>
        <div style='border: 1px solid #ddd; padding: 10px;'>
            $message
        </div>
        // <p><strong>Services:</strong> $selectedServices</p>
    </div>";

$mail->isHTML(true);
$mail->Body = $emailBody;

try {
    $mail->send();
    echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
} catch (Exception $e) {
    echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.location.href = 'index.html';</script>";
}
?>

code is this: <?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Retrieve form data
$name = $_POST['name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$callTime = $_POST['call-time'];
$bestTime = $_POST['best-time'];

// Create the email content
$subject = 'Consultation Request';
$message = "Name: $name\n";
$message .= "Last Name: $lastName\n";
$message .= "Email: $email\n";
$message .= "Phone: $phone\n";
$message .= "Call Time: $callTime\n";
$message .= "Best Time to Call: $bestTime\n";

// Set up PHPMailer
$mail = new PHPMailer(true);

try {
    // Configure SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'oguzhanvar30@gmail.com'; // Replace with your Gmail email address
    $mail->Password = 'srdcebpwfoxtgjxt'; // Replace with your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set email content
    $mail->setFrom($email, $name);
    $mail->addAddress('oguzhanvar30@gmail.com'); // Replace with your email address
    $mail->Subject = $subject;
    $mail->Body = $message;

    // Send the email
    $mail->send();
    header("success.html");
    exit;
} catch (Exception $e) {
    echo 'Error sending email: ' . $mail->ErrorInfo;
}
?>
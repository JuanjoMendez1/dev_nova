<?php
// var_dump("Entropy");
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['correo'];
$mensaje = $_POST['mensaje']; 

    $email_to = "juanjomendez029@gmail.com";
    $asunto = "Solicitud de Informacion Nova Devs";
    $asunto_cliente="Gracias por enviar su informacion" ;

    $comentario = "
        Nombre del cliente: $_POST[nombre]
        Email del cliente: $_POST[email]
        Telefono del cliente: $_POST[telefono]
        Mensaje o comentario: $_POST[mensaje]
    ";

    $headers = 'From: '.$email."\r\n". 
'Reply-To: '.$email_to."\r\n" .
'X-Mailer: PHP/' . phpversion();

        mail($email_to,$asunto,$comentario,$headers);
//         include 'index.html';
?>
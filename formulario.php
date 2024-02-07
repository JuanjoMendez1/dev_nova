<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $email_to = "juanmendez@maplins.com.mx";
    $asunto = "Solicitud de Información Nova Devs";
    $asunto_cliente = "Gracias por enviar su información";

    // Construcción del comentario
    $comentario = "
    Nombre del cliente: $nombre
    Email del cliente: $email
    Teléfono del cliente: $telefono
    Mensaje o comentario: $mensaje
    ";

    // Validación y limpieza de datos para evitar inyección de encabezados
    $email_to = filter_var($email_to, FILTER_SANITIZE_EMAIL);
    $asunto = filter_var($asunto, FILTER_SANITIZE_STRING);
    $asunto_cliente = filter_var($asunto_cliente, FILTER_SANITIZE_STRING);
    $comentario = wordwrap($comentario, 70, "\r\n");

    $asunto = mb_encode_mimeheader($asunto, "UTF-8", "Q");
    $comentario = mb_convert_encoding($comentario, "UTF-8", "auto");

    // Construcción de los encabezados con Content-Type y charset
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email_to . "\r\n" .
        'X-Mailer: PHP/' . phpversion() . "\r\n" .
        'Content-Type: text/plain; charset=UTF-8';

    // Intento de envío del correo
    if (mail($email_to, $asunto, $comentario, $headers)) {
        echo "Correo enviado";
    } else {
        echo "Error";
    }
}
?>

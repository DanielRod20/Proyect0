<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Configura la dirección de correo electrónico a la que deseas enviar los datos del formulario
  $destinatario = 'expo_infinity';

  // Asunto del correo electrónico
  $asunto = 'Nuevo mensaje del formulario de contacto';

  // Cuerpo del correo electrónico
  $cuerpoMensaje = "Nombre: $nombre\n";
  $cuerpoMensaje .= "Email: $email\n";
  $cuerpoMensaje .= "Mensaje: $mensaje\n";

  // Encabezados del correo electrónico
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Envía el correo electrónico
  if (mail($destinatario, $asunto, $cuerpoMensaje, $headers)) {
    echo "El mensaje ha sido enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
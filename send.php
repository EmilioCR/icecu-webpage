<?php 
error_reporting(0); 
$nombre = $_POST['input-name']; 
$telefono = $_POST['input-phone'];
$correo_electronico= $_POST['input-mail'];
$direccion= $_POST['input-letter']; 
$mensaje_input = $_POST['input-message']; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n"; 
$mensaje .= "Su número de teléfono es:" . $telefono . " \r\n";
$mensaje .= "Su direccion es:" . $direccion . " \r\n";
$mensaje .= "Su e-mail es: " . $correo_electronico . " \r\n";
$mensaje .= "Su pregunta fue: " . $mensaje_input . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time()); 

$para = 'emiliocf2096@gmail.com'; 
$asunto = 'Pregunta'; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

echo 'mensaje enviado correctamente'; 

?> 
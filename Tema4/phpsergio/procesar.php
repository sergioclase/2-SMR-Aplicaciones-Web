<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Inscripción recibida</title>
</head>
<body>
    <!-- CAMBIA: pon tu nombre y apellidos -->
    <h1>Práctica 3 de Sergio de la Torre Zfra</h1>
    <h2>Inscripción recibida</h2>

    <?php
        // ESCRIBE AQUÍ TU CÓDIGO PHP:
        // 1. Recoge el nombre, la edad y el ciclo que llegan del formulario

            $nombre = $_POST["nombre"];
            $edad = intval($_POST["edad"]);         //Lo que hago es recoger el nombre la edad y el ciclo /.
            $ciclo = $_POST["ciclo"];


        // 2. Muestra un saludo con el nombre y el ciclo
           echo "<p>Hola, $nombre. Te has inscrito en $ciclo.</p>";     // Muestro el saludo con el nombre y el ciclo elegido


        // 3. Muestra si es mayor de edad (18 o más) o menor de edad
             if ($edad >= 18) {
            echo "<p>Eres mayor de edad ($edad años).</p>";
        } else {
            // Si no llega a 18, la persona es menor de edad.
            echo "<p>Eres menor de edad ($edad años).</p>";
            }
    ?>


    <p><a href="formulario.html">Volver al formulario</a></p>
</body>
</html>

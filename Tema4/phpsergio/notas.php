<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
     // 1.- Guardo el nombre y tres notas inventadas
        $asignatura = "Aplicaciones Web";
        $nota1 = 7;
        $nota2 = 6;                                         
        $nota3 = 8;

         // 2.- Sumo primero las tres notas y después divido entre 3 para calcularlas

        $media = ($nota1 + $nota2 + $nota3) / 3;

         // Muestro la asignatura, las notas y la media
        echo "<p>$asignatura: mis notas son $nota1, $nota2 y $nota3. Mi media es $media.</p>";

         // Si la media es 5 o más, la asignatura estaria aprobada
        if ($media >= 5) {
            echo "<p>Aprobado</p>";
        } else {
            // Si la media es menor que 5, la asignatura estaria suspensa
            echo "<p>Suspenso</p>";
        }


?>
</body>
</html>
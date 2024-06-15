<?php
require_once '../config/conexion_bd.php';
require_once '../models/validar_datos.php';

require_once '../utils/try_catch_wrapper.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    /*=============================================
    =          MARK:Variables Generales           =
    =============================================*/

    // Obtener los datos enviados en el cuerpo de la solicitud
    $datos = json_decode(file_get_contents("php://input"), true);

    // Extraer los valores de los campos
    $email = $datos["email"];
    $nombre = $datos["nombre"];
    $apellidos = $datos["apellidos"];
    $fechaNacimiento = $datos["fechaNacimiento"];
    $telefono = $datos["telefono"];
    $colorPreferido = $datos["colorPreferido"];
    $numero = $datos["numero"];

    /*=============================================
    =           MARK:Actualizar Datos             =
    =============================================*/

    function actualizar_datos()
    {
        try {
            global $conexion, $email, $nombre, $apellidos, $fechaNacimiento, $telefono, $colorPreferido, $numero;

            $colorPreferidoJSON = json_encode($colorPreferido);

            $sql_actualizar_concursante = 'UPDATE participantes_sorteo SET Nombre = ?, Apellidos = ?, FechaNacimiento = ?, ColorPreferido = ?, Numero = ? WHERE Email = ? AND Telefono = ?';
            $stmt = $conexion->prepare($sql_actualizar_concursante);
            $stmt->bind_param("sssssss", $nombre, $apellidos, $fechaNacimiento, $colorPreferidoJSON, $numero, $email, $telefono);
            $stmt->execute();
        } catch (Exception $e) {
            throw new Exception("Error al actualizar los datos del concursante: " . $e->getMessage());
        }

    }

    /*=============================================
    =           MARK:Devolución Errores           =
    =============================================*/

    //llamar a la funcion que obtiene las excepciones y pasarle la funcion a evaluar
    tryCatchWrapper(function () {
        validarCampos(actualizar_datos());
    });

    //cerrar conexión a la base de datos
    $conexion->close();
}
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
    //Obtener el email del concursante a eliminar
    $email = $datos["email"];

    /*=============================================
    =          MARK:Eliminar Concursante         =
    =============================================*/

    function eliminar_concursante()
    {
        global $conexion, $email;

        try {
            // Comprobar si el correo electrónico existe en la base de datos
            $sql_comprobar_email = 'SELECT Email FROM participantes_sorteo WHERE Email = ?';
            $stmt = $conexion->prepare($sql_comprobar_email);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();

            // Verificar si se encontró un registro con el correo electrónico
            if ($stmt->num_rows > 0) {
                // Eliminar al concursante de la base de datos
                $sql_eliminar_concursante = 'DELETE FROM participantes_sorteo WHERE Email = ?';
                $stmt_eliminar = $conexion->prepare($sql_eliminar_concursante);
                $stmt_eliminar->bind_param("s", $email);
                $stmt_eliminar->execute();

                // Verificar si no se eliminó correctamente al concursante
                if ($stmt_eliminar->affected_rows === 0) {
                    throw new Exception("Error al eliminar el concursante");
                }
            } else {
                // No se encontró un registro con el correo electrónico
                throw new Exception("No se encontró un concursante con el correo electrónico especificado");
            }
        } catch (Exception $e) {
            // Manejar la excepción
            throw new Exception("Error al eliminar el concursante: " . $e->getMessage());
        }
    }



    /*=============================================
    =           MARK:Devolución Errores           =
    =============================================*/

    tryCatchWrapper(function () {
        eliminar_concursante();
    });

    //cerrar conexión a la base de datos
    $conexion->close();
}
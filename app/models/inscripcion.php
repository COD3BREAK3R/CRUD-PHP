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
    =     MARK:Comprobar Existencia Email         =
    =============================================*/

    function comprobar_existencia_email()
    {
        try {
            global $conexion, $email;
            // Preparar la consulta SQL
            $sql_comprobar_email = 'SELECT Email FROM participantes_sorteo WHERE Email = ?';
            // Preparar la declaración de la consulta preparada
            $stmt = $conexion->prepare($sql_comprobar_email);
            // Vincular el parámetro a la declaración de la consulta preparada
            $stmt->bind_param("s", $email);
            // Ejecutar la consulta preparada
            $stmt->execute();
            // Almacenar resultado de la consulta
            $stmt->store_result();


        } catch (Exception $e) {
            throw new Exception("Error al comprobar la existencia del email: " . $e->getMessage());
        }
        // Verificar si se encontró alguna fila en el resultado
        if ($stmt->num_rows > 0) {
            throw new Exception("El concursante ya existe y no puede volverse a registrarse");
        } else {
            registrar_concursante();
        }

    }

    /*=============================================
    =          MARK:Registrar Concursante         =
    =============================================*/

    function registrar_concursante()
    {
        try {
            global $conexion, $email, $nombre, $apellidos, $fechaNacimiento, $telefono, $colorPreferido, $numero;
            // Convertir el array ColorPreferido a una cadena JSON sin escapar los caracteres Unicode
            $colorPreferidoJSON = json_encode($colorPreferido);
            // Preparar la consulta SQL
            $sql_insertar_concursante = 'INSERT INTO participantes_sorteo (Email, Nombre, Apellidos, FechaNacimiento, Telefono, ColorPreferido, Numero) VALUES (?, ?, ?, ?, ?, ?, ?)';
            // Preparar la declaración de la consulta preparada
            $stmt = $conexion->prepare($sql_insertar_concursante);
            // Vincular los parámetros a la declaración de la consulta preparada
            $stmt->bind_param("sssssss", $email, $nombre, $apellidos, $fechaNacimiento, $telefono, $colorPreferidoJSON, $numero);
            // Ejecutar la consulta preparada
            $stmt->execute();
        } catch (Exception $e) {
            throw new Exception("Error al registrar el concursante: " . $e->getMessage());
        }
    }

    /*=============================================
    =           MARK:Devolución Errores           =
    =============================================*/

    //llamar a la funcion que obtiene las excepciones y pasarle la funcion a evaluar
    tryCatchWrapper(function () {
        validarCampos(comprobar_existencia_email());
    });

    //cerrar conexión a la base de datos
    $conexion->close();
}
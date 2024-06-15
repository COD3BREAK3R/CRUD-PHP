<?php
require_once '../config/conexion_bd.php';
require_once '../utils/try_catch_wrapper.php';


function obtener_concursantes()
{
    global $conexion;
    // Realizar la consulta SQL para obtener todos los datos de la tabla
    try {
        $sql_obtener_datos = "SELECT * FROM participantes_sorteo";
        $resultado = $conexion->query($sql_obtener_datos);
    } catch (Exception) {
        throw new Exception("Error al obtener los concursantes de la base de datos");
    }

    // Verificar si se obtuvieron resultados
    if ($resultado->num_rows > 0) {
        // Crear un array para almacenar los datos de los concursantes
        $concursantes = array();

        // Recorrer los resultados y agregar cada fila al array de concursantes
        while ($fila = $resultado->fetch_assoc()) {
            $concursantes[] = $fila;
        }

        // Convertir el array de concursantes a formato JSON
        $json_concursantes = json_encode($concursantes);

        // Devolver el JSON de concursantes como respuesta
        echo $json_concursantes;
    } else {
        throw new Exception("No se encontraron concursantes en la base de datos");
    }
}

tryCatchWrapper(function () {
    obtener_concursantes();
});


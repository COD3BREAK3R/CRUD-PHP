<?php 

// Stenecia SQL para crear los campos de la tabla "Profesores_GICD"
$sql_tabla_usuarios = "CREATE TABLE IF NOT EXISTS Profesores_GICD (
    sEmail VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    sNombre VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    sApellidos VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    sAsignatura VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    nMatriculados TINYINT,
    fExamen DATE,
    nAprobados INT
  );
";

// Crear la tabla "Profesores_GICD" si no existe
$conexion->prepare($sql_tabla_usuarios)->execute();

// Stenecia SQL para crear los campos de la tabla "participantes_sorteo"
$sql_tabla_concursantes = "CREATE TABLE IF NOT EXISTS participantes_sorteo (
    Email VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci PRIMARY KEY,
    Nombre VARCHAR(20) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    Apellidos VARCHAR(30) CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
    FechaNacimiento DATE,
    Telefono VARCHAR(9),
    ColorPreferido VARCHAR(25),
    Numero INT,
    CHECK (Numero >= 0 AND Numero <= 999)
)";

// Crear la tabla "participantes_sorteo" si no existe
$conexion->prepare($sql_tabla_concursantes)->execute();

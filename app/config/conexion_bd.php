<?php 
$host = '127.0.0.1'; // Dirección del servidor de la base de datos
$usuario = 'root'; // Usuario de la base de datos
$contrasena = '1234'; // Contraseña de la base de datos
$base_datos = 'progweb'; // Nombre de la base de datos

$conexion = new mysqli($host, $usuario, $contrasena); // Crear una nueva conexión a la base de datos

$crear_bd = "CREATE DATABASE IF NOT EXISTS $base_datos"; // Sentencia SQL para crear la base de datos si no existe

$conexion->prepare($crear_bd)->execute(); // Preparar y ejecutar la sentencia para crear la base de datos

$conexion = new mysqli($host, $usuario, $contrasena, $base_datos); // Crear una nueva conexión a la base de datos utilizando la base de datos creada

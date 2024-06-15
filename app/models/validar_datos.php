<?php

/*=============================================
=          MARK:Variables Generales           =
=============================================*/

$verificar_color = false;
$verificar_email = false;
$verificar_nombre = false;
$verificar_apellidos = false;
$verificar_fechaNacimiento = false;
$verificar_telefono = false;
$verificar_numero = false;

/*=============================================
=            MARK:Validar Datos               =
=============================================*/

function validarEmail()
{
    global $verificar_email, $email;
    $patron = '/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/';

    if (!preg_match($patron, $email)) {
        $verificar_email = false;
    } else {
        $verificar_email = true;
    }
}

function validarNombreApellidos($texto, $tipo)
{
    global $verificar_nombre, $verificar_apellidos;

    $patron = '/^[a-zA-Z\sñáéíóúÁÉÍÓÚ]+$/';

    if (!preg_match($patron, $texto) || strlen($texto) < 3) {
        if ($tipo === 'nombre') {
            $verificar_nombre = false;
            return false;
        } else {
            $verificar_apellidos = false;
            return false;
        }
    }


    if ($tipo === 'nombre') {
        if (strlen($texto) > 20) {
            $verificar_nombre = false;
            return false;
        } else {
            $verificar_nombre = true;
            return false;
        }
    } else {
        if (strlen($texto) > 30) {
            $verificar_apellidos = false;
            return false;
        } else {
            $verificar_apellidos = true;
            return false;
        }
    }
}

function validarFechaNacimiento($fecha)
{
    global $verificar_fechaNacimiento;

    $fechaNacimiento = new DateTime($fecha);
    $fechaActual = new DateTime();
    $edadMinima = 18;
    $diff = $fechaActual->diff($fechaNacimiento);
    $edad = $diff->y;

    if (empty($fecha)) {
        $verificar_fechaNacimiento = false;
    }

    if ($edad < $edadMinima) {
        $verificar_fechaNacimiento = false;
    } else {
        $verificar_fechaNacimiento = true;
    }
}

function validarTelefono()
{
    global $verificar_telefono, $telefono;
    $patron = '/^[0-9]{1,9}$/';

    if (empty($telefono)) {
        $verificar_telefono = false;
    }

    if (!preg_match($patron, $telefono)) {
        $verificar_telefono = false;
    } else {
        $verificar_telefono = true;
    }
}

function verificarColor()
{
    global $verificar_color, $colorPreferido;
    // Verificar si el objeto tiene las propiedades "r", "g" y "b"
    if (!isset($colorPreferido['r']) || !isset($colorPreferido['g']) || !isset($colorPreferido['b'])) {
        $verificar_color = false;
    }

    // Verificar si los valores de "r", "g" y "b" son numéricos
    if (!is_numeric($colorPreferido['r']) || !is_numeric($colorPreferido['g']) || !is_numeric($colorPreferido['b'])) {
        $verificar_color = false;
    }

    // Verificar si los valores de "r", "g" y "b" están en el rango válido (0-255)
    if ($colorPreferido['r'] < 0 || $colorPreferido['r'] > 255 || $colorPreferido['g'] < 0 || $colorPreferido['g'] > 255 || $colorPreferido['b'] < 0 || $colorPreferido['b'] > 255) {
        $verificar_color = false;
    }

    $verificar_color = true;
}

function validarNumeroConcursante()
{
    global $verificar_numero, $numero;
    if (!is_numeric($numero) || $numero < 0 || $numero > 999) {
        $verificar_numero = false;
    } else {
        $verificar_numero = true;
    }
}

/*=============================================
=           MARK:Validacion General           =
=============================================*/

function validarCampos($funcion)
{
    global $nombre, $apellidos, $fechaNacimiento;

    validarEmail();
    validarNombreApellidos($nombre, 'nombre');
    validarNombreApellidos($apellidos, 'apellidos');
    validarFechaNacimiento($fechaNacimiento);
    validarTelefono();
    verificarColor();
    validarNumeroConcursante();

    global $verificar_email, $verificar_nombre, $verificar_apellidos, $verificar_fechaNacimiento, $verificar_telefono, $verificar_numero;

    if (
        $verificar_email &&
        $verificar_nombre &&
        $verificar_apellidos &&
        $verificar_fechaNacimiento &&
        $verificar_telefono &&
        $verificar_numero
    ) {
        $funcion;
        return true;
    } else {
        throw new Exception("Error al validar los datos");
    }

}

/*============  End of Validacion General  =============*/
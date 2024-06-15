<?php
//llamada a los archivos necesarios para crear las tablas, conectarse a la base de datos, etc
require_once './app/config/conexion_bd.php';
require_once './app/config/crear_tabla_profesores.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscripción de Concursante</title>

    <link rel="stylesheet" href="./src/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/estilosPersonalizados.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css">

</head>

<body>


    <main class="container d-flex flex-column align-items-center justify-content-center py-4 min-vh-100">

        <!-- Titulo del Formulario -->
        <h1 class="mb-4 text-center w-75">Formulario de Inscripción en el Concurso</h1>
        <!-- Fin Titulo del Formulario -->

        <!-- Inicio del Formulario -->
        <form id="formulario" class="w-75 max-width-800">

            <!-- Correo Electronico -->
            <div class="form-group mb-4">
                <label for="email"><b>Correo Electrónico</b></label>
                <input type="email" class="form-control" id="email">
            </div>
            <!-- Fin Correo Electronico -->

            <!-- Nombre -->
            <div class="form-group mb-4">
                <label for="nombre"><b>Nombre</b></label>
                <input type="text" class="form-control" id="nombre" maxlength="20">
            </div>
            <!-- Fin Nombre -->

            <!-- Apellidos -->
            <div class="form-group mb-4">
                <label for="apellidos"><b>Apellidos</b></label>
                <input type="text" class="form-control" id="apellidos" maxlength="30">
            </div>
            <!-- Fin Apellidos -->

            <!-- Fecha Nacimiento -->
            <div class="form-group mb-4">
                <label for="fechaNacimiento"><b>Fecha de Nacimiento</b></label>
                <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento">
            </div>
            <!-- Fin Fecha Nacimiento -->

            <!-- Telefono -->
            <div class="form-group mb-4">
                <label for="telefono"><b>Teléfono</b></label>
                <input type="tel" class="form-control" id="telefono" pattern="[0-9]{9}"
                    inputmode="numeric" placeholder="Máximo 9 dígitos.">
            </div>

            <!-- Fin Telefono -->

            <!-- Color Preferido -->
            <div class="form-group mb-4">
                <label for="colorPreferido"><b>Color Preferido</b></label>
                <input type="color" class="form-control form-control-personalizado" id="colorPreferido">
            </div>
            <!-- Fin Color Preferido -->

            <!-- Numero de Concursante -->
            <div class="form-group mb-4">
                <label for="numero"><b>Número de Concursante</b></label>
                <input type="number" class="form-control" id="numero" min="0" max="999"
                    placeholder="Número entre 0 y 999">
            </div>
            <!-- Fin Numero de Concursante -->

            <!-- Botones del Formulario -->
            <div class="d-grid gap-2 d-md-flex justify-content-md-between">

                <button type="button" class="btn btn-primary btn-lg me-md-2 mb-2 mb-md-0">
                    Enviar Datos
                </button>

                <button type="button" class="btn btn-secondary btn-lg me-md-2 mb-2 mb-md-0" id='reiniciarForm'>
                    Reiniciar
                </button>

                <button type="button" class="btn btn-info btn-lg ">
                    <a class="text-white text-decoration-none" href="./pages/concursantes.php">
                        Mostrar Concursantes
                    </a>
                </button>

            </div>
            <!-- Fin Botones del Formulario -->
        </form>
        <!-- Fin del Formulario -->
    </main>


    <script src="./src/bootstrap-5.0.2-dist/js/bootstrap.min.js"></script>
    <script src="./js/mostrarErrorFormulario.js"></script>
    <script src="./js/convertirHexRGB.js"></script>
    <script src="./js/filtrarRespuestaServidor.js"></script>
    <script src="./js/mostrarPopup.js"></script>
    <script src="./js/validarFormulario.js"></script>
    <script src="./js/insertarConcursantes/enviarDatosFormulario.js"></script>
    <script src="./js/insertarConcursantes/variablesValidar.js"></script>
</body>

</html>
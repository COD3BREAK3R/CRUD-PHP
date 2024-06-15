<!-- Elemento Acordeon -->
<div class="accordion my-4" id="accordionConcursantes">

<!-- Item Acordeon -->
<div class="accordion-item">

    <!-- Encabezado Item Acordeon -->
    <h2 class="accordion-header" id="heading1">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
            Concursante 1
        </button>
    </h2>
    <!-- Fin Encabezado Item Acordeon -->


    <!-- Encabezado Cuerpo Acordeon -->
    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1"
        data-bs-parent="#accordionConcursantes">

        <!-- Cuerpo Acordeon -->
        <div class="accordion-body">
            <!-- Fila Datos -->
            <div class="row">
                <div class="col-md-6 col-12 d-sm-flex my-2">
                    <strong>Email:</strong>
                    <div class="px-sm-2 texto-largo">
                        concursante1@example.com
                    </div>
                </div>

                <div class="col-md-6 col-12 d-sm-flex my-2">
                    <strong>Nombre:</strong>
                    <div class="px-sm-2 texto-largo">
                        Johnanthan del Monte
                    </div>
                </div>
            </div>
            <!-- Fin Fila Datos -->

            <!-- Fila Datos -->
            <div class="row">
                <div class="col-md-6 col-12 d-sm-flex my-2">
                    <strong>Apellidos:</strong>
                    <div class="px-sm-2 texto-largo">
                        Algabedo Figueroda
                    </div>
                </div>

                <div class="col-md-6 col-12 d-sm-flex my-2">
                    <strong>Fecha Nacimiento</strong>
                    <div class="px-sm-2 texto-largo">
                        23-03-1993
                    </div>
                </div>
            </div>
            <!-- Fin Fila Datos -->

            <!-- Fila Datos -->
            <div class="row">
                <div class="col-md-6 d-flex my-2">
                    <strong>Teléfono:</strong>
                    <div class="px-2">
                        123456789
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-center my-2">
                    <strong>Color Preferido:</strong>
                    <span
                        style="background-color: #ff0000; width: 20px; height: 20px; display: inline-block; margin-left: 2%"></span>
                </div>
            </div>
            <!-- Fin Fila Datos -->

            <!-- Fila Datos -->
            <div class="row">
                <div class="col-md-6 d-flex my-2">
                    <strong>Número:</strong>
                    <div class="px-2">
                        234
                    </div>
                </div>

                <div class="col-md-6 d-flex justify-content-between my-2">
                    <button class="btn btn-primary flex-fill me-2">Editar</button>
                    <button class="btn btn-danger flex-fill">Eliminar</button>
                </div>
            </div>
            <!-- Fin Fila Datos -->

        </div>
        <!-- Fin Cuerpo Acordeon -->

    </div>
    <!-- Fin Encabezado Cuerpo Acordeon -->


</div>
<!-- Fin Item Acordeon -->

</div>
<!-- Fin Elemento Acordeon -->



<!-- Elemento Acordeon -->
<div class="accordion my-4" id="accordionConcursantes">

<!-- Item Acordeon -->
<div class="accordion-item">

    <!-- Encabezado Item Acordeon -->
    <h2 class="accordion-header" id="heading1">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
            Concursante 2
        </button>
    </h2>
    <!-- Fin Encabezado Item Acordeon -->


    <!-- Encabezado Cuerpo Acordeon -->
    <div id="collapse2" class="accordion-collapse collapse show" aria-labelledby="heading2"
        data-bs-parent="#accordionConcursantes">

        <!-- Cuerpo Acordeon -->
        <div class="container p-sm-5 p-3">

            <h2 class="text-center mb-5">Editando Datos del Concursante 2</h2>

            <!-- Inicio del Formulario -->
            <form id="formulario">

                <!-- Correo Electronico -->
                <div class="form-group mb-4">
                    <label for="email"><b>Correo Electrónico</b></label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <!-- Fin Correo Electronico -->
                <!-- Correo Electronico -->
                <div class="form-group mb-4">
                    <label for="email"><b>Correo Electrónico</b></label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <!-- Fin Correo Electronico -->

                <!-- Nombre -->
                <div class="form-group mb-4">
                    <label for="nombre"><b>Nombre</b></label>
                    <input type="text" class="form-control" id="nombre" name="nombre" maxlength="20"
                        required>
                </div>
                <!-- Fin Nombre -->

                <!-- Apellidos -->
                <div class="form-group mb-4">
                    <label for="apellidos"><b>Apellidos</b></label>
                    <input type="text" class="form-control" id="apellidos" name="apellidos" maxlength="30"
                        required>
                </div>
                <!-- Fin Apellidos -->

                <!-- Fecha Nacimiento -->
                <div class="form-group mb-4">
                    <label for="fechaNacimiento"><b>Fecha de Nacimiento</b></label>
                    <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento"
                        required>
                </div>
                <!-- Fin Fecha Nacimiento -->

                <!-- Telefono -->
                <div class="form-group mb-4">
                    <label for="telefono"><b>Teléfono</b></label>
                    <input type="tel" class="form-control" id="telefono" name="telefono" pattern="[0-9]{9}"
                        required>
                    <small class="form-text text-muted">Introduce un teléfono de 9 dígitos.</small>
                </div>
                <!-- Fin Telefono -->

                <!-- Color Preferido -->
                <div class="form-group mb-4">
                    <label for="colorPreferido"><b>Color Preferido</b></label>
                    <input type="color" class="form-control form-control-personalizado" id="colorPreferido"
                        name="colorPreferido" required>
                </div>
                <!-- Fin Color Preferido -->

                <!-- Numero de Concursante -->
                <div class="form-group mb-4">
                    <label for="numero"><b>Número de Concursante</b></label>
                    <input type="number" class="form-control" id="numero" name="numero" min="0" max="999"
                        required placeholder="Número entre 0 y 999">
                </div>
                <!-- Fin Numero de Concursante -->

                <!-- Botones del Formulario -->
                <div class="d-flex justify-content-center">

                    <button type="button" class="btn btn-primary btn-lg me-md-2 mb-2 mb-md-0">Actualizar Datos
                    </button>
                </div>
                <!-- Fin Botones del Formulario -->
            </form>
            <!-- Fin del Formulario -->
        </div>
        <!-- Fin Cuerpo Acordeon -->

    </div>
    <!-- Fin Encabezado Cuerpo Acordeon -->


</div>
<!-- Fin Item Acordeon -->

</div>
<!-- Fin Elemento Acordeon -->
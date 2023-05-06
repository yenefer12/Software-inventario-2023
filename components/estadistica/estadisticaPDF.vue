<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="bg-light p-3 d-flex flex-column align-items-center">
            <button type="button" class="btn custom-button btn-block mb-3 text-start mx-auto" style="width:100%">Generar gráfica de los documentos PDF más descargados</button>
            <button type="button" class="btn custom-button btn-block mb-3 text-start mx-auto" style="width:100%">Generar gráfica de los documentos de archivo físico más solicitados</button>
            <button type="button" class="btn custom-button btn-block mb-3 text-start mx-auto" style="width:100%">Generar gráfica de los documentos de archivo físico más buscados en la base de datos</button>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="d-flex justify-content-center">
            <img src="https://support.ethosdata.com/hc/article_attachments/115005695469/Buffer_copy.png" class="img-fluid mb-3" alt="Imagen grande">
          </div>
          <div class="row mb-3">
            <div class="col-12 d-flex justify-content-center">
              <button type="button" class="btn custom-button me-5">Compartir por correo</button>
              <button type="button" class="btn custom-button ms-5">Descargar PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
    :root {
      --tear: #2b2e4a;
    }

    .custom-button {
      background-color: var(--tear);
      color: white;
    }
  </style>
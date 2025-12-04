import React from 'react';

export const InfoComic = () => {
  return (
    <section className="container py-5">

    {/* TÍTULO */}
    <div className="text-center mb-4">
      <h2 className="fw-bold">SILENCIO INFINITO</h2>
    </div>

    {/* DESCRIPCIÓN */}
    <div className="row justify-content-center">
      <div className="col-lg-30">
        <p className="text-center fw-bold">
          En un mundo al borde del colapso, el gobierno libera criaturas creadas en secreto.
          Emilia y Kian, dos jóvenes sobrevivientes, descubren una frecuencia capaz de
          detenerlas. Mientras el caos se expande, el silencio se convierte en arma, refugio
          y esperanza. En el silencio… la humanidad encuentra una nueva forma de vivir.
        </p>
      </div>
    </div>

    
    <div className="row justify-content-center mt-5">
      <div className="col-lg-11">
        <div className="position-relative ">

          
          <img src="./InfoComic.png"alt="Escena Silencio Infinito"className="img-fluid"
          />

         
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-9">
            <p className="fw-semibold">
              Comprender quiénes somos en tiempos difíciles: una mirada
              profunda a la cultura, la identidad y la sociedad en momentos de crisis.
            </p>
          </div>

        </div>
      </div>
    </div>

  </section>
  );
}
import React from 'react'

export const ObjetivosComic = () => {
  return (
    <section className="container py-5">

  
    <div className="text-center mb-5">
      <h2 className="fw-bold">OBJETIVOS DEL CÓMIC</h2>
    </div>

    
    <div className=" tarjetas row g-4 justify-content-center">

    

      <div className="col-md-4 d-flex">
        <div className=" text-white rounded p-4 d-flex flex-column justify-content-center text-center flex-fill" style={{backgroundColor:'#A11B16'}}>
          
         
          <div className="mb-3">
            <i className="bi bi-eye fs-1"></i>
          </div>

          <p className="fw-semibold">
            Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las 
            personas cuando la población mundial alcanza niveles insostenibles, destacando 
            las implicaciones a nivel social, económico y medioambiental.
          </p>
        </div>
      </div>

      


      <div className="col-md-4 d-flex">
        <div className="text-white rounded p-4 d-flex flex-column justify-content-center text-center flex-fill" style={{backgroundColor:'#A11B16'}}>

      
          <div className="mb-3">
            <i className="bi bi-wind fs-1"></i>
          </div>

          <p className="fw-semibold">
            Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad
            a través de testimonios de vida en casos reales.
          </p>
        </div>
      </div>

      

      <div className="col-md-4 d-flex">
        <div className=" text-white rounded p-4 d-flex flex-column justify-content-center text-center flex-fill" style={{backgroundColor:'#A11B16'}}>

          
          <div className="mb-3">
            <i className="bi bi-gear fs-1"></i>
          </div>

          <p className="fw-semibold">
            Consolidar una recolección de referentes visuales que muestran la transformación 
            de la identidad en tiempos de crisis, con el fin de analizar la destrucción del 
            entorno a causa de las crisis sociales.
          </p>
        </div>
      </div>

    </div>
  </section>
  )
}

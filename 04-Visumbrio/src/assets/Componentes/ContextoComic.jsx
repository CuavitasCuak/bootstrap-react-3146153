import React from 'react'

export const ContextoComic = () => {
  return (
    <section>
    
    <section className="container-fluid bg-black py-5 d-flex justify-content-center">

    <div className="position-relative">

      <div className="position-absolute start-0" style={{ width:"220px", height:"2px", backgroundColor:"red", transform:"skewY(-8deg)", top:"20%", left:"-250px" }}></div>

      <img 
        src="/Comic.png" 
        alt="Comic" 
        className="img-fluid rounded shadow" 
        style={{ width:"780px", border:"3px solid white" }} 
      />

      <div 
        className="position-absolute bg-dark text-white fw-semibold p-4 rounded" 
        style={{ width:"360px", top:"50%", right:"-120px", transform:"translateY(-50%)", lineHeight:"1.5" }}
      >
        Este cómic relata hechos políticos oscuros donde una élite política crea una nueva especie para acabar con una población en específico, todo se sale de control y ahora la humanidad debe sobrevivir a los drekxon.
      </div>

      <div className="position-absolute end-0" style={{ width:"260px", height:"2px", backgroundColor:"red", transform:"skewY(8deg)", bottom:"5%", right:"-260px" }}></div>

    </div>

  </section>
    <section className="container-fluid bg-black text-white py-5">

    

    <div className="container mb-5">
      <div className="row text-center">
        <div className="col-md-6 px-4 mb-5">
          <h3 className="fw-bold mb-3">Contextualización</h3>
          <p style={{ lineHeight: "1.5" }}>En tiempos de crisis, la cultura, la identidad y la sociedad cambian, reflejando la adaptación de las comunidades. La cultura actúa como resistencia y expresión, mientras que la identidad se redefine según las dinámicas sociales y mediáticas.</p>
          <button className="btn btn-danger mt-2">Leer más</button>
        </div>
        <div className="col-md-6 px-4 mb-5">
          <h3 className="fw-bold mb-3">Justificación</h3>
          <p style={{ lineHeight: "1.5" }}>Este proyecto surge ante la necesidad de analizar las decisiones humanas en situaciones extremas y cómo estas pueden verse influenciadas por la cultura, la identidad y la sociedad en tiempos de crisis.</p>
          <button className="btn btn-danger mt-2">Leer más</button>
        </div>
      </div>
    </div>

    <div className="container pb-4">
      <div className="row g-4">
        <div className="col-md-6">
          <img src="/Contextualizacion.png" alt="Imagen contextual" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <img src="/Justificacion.png" alt="Imagen contextual 2" className="img-fluid rounded" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <div className="bg-danger" style={{ width: "200px", height: "3px" }}></div>
      </div>
    </div>
</section>
  </section>
  )
}

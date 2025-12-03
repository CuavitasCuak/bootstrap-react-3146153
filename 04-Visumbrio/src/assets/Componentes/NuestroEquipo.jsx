import React from 'react';

export const NuestroEquipo = () => {
  return (
    <section className='d-flex m-auto rounded-end' style={{backgroundColor: '#F8E9E9', width: '80%',padding: '2rem 0 5rem 0', fontFamily: 'serif', textAlign: 'center', color: '#000000'}}>
      
      <div className="container" style={{width: '90%', maxWidth: '1000px', margin: '0 auto'}}>
        
        <div style={{marginBottom: '3rem'}}>
          <div style={{backgroundColor: '#F8E9E9',  }}>
            <img src="./Karen.png" style={{width: '200px', height: '280px', objectFit:'cover', borderRadius: '4%',}} alt=""/>
          </div>
          <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Karen Andrea Marin Cuava</h3>
          <p style={{fontSize: '1rem', opacity: 0.8, fontStyle: 'italic'}}>"La voz silenciosa que conecta"</p>
        </div>

        <div className="row justify-content-center">
          
          <div className="col-lg-4 col-md-12 mb-4">
            <div style={{backgroundColor: '#D29C9C', color: '#FFFFFF', padding: '1.5rem', height: '100%', borderRadius: '4px', textAlign: 'justify'}}>
              <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', textTransform: 'uppercase', borderBottom: '2px solid #FFFFFF', paddingBottom: '0.5rem'}}>Producción y Experiencia Digital</h4>
              <p style={{fontSize: '0.9rem', lineHeight: 1.6, margin: 0}}>Encargada de integrar lo narrativo y visual en formatos digitales. Diseña la interfaz, estructura las plataformas interactivas, distribuye los contenidos y crea estrategias para que cada historia llegue... incluso en medio del ruido.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div style={{backgroundColor: '#D29C9C', color: '#FFFFFF', padding: '1.5rem', height: '100%', borderRadius: '4px', textAlign: 'justify'}}>
              <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', textTransform: 'uppercase', borderBottom: '2px solid #FFFFFF', paddingBottom: '0.5rem'}}>Dirección Creativa y Narrativa</h4>
              <p style={{fontSize: '0.9rem', lineHeight: 1.6, margin: 0}}>Encargada de imaginar los mundos, escribir las historias y estructurar los arcos narrativos. Diseña los temas, personajes, diálogos y conflictos sociopolíticos. Da forma a la esencia oscura y simbólica de cada relato.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div style={{backgroundColor: '#D29C9C', color: '#FFFFFF', padding: '1.5rem', height: '100%', borderRadius: '4px', textAlign: 'justify'}}>
              <h4 style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', textTransform: 'uppercase', borderBottom: '2px solid #FFFFFF', paddingBottom: '0.5rem'}}>Dirección de Arte y Estética Visual</h4>
              <p style={{fontSize: '0.9rem', lineHeight: 1.6, margin: 0}}>Responsable de construir el estilo visual del universo Visumbrio: diseño de personajes, ambientes, paleta de colores y atmósfera. Da vida a lo imaginado a través de ilustraciones, dirección gráfica y composición.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'

export const Logo = () => {
  return (
    <section 
      
    >
      <div 
        className="container" 
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div className="row" style={{ alignItems: 'center' }}>
          
          {/* Columna Izquierda: Bloques de Texto */}
          <div className="col-lg-6" style={{ padding: '0 2rem' }}>
            
            {/* Texto de Simbolismo y Figura Monstruosa (Parte Superior) */}
            <div 
              style={{
                border: '1px dashed #AAAAAA',
                padding: '1.5rem',
                maxWidth: '450px',
                marginBottom: '4rem',
                textAlign: 'justify',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              <p style={{ margin: 0 }}>
                El diseño del logotipo se inspira en una figura monstruosa, donde se combinan de manera simbólica dos elementos distintivos: la lengua y los ojos de una criatura aterradora. Estos componentes se entrelazan visualmente para transmitir una estética perturbadora e inquietante, capturando así la esencia del miedo y del terror que caracteriza a la marca.
              </p>
            </div>
            
            {/* Texto de Colores (Parte Inferior) */}
            <div 
              style={{
                border: '1px dashed #AAAAAA',
                padding: '1.5rem',
                maxWidth: '600px',
                marginTop: '4rem',
                textAlign: 'justify',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              <p style={{ margin: 0 }}>
                El **NEGRO** predomina como representación de la oscuridad absoluta, evocando sensaciones de muerte, vacío y temor. A su vez, el <span style={{ color: '#8B0000', fontWeight: 'bold' }}>ROJO OSCURO</span> complementa esta atmósfera al simbolizar la sangre, la violencia latente y el terror, reforzando el impacto emocional del conjunto visual.
              </p>
            </div>
          </div>
          
          {/* Columna Derecha: Diagrama Central del Logo */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative">
            
            {/* Círculo Principal del Logo */}
            <div 
              style={{
                border: '2px solid #555',
                borderRadius: '50%',
                width: '280px',
                height: '280px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                position: 'relative',
              }}
            >
              <span 
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  letterSpacing: '2px', 
                  fontFamily: 'serif' 
                }}
              >
                VISUMBRI
                {/* La 'O' estilizada para simular el logo */}
                <span style={{ color: '#8B0000' }}>O</span>
              </span>
            </div>
            
            {/* Línea de Conexión Superior */}
            <div 
              style={{
                position: 'absolute',
                top: '25%', 
                left: '-20%', 
                width: '180px',
                height: '1px',
                backgroundColor: '#555',
                transform: 'rotate(0deg)', 
                transformOrigin: 'left',
              }}
            ></div>
            
            {/* Línea de Conexión Inferior */}
            <div 
              style={{
                position: 'absolute',
                bottom: '25%', 
                left: '-20%', 
                width: '180px',
                height: '1px',
                backgroundColor: '#555',
                transform: 'rotate(0deg)', 
                transformOrigin: 'left',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

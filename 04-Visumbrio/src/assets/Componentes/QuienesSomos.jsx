import React from 'react'

export const QuienesSomos = () => {
  return (
    <section 
      style={{
        backgroundColor: '#8B0000',
        color: '#FFFFFF',
        width: '100%',
        minHeight: '100vh',
        padding: '5rem 0 3rem 0',
        fontFamily: 'serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div 
        className="container" 
        style={{
          width: '90%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div 
          className="row" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
          }}
        >
          <div 
            className="col-lg-6 col-md-12 text-center text-lg-start" 
            style={{ 
              marginBottom: '3rem', 
            }}
          >
            <h1 
              style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                lineHeight: 1,
                letterSpacing: '2px',
              }}
            >
              VISUMBRIO
            </h1>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: '10rem',
              }}
            >
              <hr style={{ width: '20px', backgroundColor: '#FFFFFF', height: '2px', border: 'none', margin: '0 10px' }} />
              <p 
                style={{
                  fontSize: '1rem',
                  opacity: 0.8,
                  lineHeight: 1.5,
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                Una plataforma para narrativas que exploran la identidad, la crisis y la resistencia a través de cómics.
              </p>
              <hr style={{ width: '20px', backgroundColor: '#FFFFFF', height: '2px', border: 'none', margin: '0 10px' }} />
            </div>
          </div>
          
          <div 
            className="col-lg-6 col-md-12 text-center text-lg-end" 
            style={{
              paddingTop: '2rem',
              marginBottom: '3rem', 
            }}
          >
            <h2 
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              ORIGEN DEL NOMBRE
            </h2>
          </div>
        </div>

        <hr style={{ borderColor: '#A00000', margin: '4rem 0' }} />

        <div className="row">
          <div className="col-12 text-center">
            <h2 
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              ¿QUIÉNES SOMOS?
            </h2>
            <p 
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '0 auto',
                opacity: 0.9,
              }}
            >
              VISUMBRIO nace como una marca editorial independiente que combina narrativas visuales y digitales para visibilizar tensiones sociopolíticas, éticas y culturales desde la ficción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

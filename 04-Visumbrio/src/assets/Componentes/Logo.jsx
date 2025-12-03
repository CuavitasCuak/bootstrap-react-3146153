import React from 'react'

export const Logo = () => {
  return (
    <section style={{ padding: '2rem 0', minHeight: '900px', position: 'relative' }}>
      <div className="container" style={{ width: '90%', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <div className="col-lg-6" style={{ padding: '0 2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ border: '1px dashed #AAAAAA', padding: '1.5rem', width: '85%', textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6, marginBottom: '10rem' }}>
              <p>
                El diseño del logotipo se inspira en una figura monstruosa, donde se combinan de manera simbólica dos elementos distintivos: la lengua y los ojos de una criatura aterradora. Estos componentes se entrelazan visualmente para transmitir una estética perturbadora e inquietante, capturando así la esencia del miedo y del terror que caracteriza a la marca.
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', paddingBottom: '10rem' }}>
            <div style={{ border: '3px solid #666', borderRadius: '50%', width: '330px', height: '330px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <img src="./logooo.png" alt="" style={{ width: '80%' }} />
            </div>
            <div className="d-none d-lg-block "
              style={{ position: 'absolute', top: '30%', left: '1%', width: '150px', height: '2px', backgroundColor: '#666' }}>
            </div>

            <div className="d-none d-md-block"
              style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '90px', backgroundColor: '#666' }}>
            </div>
          </div>

          <div className="col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '-1rem' }}>
            <div style={{ border: '1px dashed #AAAAAA', padding: '1.5rem', width: '50%', textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>
                El <strong>NEGRO</strong> predomina como representación de la oscuridad absoluta, evocando sensaciones de muerte, vacío y temor. A su vez, el <span style={{ color: '#8B0000', fontWeight: 'bold' }}>ROJO OSCURO</span> complementa esta atmósfera al simbolizar la sangre, la violencia latente y el terror, reforzando el impacto emocional del conjunto visual.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

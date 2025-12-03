import React from 'react';

export const Trailer = () => {
  return (
    <section className='mt-4'
      style={{backgroundColor: '#424242', color: '#FFFFFF', width: '100%',padding: '5rem 0', fontFamily: 'serif', textAlign: 'center', minHeight: '400px'}}
    >
      <div 
        className="container" 
        style={{width: '100%', maxWidth: '900px', margin: '0 auto'}}
      >
        <div style={{marginBottom: 'rem'}}>
          <h1 
            style={{fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1, marginBottom: '1rem'}}
          >
            Silencio Infinito 
            <span style={{fontSize: '1.2rem', fontWeight: 'normal'}}>
             es el primer cómic de VISUMBRIO. Este tráiler es una mirada al principio del fin, una advertencia y un eco que aún resuena. Prepárate para entrar a Lumara, un planeta herido por la ambición... y testigo de una lucha que apenas comienza.
            </span>
          </h1>
        </div>

        <div 
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <p 
            style={{fontSize: '1.2rem', maxWidth: '700px', lineHeight: 1.6, opacity: 0.9, fontStyle: 'italic', marginBottom: '2rem'}}
          >
            "En un mundo donde las decisiones del poder desataron una catástrofe sin precedentes, las voces fueron silenciadas... y la humanidad quedó al borde del olvido."
          </p>

          <button 
            style={{backgroundColor: '#8B0000', color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.2rem', padding: '0.8rem 2.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px'}}
          >
            VER TRAILER
          </button>
        </div>
      </div>
    </section>
  );
}
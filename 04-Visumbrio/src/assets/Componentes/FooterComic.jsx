import React from 'react';

export const FooterComic = () => {
  return (
    <footer 
      style={{backgroundColor: '#FFFFFF', color: '#000000', fontFamily: 'sans-serif', padding: '3rem 0', width: '100%', borderTop: '1px solid #E0E0E0'}}
    >
      <div 
        className="container" 
        style={{width: '90%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}
      >
        
        
        <div style={{marginBottom: '2rem'}}>
          <a href="#" style={{fontSize: '2rem', color: '#8B0000', margin: '0 1rem', textDecoration: 'none', display: 'inline-block'}} title="Instagram">
           
            <i className="bi bi-instagram"></i> 
          </a>
          <a href="#" style={{fontSize: '2rem', color: '#8B0000', margin: '0 1rem', textDecoration: 'none', display: 'inline-block'}} title="Twitter">
            
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" style={{fontSize: '2rem', color: '#8B0000', margin: '0 1rem', textDecoration: 'none', display: 'inline-block'}} title="Facebook">
           
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        
      
        <div style={{marginBottom: '1rem'}}>
          <a href="#" style={{color: '#8B0000', margin: '0 1rem', textDecoration: 'none', fontSize: '1rem'}}>Ayuda</a>
          <span style={{color: '#8B0000'}}>|</span>
          <a href="#" style={{color: '#8B0000', margin: '0 1rem', textDecoration: 'none', fontSize: '1rem'}}>Términos</a>
          <span style={{color: '#8B0000'}}>|</span>
          <a href="#" style={{color: '#8B0000', margin: '0 1rem', textDecoration: 'none', fontSize: '1rem'}}>Privacidad</a>
        </div>

        
        <p style={{fontSize: '0.9rem', color: '#8B0000', margin: 0, marginTop: '2rem'}}>
          &copy; 2024 VISUMBRIO. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
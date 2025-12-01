import React from 'react';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{width: "100%", height: "5.5rem", backgroundColor: '#FFFFFF',}}>
      <div className="container-fluid" style={{ width: "90%", maxWidth: "1200px",margin: "0 auto" }}>
        
        {/* 🖼️ LOGO: Imagen "VISUMBRIO" */}
        <div className="logo" 
        style={{width: "15rem", height: "auto",display: 'flex',alignItems: 'center',
          }}
        >
          <img src="./logooo.png" alt="" style={{ width: "100%", height: "auto" }} />
        </div>

        {/* Botón Toggler para móvil (Bootstrap) */}
        <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Menú de navegación y elementos de la derecha */}
        <div 
          className="collapse navbar-collapse justify-content-end" 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-end"> 
            
            {/* 🏠 Inicio (Activo con la rayita) */}
            <li className="nav-item mx-2">
              <a 
                className="nav-link" 
                aria-current="page" 
                href="#" 
                style={{
                  color: '#000000', 
                  borderBottom: '3px solid #8B0000', // LA RAYITA ROJA
                  paddingBottom: '5px', 
                  fontWeight: 'bold', 
                  fontFamily: 'serif', 
                  fontSize: '1.15rem',
                }}
              >
                Inicio
              </a>
            </li>
            
            {/* 📘 Cómic (Inactivo) */}
            <li className="nav-item mx-2">
              <a 
                className="nav-link" 
                href="#" 
                style={{
                  color: '#000000',
                  fontFamily: 'serif',
                  fontSize: '1.15rem',
                  opacity: 0.7, 
                  transition: 'opacity 0.2s',
                }}
              >
                Cómic
              </a>
            </li>

            {/* 🛍️ Tienda (Inactivo) */}
            <li className="nav-item mx-2">
              <a 
                className="nav-link" 
                href="#" 
                style={{
                  color: '#000000',
                  fontFamily: 'serif',
                  fontSize: '1.15rem',
                  opacity: 0.7, 
                  transition: 'opacity 0.2s',
                }}
              >
                Tienda
              </a>
            </li>
            
            {/* 🔑 Botón de Iniciar Sesión */}
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link p-0" href="true">
                <span 
                  style={{backgroundColor: '#8B0000', borderColor: '#8B0000', color: '#FFFFFF',fontWeight: 'bold', borderRadius: '4px', padding: '0.5rem 1rem', marginLeft: '1.5rem', marginRight: '1rem', fontFamily: 'serif',fontSize: '1.15rem', display: 'inline-block',height: 'fit-content',alignSelf: 'center'}}
                >
                  Iniciar sesión
                </span>
              </a>
            </li>
            
            {/* 👤 Imagen de la Cuenta */}
            <li className="nav-item d-flex align-items-center ms-3">
                <img 
                  className='rounded-4' src="./Cuenta.png" alt="Cuenta"
                  style={{width: '3.5rem', height: '3.5rem',  objectFit: 'cover',
                  }}
                />
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}
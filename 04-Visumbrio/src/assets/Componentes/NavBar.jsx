
import React from 'react'

export const NavBar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:"100%", height:"7rem"}}>
  <div className="container-fluid" >

      <div className="logo">
        <img src="./logooo.png" alt="Logo de la marca" style={{width: "15rem", height: "auto" }} />
        </div>

  

    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>

    </button>
    <div className="collapse navbar-collapse " id="navbarNav">

      <ul className="navbar-nav">
        
        <li className="nav-item">

          <a className="nav-link active " aria-current="page" href="#">Inicio</a>
       
        </li>
      

        <li className="nav-item">

          <a className="nav-link" href="#">Cómic</a>

        </li>

        <li className="nav-item">

          <a className="nav-link" href="#">Tienda</a>

        </li>

        <li className="nav-item">

          <a className="nav-link" href="true">Iniciar sesión</a>

        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

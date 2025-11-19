
import './Cuadritos.css'

export const Cuadros = () => {
  return (
    <div className="container">

        <div className="cuadritos">

          <div >
            <div className="bg-success-subtle card" >
              <img  src="./libro.png" alt="" />
              <h1>About us</h1>

            </div>
            
            <div>
              <img className="team" src="./team.png" alt="" />
              <h1>Our Team</h1>

            </div>

            <div>
              <img className="libro" src="./descarga.png" alt="" />
              <h1>Resume</h1>

            </div>

          </div>


          <div className="segunda col">
            <div>
              <img className="Our Works" src="./galeria.png" alt="" />
              <h1>About us</h1>

            </div>


    
          </div>

          <div className="tercera col">
            <div>
              <img className="about" src="./contact.png" alt="" />
              <h1>Contacts</h1>

            </div>
            
            <div>
              <img className="team" src="./lapiz.png" alt="" />
              <h1>Blog</h1>

            </div>

            <div >
              <img className="libro" src="./descarga.png" alt="" />
              <h1>Feedback</h1>

            </div>

          </div>
          
        </div>
    </div>
  )
}

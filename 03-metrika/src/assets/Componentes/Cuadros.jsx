import './Cuadritos.css';

export const Cuadros = () => {
  return (
    <div className="container mt-4">

      <div className="row">

        <div className="primer col-3 d-flex flex-column gap-3">

          <div className="row">
            <div className="col-6">
              <div className="card text-white text-start" style={{ background: "#6bb7a6", height: "120px" }}>
                <div className="d-flex justify-content-center mt-3">
                  <img src="./libro.png" width="40" />
                </div>
                <h5 className="mt-4">About Us</h5>
              </div>
            </div>

            <div className="col-6">
              <div className="card text-white text-start" style={{ background: "#7cbc90", height: "120px" }}>
                <div className="d-flex justify-content-center mt-3">
                  <img src="./team.png" width="40" />
                </div>
                <h4 className="mt-4">Our Team</h4>
              </div>
            </div>
          </div>

          <div className="card text-white text-start" style={{ background: "#c1604c", height: "150px" }}>
            <div className="d-flex justify-content-center mt-3">
              <img className='mt-2' src="./descarga.png" width="59" />
            </div>
            <h4 className="mt-3">Resume</h4>
          </div>
        </div>

        <div className="segundo col-4">
          <div className="card text-white p-3 d-flex flex-column"
            style={{ background: "#3a9cc3", height: "287px" }}>
            <div className="d-flex justify-content-center mt-5">
              <img src="./galeria.png" width="100" />
            </div>
            <h3 className="mt-auto">Our Works</h3>
          </div>
        </div>

        <div className="tercero col-md-3 d-flex flex-column gap-3">

          <div className="card text-white p-2" style={{ background: "#c85b82", height: "150px" }}>
            <div className="d-flex justify-content-center mt-3">
              <img src="./contact.png" width="40" />
            </div>
            <h4 className="mt-5">Contacts</h4>
          </div>

          <div className="row g-3">
            <div className="col-6">
              <div className="card text-white p-2" style={{ background: "#d48d47", height: "120px" }}>
                <div className="d-flex justify-content-center mt-2">
                  <img src="./lapiz.png" width="40" />
                </div>
                <h4 className="mt-4">Blog</h4>
              </div>
            </div>

            <div className="col-6">
              <div className="card text-white p-2" style={{ background: "#e0a652", height: "120px" }}>
                <div className="d-flex justify-content-center mt-2">
                  <img src="./mail.png" width="40" />
                </div>
                <h4 className="mt-4">Feedback</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
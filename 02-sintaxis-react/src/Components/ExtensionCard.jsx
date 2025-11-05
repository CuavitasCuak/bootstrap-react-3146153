import "./ExtensionCard.css"

export const ExtensionCard = ({cardTittle, cardImage, cardDescription}) => {
  return (
    <>
        <div className="tarjeta">
            <img className="image" src={cardImage} alt="" />
            <div className="texto">
                <h1 className="titulo"> {cardTittle} </h1>
                <p className="parrafo"> {cardDescription} </p> 
                <button className="Button">Remove</button>
                <p className="check">👍</p>
            </div>
                
            
        
        </div>
        
    </>
  ) 
}

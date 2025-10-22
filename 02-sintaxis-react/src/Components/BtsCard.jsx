export function BtsCard ({cantante, imagen, parrafo }){

    return(
        <>
        <h1>{cantante}</h1>
        <img src={imagen} alt="" width="250" />
        <p>{parrafo}</p> 
        </>
    )

}
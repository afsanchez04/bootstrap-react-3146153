import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
  return (
    <>
    <div className="general">
      <div className="informacion">
        <div className="icono">
          <div className="icon">{cardImage}</div>
          </div>
          <div className="texto">
            <h1 className="titulo">{cardTitle}</h1>
            <p className="desc">{cardDescription}</p>
            </div>
            </div>
            <div className="remove">
              <div className="remove1">Remove</div>
              <div className="boton">💿</div>
                </div>
                </div>
    </>
  )
}

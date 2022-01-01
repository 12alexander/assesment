import "./Modal.css";

function Modal(props){
  console.log(props.open);
  return(
    <div className={`modal ${props.open && "open"}`}>
      <div className="modal__container">
        <button className="button-close" onClick={props.closeModal}>X</button>
        <div className="modal-body">
          <header className="modal-header">
            <img className="modal-image" src={props.image} alt="" />
            <p className="modal-title">{props.title}</p>
          </header>
          
          <div className="modal__information">
            <p className="modal_information-description">{props.description}</p>
            <div className="information">
              <p className="information-categoria">{props.category}</p>
              <p className="information-price">{props.price}</p>
            </div>                      
          </div>        
          <div className="modal__footer">
            <button className="btn" onClick={props.closeModal}>Inicio</button>          
          </div>
        </div>        
      </div>
    </div>
)
}

export default Modal;
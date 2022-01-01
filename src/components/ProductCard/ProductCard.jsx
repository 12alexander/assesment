import {useState,useRef,useEffect} from "react";
import Modal from "../Modals/Modal";
import "./Product.css"

function ProductCard(props){
  const [open,setOpen] = useState(false);
  const openModal = ()=>{
    setOpen(true);
    console.log("hola que hace modal abierto")
  };
  const closeModal = ()=>{
    setOpen(false);
  };  

  const[timeHours, setTimeHours] = useState('00');
  const[timeMinutes, setTimeMinutes] = useState('00');
  const[timeSeconds, setTimeSeconds] = useState('00');

  let interval = useRef();
  
  const startTimer = ()=>{
    const fecha = new Date('May 30, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const fechaNueva = new Date().getTime();
      const distancia = fecha - fechaNueva;
      const horas = Math.floor((distancia % (1000*60*60*24)/(1000*60*60)));
      const minutos = Math.floor((distancia % (1000*60*60))/(1000*60));
      const segundos = Math.floor((distancia % (1000*60))/1000);
      if(distancia < 0 ){
        clearInterval(interval.current);
      }else{
        setTimeHours(horas);
        setTimeMinutes(minutos);
        setTimeSeconds(segundos);
      }
    }, 1000);
    console.log(fecha);
  }

  useEffect(()=>{
    startTimer();
    return () =>{
      clearInterval(interval.current);
    };    
  });

  return(
    <>     
      <div className="card">
        <img className="card__img" src={props.image} alt={props.id} />
        <div className="header">
          <p className="title">{props.title}</p>
        </div>
        <div className="footer">
          <span className="title">{`${timeHours}:${timeMinutes}:${timeSeconds}`}</span>
          <button className="button" onClick={openModal}>Go To Detail</button>
        </div>
      </div>         
      <Modal 
        open={open}
        closeModal={closeModal}
        key={props.id}
        image={props.image} 
        category={props.category} 
        description={props.description} 
        price={props.price} 
        title={props.title}
      />      
    </>
  )
}

export default ProductCard;
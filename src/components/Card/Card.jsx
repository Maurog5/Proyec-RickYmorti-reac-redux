import style from './Card.module.css'


export default function Card(props) {
   return (
      <div className={style.Container}>
        <button onClick={props.onClose}className={style.closeButton}>X</button>
             <img  src={props.image} alt={props.name} />
              <h2> {props.name} </h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
     
      </div>
   );
}

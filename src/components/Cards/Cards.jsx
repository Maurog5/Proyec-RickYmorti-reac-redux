import Card from '../Card/Card';
import { CardsContainer } from './ styledComponents';
export default function Cards(props) {
   const { characters } = props;
   return (
   <CardsContainer>
{characters.map((c,i) => {
   return(
    <Card
    key={i}
    name={c.name}
    species={c.species}
    gender={c.gender}
    image={c.image}
    onClose={() => window.alert('Emulamos que se cierra la card')}
    
/>

   )


   })}
   </CardsContainer>);

}


export default function SearchBar(props) {
   return (
      <div className="Button">
          <input type='search' name = "search" id = ""/>
      <button onClick={props.onSearch()}>Agregar</button> 
      </div>
   );
}

import './App.css'
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';




function App () {



  return (
    <div className='App' style={{ padding: '25px' }}>

      <div>
        <Cards
          characters={characters}
        />
      </div>
      <SearchBar onSearch={(characterID) => window.alert(characterID) }/>
    </div>
  )
}

export default App
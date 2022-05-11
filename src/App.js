import { useState } from 'react'
import './index.css'
import Tiles from './components/Tiles'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Cart from './components/Cart'
import About from './components/About'
import Data from './components/Data'
import Filter from './components/Filter'
import Card from './components/Card'

const App = () => {

  const [tile, setTile] = useState(Data); 
  const [cartContents, setCartContents] = useState([]);
  //const [card, setCard] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showTileDetails, setShowTileDetails] = useState(false);
  const [text, setText] = useState('');
  //const [state, setState] = useState('');
  
  const toggleModal = () => setShowModal(!showModal);
  const toggleFilter = () => setShowFilter(!showFilter);
  const applyChanges = () => {
    Data.filter(Data.map((x) => {
      if(x.title === tile.title){
        return tile;
      }else{
        return tile;
      }
    }));
  }

  //function filterTile(text) {
  //  setText(text.target.value);
  //  if(text !== ""){
  //    setTile(tile.filter((text) => tile.title.toLowerCase().includes(text.toLowerCase())));
  //  }else{
  //    setTile(tile);
  //  }
  //};

  //const filteredData = Data.filter(text => {
  //  const exist = Data.find((x) => x.id === tile.id);
    //if(exist){
    //  Data.map((tile) => tile.title.toLowerCase().includes(text.toLowerCase())) ? {...exist} : tile));
    //}
  //});


  const onAdd = (tile) => {
    const exist = cartContents.find((x) => x.id === tile.id);
    if(exist){
     setCartContents(cartContents.map((x) => x.id === tile.id ? {...exist, qty: exist.qty+1} : x));
    } else {
      setCartContents([...cartContents, {...tile, qty: 1 }]);
    }
  }

  const onRemove = (tile) => {
    const exist = cartContents.find((x) => x.id === tile.id);
    if(exist.qty === 1){
      setCartContents(cartContents.filter((x) => x.id !== tile.id));
    } else {
      setCartContents(cartContents.map((x) => x.id === tile.id ? {...exist, qty: exist.qty-1} : x));
    }
  }

  //const checkOut = () => {
  //}

  return (
    <div className="App">
      <div className="AppContainer">
        <Header showAbout={() => setShowAbout(!showAbout)} showSearch={() => setShowSearchBar(!showSearchBar)} showModal={() => setShowModal(!showModal)}/>
        {showAbout && <About/>}
        {showSearchBar && <Search toggleFilter={toggleFilter} text={text} setText={setText}/>}
        {showFilter && <Filter toggleFilter={toggleFilter} applyChanges={applyChanges} setTile={setTile}/>}
        {showModal && <Cart onAdd={onAdd} onRemove={onRemove} cartContents={cartContents} tile={tile} toggleModal={toggleModal}/>}
        {showTileDetails && <Card key={tile.id} tile={tile} onAdd={onAdd} viewCard={() => setShowTileDetails(!showTileDetails)}/>}
      </div>  
      <Tiles key={tile.id} tile={tile} onAdd={onAdd} viewCard={() => setShowTileDetails(!showTileDetails)} setTile={setTile} />
      <Footer/>
    </div>
  );
}

export default App;

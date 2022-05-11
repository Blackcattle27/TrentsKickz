import React from 'react'
import Data from './Data';
import Tile from './Tile'

const Tiles = (props) => {
  const { tile, onAdd, viewCard, filteredData} = props;
  return (
    <>
        {Data.map((tile, id) => (
          <Tile key={id} tile={tile} onAdd={onAdd} viewCard={viewCard}></Tile>))}
    </>
  )
}

export default Tiles
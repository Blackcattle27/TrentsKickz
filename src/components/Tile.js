import React from 'react'

export default function Tile(props){
  const { tile, onAdd, viewCard} = props;
  return (
    <div className="tileCard">
        <div className='card'>
          <div onClick={viewCard} key={tile.id}>
            <img alt={tile.title} src={tile.image} className='imageIcon'></img>
            <h3>{tile.title}</h3>
            <p>{tile.description}</p>
            <h4>{tile.price}</h4>
          </div>
          <button onClick={()=>onAdd(tile)} className='cartBtn'>Add to Cart</button>
        </div>
    </div>
  )
}
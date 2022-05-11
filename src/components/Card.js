import React from 'react'
import Data from './Data'

const Card = (props) => {
    const { tile, onAdd, viewCard} = props;

  return (
    <div className='modal'>
        <div className='cartForm'>
            {Data.map((tile) => {
                return(
                <div key={tile.id}>
                    <img alt={tile.title} src={tile.image} className='imageIcon'></img>
                    <h3>{tile.title}</h3>
                    <p>{tile.description}</p>
                    <h4>{tile.price}</h4>
                </div>
            )})}
            <button onClick={()=>onAdd(tile.id)} className='cartBtn'>Add to Cart</button>
            <button onClick={viewCard} className='cartBtn'>Close</button>
        </div>
    </div>
  )
}

export default Card
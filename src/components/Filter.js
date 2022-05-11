import React from 'react'
import Data from './Data'

export default function Filter(props) {
    
    const {toggleFilter, applyChanges, tile, setTile, setText} = props;
    
    const filter = (text) => {
        if(text !== ""){
            const result = Data.filter((text) => {
            return setText(tile.title.toLowerCase().includes(text.toLowerCase()))});
            setTile(result);
        }else{
            return setTile(Data);
        }
    }

  return (
    <div className='modal'>
        <div className='filterResults'>
            <h3>Filter Results</h3>
            <h5>Brand</h5>
            <button className='cartBtn'>Nike</button>
            <button className='cartBtn'>Adidas</button>
            <button className='cartBtn'>Reebok</button>
            <button className='cartBtn'>Under Armour</button>

            <h5>Size</h5>
            <select>
                <option>
                    8
                </option>
                <option>
                    8.5
                </option>
                <option>
                    9
                </option>
                <option>
                    9.5
                </option>
                <option>
                    10
                </option>
                <option>
                    10.5
                </option>
                <option>
                    11
                </option>
                <option>
                    11.5
                </option>
                <option>
                    12
                </option>
                <option>
                    12.5
                </option>
            </select>

            <h5>Price</h5>
            <select>
                <option>
                    Under $100
                </option>
                <option>
                    $100 - $200
                </option>
                <option>
                    Over $200
                </option>
            </select><br/><br/>

            <button onClick={applyChanges} className='cartBtn'>Apply</button>
            <button onClick={toggleFilter} className='cartBtn'>Close</button>

            
        </div>
    </div>
  )
}

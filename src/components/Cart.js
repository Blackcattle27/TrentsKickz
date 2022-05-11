import React from 'react'

const Cart = (props) => {
  const {cartContents, onAdd, onRemove, toggleModal, checkOut} = props;

  return (
    <div className='modal'>
        <div className='cartForm'>
            <h3>Cart Summary</h3>
            <div>{cartContents.length === 0 && <div>Cart is Empty.</div>}</div>   
            {cartContents.map((tile) => (
                <div key={tile.id}>
                    <div>{tile.title}</div>
                    <div>{tile.price}</div>
                    <div className='qtyPrice'>
                        <button onClick={()=>onAdd(tile)} className="addQtyBtn">+</button>
                        <button onClick={()=>onRemove(tile)} className="removeQtyBtn">-</button>
                        {tile.qty} x {tile.price}
                    </div>
                </div>
            ))}
            <div>
                <button onClick={checkOut} className='checkoutBtn'>Check Out</button>
                <button onClick={toggleModal} className='cartBtn'>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
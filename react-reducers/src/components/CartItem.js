import React from 'react'

const CartItem = ({data, delFromCart}) => {
    let {id, name, price, quantity}= data
    return (

        <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <h4>{name}</h4>
            <h4>${price}.00 x {quantity} = ${price*quantity}.00</h4>
            <button onClick={() => delFromCart(id)}>Borrar </button>
            <button onClick={() => delFromCart(id, true)}>Borrar All </button>
        </div>

    )
}

export default CartItem
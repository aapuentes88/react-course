
import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import CartItem from './CartItem'
import ProductItem from './ProductItem'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state

    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }

    const delFromCart = (id, all=false) => {
        console.log(id)
        if(all)
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        else
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    }

    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
            {products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
            })}
            </article>
            <h3>Carrito</h3>
            <article className="box">
            {cart.map((item, index) => { 
            return <CartItem key={index} data={item} delFromCart={delFromCart} />
            })}
            <button onClick={clearCart}>Limpiar Carrito</button>
            </article>

        </div>
    )
}

export default ShoppingCart
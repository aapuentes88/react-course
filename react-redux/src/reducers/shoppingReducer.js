import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types"

export const initialState = {
    products: [
        { id: 1, name: "Producto1", price: 100 },
        { id: 2, name: "Producto2", price: 200 },
        { id: 3, name: "Producto3", price: 300 },
        { id: 4, name: "Producto4", price: 400 },
        { id: 5, name: "Producto5", price: 500 }
    ],

    cart: [],
}



export function shoppingReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            {
                return state.cart.find((item) => item.id === action.payload) ?
                    { products: state.products, cart: state.cart.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item) }

                    : { products: state.products, cart: [...state.cart, { ...state.products.find((item) => item.id === action.payload), quantity: 1 }] }

            }
        case REMOVE_ONE_FROM_CART:
            {
                const itemToDelete = state.cart.find((item) => item.id === action.payload)

                return itemToDelete.quantity > 1 ?
                    { products: state.products, cart: state.cart.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item) }
                    : { products: state.products, cart: state.cart.filter((item) => item.id !== action.payload) }
            }
        case REMOVE_ALL_FROM_CART:
            return { products: state.products, cart: state.cart.filter((item) => item.id !== action.payload) }
        case CLEAR_CART:
            return initialState
        default:
            return state
    }
}
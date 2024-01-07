import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types"

export const initialState = { db: [] }

export function crudApiReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DATA:
            {
                return {db:[...state.db,action.payload]}
            }
        case READ_ALL_DATA:
            {
                return {db:action.payload}
            }
        case UPDATE_DATA:
            {
                return {db: state.db.map((item) => (item.id === action.payload.id) ? action.payload : item)}
            }
        case DELETE_DATA:
            {
                return {db: state.db.filter((item) => item.id !== action.payload)}
            }
        case NO_DATA:
            {
                return initialState
            }
        default:
            return state
    }
}
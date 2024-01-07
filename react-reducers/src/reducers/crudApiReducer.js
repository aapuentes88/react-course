import { TYPES } from "../actions/crudApiActions"

export const crudApiInitialState = { db: null }

export function crudApiReducer(state, action) {
    switch (action.type) {
        case TYPES.CREATE_DATA:
            {
                return {db:[...state.db,action.payload]}
            }
        case TYPES.READ_ALL_DATA:
            {
                return {db:action.payload}
            }
        case TYPES.UPDATE_DATA:
            {
                return {db: state.db.map((item) => (item.id === action.payload.id) ? action.payload : item)}
            }
        case TYPES.DELETE_DATA:
            {
                return {db: state.db.filter((item) => item.id !== action.payload)}
            }
        case TYPES.NO_DATA:
            {
                return crudApiInitialState
            }
        default:
            return state
    }
}
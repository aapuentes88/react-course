import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types"

export const createAction = (data) => { return ({type:CREATE_DATA, payload:data})}

export const  readAllAction = (data) => {return ({type:READ_ALL_DATA, payload:data})}
    
export const updateAction = (data) => {return ({type:UPDATE_DATA, payload:data})}
    
export const deleteAction = (id) => {return ({type:DELETE_DATA, payload:id})}
    
export const noAction = () => {return ({type:NO_DATA})}
    
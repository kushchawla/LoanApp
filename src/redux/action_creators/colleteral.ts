import {GET_COLLETERAL_LIST_SUCCESS} from '../action_constants'
import { ColleteralI, GET_COLLETERAL_SUCCESS_I, ColleteralDispatchI } from '../types/colleteralTypes'
import { Dispatch } from 'redux'
import {APP_API_URL, colleteralsList} from '../../constants/global'

export const getColleteralsSuccess = (colleterals:ColleteralI[]):GET_COLLETERAL_SUCCESS_I => {
    return {
        type : GET_COLLETERAL_LIST_SUCCESS,
        payload: colleterals 
    }
}

export const getColleterals = (id:any ) => async (dispatch:Dispatch<ColleteralDispatchI>) => { 
await fetch(APP_API_URL+colleteralsList+id)
.then(res => res.json())
.then(res =>{
    dispatch(getColleteralsSuccess(res))
})
.catch(err => console.log(err))

}

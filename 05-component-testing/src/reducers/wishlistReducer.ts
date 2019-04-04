import { Reducer } from "redux";
import {WishlistActions} from '../actions/wishlistAction'

export interface WishlistState {
  readonly ids: number[]
}

const initialState: WishlistState = {
  ids: []
}

const wishlistReducer: Reducer<WishlistState, WishlistActions> = (state = initialState, action): WishlistState => {
  switch (action.type) {
    case 'ADD_WISHLIST_ITEM':
      if (state.ids.includes(action.payload)) {
        return state
      }

      return {
        ids: [...state.ids, action.payload]
      }
    default:
      return state
  }
 }

 export default wishlistReducer

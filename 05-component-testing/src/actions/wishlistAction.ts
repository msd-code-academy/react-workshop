import { Action, ActionCreator } from "redux";
export const ADD_WISHLIST_ITEM = 'ADD_WISHLIST_ITEM'

export interface AddWishlistItemAction extends Action<typeof ADD_WISHLIST_ITEM> {
  payload: number
}

export type WishlistActions = AddWishlistItemAction

export const addWishlistItem = (id: number) => ({
  type: ADD_WISHLIST_ITEM,
  payload: id
})

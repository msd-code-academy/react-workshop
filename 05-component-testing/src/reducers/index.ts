import { combineReducers } from 'redux';
import wishlistReducer, { WishlistState } from './wishlistReducer';


const rootReducer = combineReducers({
  wishlistReducer: wishlistReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer

import { combineReducers } from 'redux';

// reducers
import productos from './productos.reducer';

export const rootReducers = combineReducers({
    productos,
});
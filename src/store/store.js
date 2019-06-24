import { createStore } from 'redux';

// initialState
import { rootReducers } from '../reducers/index';

const store = createStore( 
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log( "store modificado ", store.getState() );
});

export default store;
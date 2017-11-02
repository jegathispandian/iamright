import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

//middleware that logs Actions
const loggerMiddleWare = createLogger({ predicate: (getstate, action) => true });

export default function configureStore(initialState:any = undefined) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,  // lets us dispatch() functions
      loggerMiddleWare,
    ),
  );
  return createStore(rootReducer, initialState, enhancer);
}

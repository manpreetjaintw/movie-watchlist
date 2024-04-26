import { legacy_createStore as createStore,applyMiddleware } from "redux";
import rootReducers from "./redux/reducer/index";
import{ thunk as thunkMiddleware} from 'redux-thunk';

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware)
);

export default store;

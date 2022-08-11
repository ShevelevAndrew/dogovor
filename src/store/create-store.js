import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { searchAccessApi, createAccessApi, loginApi } from "../api/access"
import { getClientsApi } from "../api/clients"
import { accessReducer } from "./access"
import { loginReducer } from "./login"
import { clientsReducer } from "./clients"


const api = {
  searchAccessApi,
  loginApi,
  getClientsApi,
  createAccessApi
}
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["login"],
  whitelist: [],
};

const rootReducer = combineReducers({
  access: accessReducer,
  login: loginReducer,
  clients: clientsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(api),

    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
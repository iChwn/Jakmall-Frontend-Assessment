/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from "redux-persist"
import rootReducer from "module/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import sampleMiddleware from "./middleware/sampleMiddleware";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["checkout"]
}

export const history = createBrowserHistory({ basename: "/" })
const persistedReducer = persistReducer(persistConfig, rootReducer(history))

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, sampleMiddleware)
    ),
  );
  let persistor = persistStore(store)
  return {store, persistor};
}

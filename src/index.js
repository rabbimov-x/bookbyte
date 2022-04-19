import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from 'redux-saga' 
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReduser } from './redux/redusers/rootReaduser';
import './index.css';
import { ourSaga } from './redux/saga/saga';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReduser, compose( applyMiddleware(sagaMiddleware) ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
sagaMiddleware.run(ourSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {allReducers} from './reducers';

/**
 * Ta sử dụng hàm createStore để tạo store chứa allReducers.
 * Tiếp theo ta gói <App/> bên trong 1 component hỗ trợ của react-redux là Provider, nhờ đó tất cả component trong <App/> có thể truy cập được store.
 * @type {Root}
 */
const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

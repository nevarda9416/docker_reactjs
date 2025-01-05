/**
 Thông thường, ứng dụng sẽ có nhiều reducer nên phải gộp tất cả reducer lại để bỏ vào trong store.
 Sử dụng hàm combineReducer của redux để hợp nhất tất cả reducer thành 1 reducer là allReducers.
 **/
import {combineReducers} from 'redux';
import {counter} from './counter';

export const allReducers = combineReducers({
    counter,
    // add more reducers here
});
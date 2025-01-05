/**
 Tiếp theo định nghĩa counter reducer.
 Thay vì cộng trừ 1, ta sẽ cộng trừ payload đi kèm với action như đã nói ở trên.
 Nhớ thêm case default để trả về chính state đó khi không có action tương ứng.
 **/
export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};

/**
 Đầu tiên ta định nghĩa tất cả counter action.
 Để ý thêm parameter number cho các action để có thể tăng/giảm 1 giá trị theo ý muôn.
 Các action lúc này ngoài tên của nó ra (type), nó còn mang theo data là number (data đi kèm này thường được gọi là payload).
 **/
export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number,
    };
};
export const decrement = (number) => {
    return {
        type: "DECREMENT",
        payload: number,
    };
};
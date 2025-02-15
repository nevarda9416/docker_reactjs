export interface AuthSlice {
    isLoggedIn: boolean; // Trạng thái đã login hay chưa
    modalOpen: boolean; // Trạng thái đã mở modal hay chưa
    username: string; // Tên account
}
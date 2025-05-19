import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gold = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchGoldPrice = async () => {
        try {
            const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
                headers: {
                    'x-access-token': 'goldapi-1kuqrsmavdqazo-io',
                    'Content-Type': 'application/json'
                }
            });
            setPrice(response.data.price);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu giá vàng:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGoldPrice();

        const interval = setInterval(fetchGoldPrice, 60000); // cập nhật mỗi phút
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Giá Vàng Hiện Tại</h2>
            {loading ? <p>Đang tải...</p> : <p>Giá vàng: {price} USD/oz</p>}
        </div>
    );
};

export default Gold;

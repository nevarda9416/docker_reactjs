import React, {useEffect, useState} from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";
import {Line} from "react-chartjs-2";

// Register chart components
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

type GoldEntry = {
    date: string;
    list_price: number;
    market_price_forecast: number;
}

function Gold() {
    const [goldData, setGoldData] = useState<GoldEntry[]>([]);

    useEffect(() => {
        fetch("/gold.json") // File must be in /public
            .then(res => res.json())
            .then(data => setGoldData(data))
            .catch(err => console.error("Error loading gold data:", err));
    }, []);

    const chartData = {
        labels: goldData.map(entry => entry.date),
        datasets: [
            {
                label: "Giá vàng nhẫn niêm yết mua vào trong nước",
                data: goldData.map(entry => entry.list_price),
                borderColor: "gold",
                backgroundColor: "rgba(255, 215, 0, 0.2)",
                fill: false,
                tension: 0.3
            },
            {
                label: "Dự đoán giá vàng nguyên liệu mua vào trong nước",
                data: goldData.map(entry => entry.market_price_forecast),
                borderColor: "orange",
                backgroundColor: "rgba(255, 165, 0, 0.2)",
                fill: false,
                borderDash: [5, 5],
                tension: 0.3
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            tooltip: {enabled: true}
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: "Giá vàng (VND/1 chỉ)"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Ngày / Tháng / Năm"
                }
            }
        }
    };

    return (
        <div style={{maxWidth: "700px", margin: "auto", padding: "20px"}}>
            <h2>Biểu đồ theo dõi giá vàng</h2>
            <Line data={chartData} options={chartOptions}/>
        </div>
    );
}

export default Gold;
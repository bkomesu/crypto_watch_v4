import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import HistoryChart from "../Components/HistoryChart";
import CoinData from "../Components/CoinData";
import coinGecko from "../apis/coinGecko";

const CoinDetailPage = () => {
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const results = await coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "usd",
                    days: "1",
                },
            });

            console.log(results.data);
        };

        fetchData();
       }, []);

        const renderData = () => {
            return (
                <div className="coinlist">

                </div>
            );
        };

        return renderData();
    }

export default CoinDetailPage
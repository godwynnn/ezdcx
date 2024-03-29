'use client'

// import Plot from 'react-plotly.js';
import React from 'react';
import dynamic from 'next/dynamic'
import { w3cwebsocket } from 'websocket';
import { useEffect, useState, useRef } from 'react';
import { object } from 'yup';

// import Chart from '@/components/chart'

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });





function Chart() {
    //  client=w3cwebsocket('')
    const [chartData, setChartData] = useState({})

    const fetchChartData = async () => {
        const response = await fetch('https://x6w53ch2-5000.euw.devtunnels.ms/chart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/form-data',
            },
            body: JSON.stringify(data)

        })


        const obj = await response.json()
        console.log(obj.prices)
        let all_date = []
        let all_close = []
        let all_open = []
        let all_high = []
        let all_low = []

        const dates_time = Object.entries(obj.prices.Datetime)
        const closes = Object.entries(obj.prices.close)
        const opens = Object.entries(obj.prices.open)
        const highs = Object.entries(obj.prices.high)
        const lows = Object.entries(obj.prices.low)

        dates_time.forEach(val => {

            all_date.push((new Date(val[1]).getFullYear()).toString() +'-'+(new Date(val[1]).getMonth()).toString()+ '-' +(new Date(val[1]).getDate()).toString()+' '+(new Date(val[1]).getHours()).toString()+':'+(new Date(val[1]).getMinutes()).toString()+':'+(new Date(val[1]).getSeconds()).toString())

        })

        closes.forEach(val => {

            all_close.push(val[1])

        })


        opens.forEach(val => {

            all_open.push(val[1])

        })


        highs.forEach(val => {

            all_high.push(val[1])

        })


        lows.forEach(val => {

            all_low.push(val[1])

        })



        
        setChartData({
            dates: all_date,
            high:all_high,
            low:all_low,
            open:all_open,
            close:all_close
        })

    }
    console.log('dates',chartData.dates)

    const date = chartData.dates
    const close_data = chartData.close



    const high_data =chartData.high





    const low_data = chartData.low

    const open_data = chartData.open

    // console.log('open',open_data)


    const data = {
        "interval": "15m",
        "ticker": "BTC-USD",
        "symbol": "BTC-USD",
        "period": "5d",
        "bollinger": false
    }




    useEffect(() => {
        fetchChartData()

    }, [chartData])

    return (

        <Plot
            className={'lg:w-[100%] lg:h-[100%] max-lg:w-[100%] max-lg:h-[100%] md:w-[100%] '}
            data={[
                {
                    x: date,


                    open: open_data,
                    close: close_data,
                    high: high_data,
                    low: low_data,
                    type: 'candlestick',
                    mode: 'lines',
                    
                    // marker: { color: 'white' },
                    increasing: { line: { color: 'green' } },
                    decreasing: { line: { color: 'red' } },
                    // name: 'AAPL'

                },

                {
                    x: date,


                    y: high_data,
                    mode: 'lines',
                    // type: 'scatter',
                    // name: 'Scatter',
                    // marker: { color: 'grey' },
                    // increasing: { line: { color: 'yellow' } },
                    // decreasing: { line: { color: 'red' } },
                    // name: 'AAPL Low',

                },

            ]}
            layout={{
                title: '',
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: '#0B1215',

                dragmode: 'zoom', // Enable zooming without range slider
                xaxis: {
                    rangeslider: { visible: false } // Disable range slider
                },
                dragmode: 'zoom',
                margin: {
                    r: 10,
                    t: 25,
                    b: 40,
                    l: 60
                },
            }} />

    )
}

export default Chart
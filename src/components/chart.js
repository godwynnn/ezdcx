'use client'

// import Plot from 'react-plotly.js';
import React from 'react';
import dynamic from 'next/dynamic'
import { w3cwebsocket } from 'websocket';
import { useEffect, useState, useRef } from 'react';
import { object } from 'yup';
import { Urls } from '@/app/urls';
import { chartData } from './fetchdata';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from './fetchdata';
import { UseDispatch } from 'react-redux';
import { ChartAction } from '@/reducer/reducer';
// import Chart from '@/components/chart'

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });



const url=Urls()

function Chart() {
    //  client=w3cwebsocket('')
    const dispatch=useDispatch()
    const chartData=useSelector((state)=>state.reducer.chartreducer)
    
    // const [loading, setLoading] = useState(true)

    
    // console.log('dates',chartData)

    const date = chartData.dates
    const close_data = chartData.close



    const high_data = chartData.high





    const low_data = chartData.low

    const open_data = chartData.open

    // console.log('open',open_data)





    useEffect(() => {
        dispatch(ChartAction.setQuery({loading:true}))
        fetchChartData(null,dispatch)

    }, [])

    return (
        <>
            {
                chartData.loading? <span className="loading loading-bars text-white loading-lg"></span>
                : 
            

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

                    // dragmode: 'zoom', // Enable zooming without range slider
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
            }

        </>

    )
}

export default Chart
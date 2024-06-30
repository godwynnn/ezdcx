'use client'

// import Plot from 'react-plotly.js';
import React from 'react';
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef } from 'react';
import { object } from 'yup';
import { Urls } from '@/app/urls';
import { chartData } from './fetchdata';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from './fetchdata';
import { UseDispatch } from 'react-redux';
import { ChartAction } from '@/reducer/reducer';
import { w3cwebsocket as wS3 } from 'websocket';
// import Chart from '@/components/chart'

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });



const url = Urls()

function Chart(props) {
  //  client=w3cwebsocket('')
  const dispatch = useDispatch()
  const chartData = useSelector((state) => state.reducer.chartreducer)
  // client=new wS3('');

  // const [loading, setLoading] = useState(true)
  const [type,setType]=useState('candlestick')


  console.log('data', chartData)

  const date = chartData.dates
  const close_data = chartData.close



  const high_data = chartData.high





  const low_data = chartData.low

  const open_data = chartData.open
  const data = chartData.data

  // console.log('open',open_data)

  let chart_Data = {
    series: [{
      data: data,


    }],
    options: {
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          },
        },
        type: props.graph,
        height: 350,
        
      },
      title: {
        text: chartData.symbol,
        align: 'left',


      },
      grid: {
        // position: 'front',
        borderColor: '#444444',
        strokeDashArray: 1,
        
        xaxis: {
          lines: {
            show: true
          }
        }
      },

      xaxis: {
        type: 'datetime',


      },
      yaxis: {
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false,
          color: '#78909C',
          
      },
      labels:{
        formatter: function (value) {
          return (value/10000).toFixed(4);
        },
        // offsetX:-1,
      },
      dataLabels:{
        enabled:false,
      },
      opposite: true

      
      },
    
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#1654B0',
            downward: '#BD0C0C'
          }
        }
      },





    },


  }




  useEffect(() => {
    // dispatch(ChartAction.setQuery({ loading: true }))
    // fetchChartData(null,dispatch)

  }, [])

  return (
    <>
      {
        chartData.loading ? <span className="loading loading-bars text-white loading-lg"></span>
          :
          <>

            <div className={'p-0  m-0 lg:w-[100%] lg:h-[100%] max-lg:w-[100%] max-lg:h-[100%] md:w-[100%] max-md:h-[100%] sm:h-[100%] max-sm:h-[100%] '}>
              {/* {props.graph === 'PLOTLY' ?

                <Plot
                  className={'p-0  m-0 lg:w-[100%] lg:h-[100%] max-lg:w-[100%] max-lg:h-[100%] md:w-[100%] '}
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
                      increasing: { line: { color: '#1654B0' } },
                      decreasing: { line: { color: '#BD0C0C' } },
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
                    dragmode: 'pan',
                    margin: {
                      r: 0,
                      t: 0,
                      b: 40,
                      l: 60
                    },
                    showlegend: false,
                    modebar: {
                      orientation: 'v'
                    }
                  }} />

                : */}
                <ApexCharts series={chart_Data.series} options={chart_Data.options} type='candlestick' width={'100%'} height={500} className={'p-1  m-0 lg:w-[100%] lg:h-[100%] max-lg:w-[100%] max-lg:h-[100%] md:w-[100%] max-md:h-[100%] sm:h-[100%] max-sm:h-[100%] max-sm:w-[100%] '} />


              {/* } */}

            </div>
          </>


      }


    </>

  )
}

export default Chart
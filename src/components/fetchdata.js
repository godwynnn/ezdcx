import { useState } from "react"

import { UseDispatch, useDispatch } from "react-redux"
import { ChartAction } from "@/reducer/reducer"

// const [chartData, setChartData] = useState({})



export const fetchChartData = async (data) => {

    // const dispatch=useDispatch()
    // console.log(data)

    switch (data) {
        case !null:
            
        let res = await fetch(url.chart, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/form-data',
            },
            body: JSON.stringify(data)
    
        })
    
    
        var obj = await res.json()
        console.log(obj.prices)
        if (obj.status === 200) {
    
    
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
    
                all_date.push((new Date(val[1]).getFullYear()).toString() + '-' + (new Date(val[1]).getMonth()).toString() + '-' + (new Date(val[1]).getDate()).toString() + ' ' + (new Date(val[1]).getHours()).toString() + ':' + (new Date(val[1]).getMinutes()).toString() + ':' + (new Date(val[1]).getSeconds()).toString()+':'+(new Date(val[1]).getMilliseconds()).toString())
    
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
    
    
    
            const chart_data={
                dates: all_date,
                high: all_high,
                low: all_low,
                open: all_open,
                close: all_close,
                searched_with_post:true
                
            }
            dispatch(ChartAction.setQuery(chart_data))
            // setChartData({
            //     dates: all_date,
            //     high: all_high,
            //     low: all_low,
            //     open: all_open,
            //     close: all_close
            // })
            // setLoading(false)
    
    
        }
    
        default:
            var res = await fetch(url.chart, {
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/form-data',
                },
               
            })
        
        
            var obj = await response.json()
            console.log(obj.prices)
            if (obj.status === 200) {
        
        
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
        
                    all_date.push((new Date(val[1]).getFullYear()).toString() + '-' + (new Date(val[1]).getMonth()).toString() + '-' + (new Date(val[1]).getDate()).toString() + ' ' + (new Date(val[1]).getHours()).toString() + ':' + (new Date(val[1]).getMinutes()).toString() + ':' + (new Date(val[1]).getSeconds()).toString()+':'+(new Date(val[1]).getMilliseconds()).toString())
        
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
        
        
        
                const chart_data={
                    dates: all_date,
                    high: all_high,
                    low: all_low,
                    open: all_open,
                    close: all_close,
                    searched_with_post:false
                    
                }
                dispatch(ChartAction.setQuery(chart_data))
                // setChartData({
                //     dates: all_date,
                //     high: all_high,
                //     low: all_low,
                //     open: all_open,
                //     close: all_close
                // })
                // setLoading(false)
        
        
            }
    }
    
}
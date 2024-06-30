import { useState } from "react"

import { UseDispatch, useDispatch } from "react-redux"
import { ChartAction } from "@/reducer/reducer"
import { Urls } from "@/app/urls"

// const [chartData, setChartData] = useState({})


const url = Urls()
export const fetchChartData = async (data, dispatch) => {


   
    console.log('fetching post..')
    dispatch(ChartAction.setQuery({ loading: true }))



    let res = await fetch(url.chart, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/form-data',
        },
        body: JSON.stringify(data)

    })


    var obj = await res.json()
    console.log('fetch data', obj)

    // APEXCHARTS
    if (obj.status==="success"){

        console.log('yes')
    
    const entry = ''
    const all_dates = Object.entries(obj.prices.datetime)
    const all_highs = Object.entries(obj.prices.high)
    const all_opens = Object.entries(obj.prices.open)
    const all_closes = Object.entries(obj.prices.close)
    const all_lows = Object.entries(obj.prices.low)

    all_dates.forEach((val, idx) => {

        all_highs.forEach(val => {
            return val
        })
        all_opens.forEach(val => {
            return val
        })
        all_lows.forEach(val => {
            return val
        })
        all_closes.forEach(val => {
            return val
        })

        if (idx === all_opens.indexOf(all_opens[idx])) {
            val[2] = parseFloat(all_opens[idx][1])
            

        }
        if (idx === all_highs.indexOf(all_highs[idx])) {
            val[3] = parseFloat(all_highs[idx][1])
            
        }

        if (idx === all_lows.indexOf(all_lows[idx])) {
            val[4] = parseFloat(all_lows[idx][1])
            

        }
        if (idx === all_closes.indexOf(all_closes[idx])) {
            val[5] = parseFloat(all_closes[idx][1])
            

        }
        // let obj_data=val.slice(1,val.length)
        // console.log('hartDta',val)
        val.splice(0,1)
        // console.log('hartDta',val)
        return val




    })
    let all_data=all_dates
    console.log('dates_holder', all_data)











    // PLOTLY JS
   

        let all_date = []
        let all_close = []
        let all_open = []
        let all_high = []
        let all_low = []

        const dates_time = Object.entries(obj.prices.datetime)
        const closes = Object.entries(obj.prices.close)
        const opens = Object.entries(obj.prices.open)
        const highs = Object.entries(obj.prices.high)
        const lows = Object.entries(obj.prices.low)

        dates_time.forEach(val => {

            all_date.push((new Date(val[1]).getFullYear()).toString() + '-' + (new Date(val[1]).getMonth()).toString() + '-' + (new Date(val[1]).getDate()).toString() + ' ' + (new Date(val[1]).getHours()).toString() + ':' + (new Date(val[1]).getMinutes()).toString() + ':' + (new Date(val[1]).getSeconds()).toString() + ':' + (new Date(val[1]).getMilliseconds()).toString())

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
        

        console.log('fetch data', data)

        const chart_data = {
            dates: all_date,
            high: all_high,
            low: all_low,
            open: all_open,
            close: all_close,
            searched_with_post: true,
            loading: false,
            symbol: data.ticker,
            data:all_data,
            interval:data.interval,
            interval_duration:data.interval_duration,
            period:data.period,
            period_duration:data.period_duration,

        }
        console.log(chart_data)
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

    // switch (data) {


    //     case null:
    //         console.log('fetching get..')
    //         const respose = await fetch(url.chart)


    //         var obj = await respose.json()
    //         console.log(obj.prices)
    //         if (obj.status === 200) {


    //             let all_date = []
    //             let all_close = []
    //             let all_open = []
    //             let all_high = []
    //             let all_low = []

    //             const dates_time = Object.entries(obj.prices.Datetime)
    //             const closes = Object.entries(obj.prices.close)
    //             const opens = Object.entries(obj.prices.open)
    //             const highs = Object.entries(obj.prices.high)
    //             const lows = Object.entries(obj.prices.low)

    //             dates_time.forEach(val => {

    //                 all_date.push((new Date(val[1]).getFullYear()).toString() + '-' + (new Date(val[1]).getMonth()).toString() + '-' + (new Date(val[1]).getDate()).toString() + ' ' + (new Date(val[1]).getHours()).toString() + ':' + (new Date(val[1]).getMinutes()).toString() + ':' + (new Date(val[1]).getSeconds()).toString() + ':' + (new Date(val[1]).getMilliseconds()).toString())

    //             })

    //             closes.forEach(val => {

    //                 all_close.push(val[1])

    //             })


    //             opens.forEach(val => {

    //                 all_open.push(val[1])

    //             })


    //             highs.forEach(val => {

    //                 all_high.push(val[1])

    //             })


    //             lows.forEach(val => {

    //                 all_low.push(val[1])

    //             })



    //             const chart_data = {
    //                 dates: all_date,
    //                 high: all_high,
    //                 low: all_low,
    //                 open: all_open,
    //                 close: all_close,
    //                 searched_with_post: false,
    //                 loading: false

    //             }
    //             dispatch(ChartAction.setQuery(chart_data))
    //             // setChartData({
    //             //     dates: all_date,
    //             //     high: all_high,
    //             //     low: all_low,
    //             //     open: all_open,
    //             //     close: all_close
    //             // })
    //             // setLoading(false)


    //         }

    //     default:
    //         console.log('fetching post..')
    //         dispatch(ChartAction.setQuery({loading:true}))



    //         let res = await fetch(url.chart, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                 // 'Content-Type': 'application/form-data',
    //             },
    //             body: JSON.stringify(data)

    //         })


    //         var obj = await res.json()
    //         console.log(obj)
    //         if (obj.status === 200) {


    //             let all_date = []
    //             let all_close = []
    //             let all_open = []
    //             let all_high = []
    //             let all_low = []

    //             const dates_time = Object.entries(obj.prices.Datetime)
    //             const closes = Object.entries(obj.prices.close)
    //             const opens = Object.entries(obj.prices.open)
    //             const highs = Object.entries(obj.prices.high)
    //             const lows = Object.entries(obj.prices.low)

    //             dates_time.forEach(val => {

    //                 all_date.push((new Date(val[1]).getFullYear()).toString() + '-' + (new Date(val[1]).getMonth()).toString() + '-' + (new Date(val[1]).getDate()).toString() + ' ' + (new Date(val[1]).getHours()).toString() + ':' + (new Date(val[1]).getMinutes()).toString() + ':' + (new Date(val[1]).getSeconds()).toString() + ':' + (new Date(val[1]).getMilliseconds()).toString())

    //             })

    //             closes.forEach(val => {

    //                 all_close.push(val[1])

    //             })


    //             opens.forEach(val => {

    //                 all_open.push(val[1])

    //             })


    //             highs.forEach(val => {

    //                 all_high.push(val[1])

    //             })


    //             lows.forEach(val => {

    //                 all_low.push(val[1])

    //             })



    //             const chart_data = {
    //                 dates: all_date,
    //                 high: all_high,
    //                 low: all_low,
    //                 open: all_open,
    //                 close: all_close,
    //                 searched_with_post: true,
    //                 loading: false

    //             }
    //             dispatch(ChartAction.setQuery(chart_data))
    //             // setChartData({
    //             //     dates: all_date,
    //             //     high: all_high,
    //             //     low: all_low,
    //             //     open: all_open,
    //             //     close: all_close
    //             // })
    //             // setLoading(false)


    //         }

    // }

}
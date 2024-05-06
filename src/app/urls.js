export const Urls=()=>{

    const local='https://tradingapi-74d6.onrender.com'
    // const local='https://x6w53ch2-5000.euw.devtunnels.ms'
    return{
        login:`${local}/login`,
        signup:`${local}/signup`,
        chart: `${local}/chart`,
        ticker:`${local}/ticker`,
        create:`${local}/add_plan`,
        packages:`${local}/get_services`,
        change_price:`${local}/get_prices`,
        payment:`${local}/subscribe_user`,
        test:`${local}/test`,
        subscription_data:`${local}/get_subscription`,
        create_video:  `${local}/add_videos`,
        videos:`${local}/videos`,

        logout:''

    }
}


// const x='6'
// console.log(Array(x).keys())
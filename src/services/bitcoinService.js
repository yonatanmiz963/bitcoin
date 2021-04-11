import Axios from 'axios'
// import {httpService} from './http.service'


export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
    getAverageBlock
}

async function getRate(coins = 'USD', value = 1) {
    try {
        const bitcoinRate = await Axios.get(`https://blockchain.info/tobtc?currency=${coins}&value=${value}`)
        return bitcoinRate.data
    } catch (err) {
        console.log('err:', err)
    }
}

async function getMarketPrice() {
    try {
        if (localStorage.getItem('marketPrice')) {
            console.log('from storage');
            return JSON.parse(localStorage.getItem('marketPrice'))
        } else {
            console.log('from API');
            const marketPrice = await Axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            console.log('marketPrice:', marketPrice)
            localStorage.setItem('marketPrice', JSON.stringify(marketPrice.data))
            return marketPrice.data
        }
    } catch (err) {
        console.log('err:', err)
    }
}

async function getConfirmedTransactions() {
    try {
        if (localStorage.getItem('confirmedTransactions')) {
            console.log('from storage');
            return JSON.parse(localStorage.getItem('confirmedTransactions'))
        } else {
            console.log('from API');
            const confirmedTransactions = await Axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
            console.log('confirmedTransactions:', confirmedTransactions)
            localStorage.setItem('confirmedTransactions', JSON.stringify(confirmedTransactions.data))
            return confirmedTransactions.data
        }
    } catch (err) {
        console.log('err:', err)
    }
}

async function getAverageBlock() {
    try {
        if (localStorage.getItem('averageBlock')) {
            console.log('from storage');
            return JSON.parse(localStorage.getItem('averageBlock'))
        } else {
            console.log('from API');
            const averageBlock = await Axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
            console.log('averageBlock:', averageBlock)
            localStorage.setItem('averageBlock', JSON.stringify(averageBlock.data))
            return averageBlock.data
        }
    } catch (err) {
        console.log('err:', err)
    }
}

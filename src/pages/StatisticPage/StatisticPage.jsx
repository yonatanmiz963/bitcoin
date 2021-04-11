
import { Component } from 'react'
import { Chart } from '../../components/Chart'
import { bitcoinService } from '../../services/bitcoinService'

import './StatisticPage.scss'
// edit to ContactApp
export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null,
        averageBlock: null
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadConfirmedTransacations()
        this.loadAverageBlock()
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    async loadAverageBlock() {
        const averageBlock = await bitcoinService.getAverageBlock()
        this.setState({ averageBlock })
    }

    async loadConfirmedTransacations() {
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ confirmedTransactions })
    }

    render() {
        const { marketPrice, averageBlock, confirmedTransactions } = this.state
        return (
            marketPrice && confirmedTransactions && averageBlock && <div className="statistic-page">
                <Chart color="yellow" data={marketPrice} />
                <Chart color="blue" data={confirmedTransactions} />
                <Chart color="red" data={averageBlock} />
            </div>
        )
    }
}

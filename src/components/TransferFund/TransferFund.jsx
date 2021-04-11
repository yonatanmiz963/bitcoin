
import { Component } from 'react'
import { userService } from '../../services/userService'
import { addMove } from '../../store/actions/userActions'
import { connect } from 'react-redux'


import './TransferFund.scss'

class _TransferFund extends Component {
    state = {
        toId: "",
        to: "",
        at: null,
        amount: 0
    }

    componentDidMount() {
        this.getEmptyMove()
    }

    async getEmptyMove() {
        const state = await userService.getEmptyMove()
        state.toId = this.props.contact._id
        state.to = this.props.contact.name
        this.setState({ ...state })
    }

    onTransferCoins = async (ev) => {
        try {
            ev.preventDefault()
            console.log(this.state);
            await this.props.addMove({ ...this.state })
            console.log('added move');
            this.getEmptyMove()

        } catch (err) {
            console.log('err:', err)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ ...prevState, [field]: value }))
    }

    render() {
        const { contact } = this.props
        const { amount } = this.state
        return (
            <div className="transfer">
                <h3>Transfer coins to {contact.name}</h3>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input required type="number" id="amount" value={amount} onChange={this.handleChange} name="amount" />
                </div>
                <button onClick={this.onTransferCoins}>Transfer</button>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    addMove
}

export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund)
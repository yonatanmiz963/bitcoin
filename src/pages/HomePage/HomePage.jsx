
import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import Coins from '../../assets/imgs/coins.png';
import Bitcoin from '../../assets/imgs/bitcoin.png';
import './HomePage.scss'
import { loadUser } from '../../store/actions/userActions'
import { connect } from 'react-redux'
import { MovesList } from '../../components/MovesList/MovesList';


class _HomePage extends Component {

    state = {
        currRate: null
    }

    componentDidMount() {
        this.getCurrRate()
    }

    componentWillUnmount() {

    }

    async getCurrRate() {
        const currRate = await bitcoinService.getRate()
        this.setState({ currRate })
    }

    render() {
        const { currRate } = this.state
        const { user } = this.props
        if (!user) return <div>Loading...</div>
        return (
            user && <section>
                <div className="home-page flex column align-start">
                    <div className="username-wrapper">
                        <h2>Hello {user.name}</h2>
                    </div>
                    <div>
                        <div className="coins-wrapper flex align-center">
                            <img src={Coins} alt="coins" />
                            <h2>Coins: ${user.balance}</h2>
                        </div>
                    </div>
                    <div className="flex align-center">
                        <img src={Bitcoin} alt="bitcoin" />
                        <h2>BTC: {currRate}</h2>
                    </div>
                </div>
                {user.moves.length && <div className="move-list-wrapper flex justify-center">
                    <MovesList className="move-list" showContact={true} title="Your last 3 Moves:" movesList={user.moves.slice(0, 3)} />
                </div>}
            </section>
        )
    }
}




const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    loadUser
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
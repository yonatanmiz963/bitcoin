
import { Component } from 'react'
import { connect } from 'react-redux'
import './SignUp.scss'
import { signUp } from '../../store/actions/userActions'
import bitcoinImage from '../../assets/imgs/bitcoin.png'


class _SignUp extends Component {

    state = {
        name: '',
        balance: 100,
        moves: []
    }

    componentDidMount() {
        console.log(this.props);
    }

    onSignUp = async (ev) => {
        try {
            ev.preventDefault()
            await this.props.signUp(this.state)
            this.props.history.push('/contact')

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
        const { name } = this.state
        return (
            <div className="sign-up-wrapper">
                {/* <img src={bitcoinImage} alt="bitcoin" /> */}
                <div className="sign-up">
                    <label htmlFor="name">Enter your name:</label>
                    <input required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                    <button onClick={this.onSignUp}>Sign Up</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    signUp
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp)

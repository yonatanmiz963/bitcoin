
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import Contact from '../../assets/imgs/contact.png'
import './ContactDetailsPage.scss'
import { TransferFund } from '../../components/TransferFund/TransferFund'
import { MovesList } from '../../components/MovesList/MovesList'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserEdit } from '@fortawesome/free-solid-svg-icons'



class _ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }
    get contactMovesList() {
        return this.props.movesList.filter(move => move.toId === this.state.contact._id)
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading contact...</div>
        return (
            <div className="contact-details flex column justify-center align-center">
                <div className="btn-wrapper flex space-between align-center">
                    <Link className="back-btn" to="/contact"><FontAwesomeIcon className="icon" icon={faArrowLeft} />Back</Link>
                    <Link className="edit-btn" to={'/contact/edit/' + contact._id}>Edit <FontAwesomeIcon className="icon" icon={faUserEdit} /></Link>
                </div>
                <div className="details-wrapper">
                    <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="contact" />
                    <h2 className="name">Name: {contact.name}</h2>
                    <h3 className="phone">Phone: {contact.phone}</h3>
                    <h3 className="email">Email: {contact.email}</h3>
                </div>
                <div className="transfer-wrapper">
                    <TransferFund contact={contact} />
                </div>
                <div className="moves-list-wrapper">
                    {this.contactMovesList.length > 0 && <MovesList showContact={false} movesList={this.contactMovesList} title="Your Moves:" />}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        movesList: state.userReducer.user.moves
    }
}

const mapDispatchToProps = {

}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)
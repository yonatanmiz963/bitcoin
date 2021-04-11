
import { Component } from 'react'
import { connect } from 'react-redux'
import './ContactPage.scss'
import { ContactList } from '../../components/ContactList'
import { ContactFilter } from '../../components/ContactFilter'
import { Link } from 'react-router-dom'
import { loadContacts } from '../../store/actions/contactActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class _ContactPage extends Component {

    state = {
        filterBy: null
    }

    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }

    componentWillUnmount() {

    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, () => { this.props.loadContacts(filterBy) })
    }

    render() {
        const { contacts, onSelectContact } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <div className="contact-page">
                <div className="filter-wrapper flex justify-center align-center">
                    <ContactFilter onFilter={this.onFilter} />
                    <Link className="add-btn" to="/contact/edit"><FontAwesomeIcon className="icon" icon={faPlus} /><p>Add Contact</p></Link>
                </div>
                <ContactList onSelectContact={onSelectContact} contacts={contacts} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
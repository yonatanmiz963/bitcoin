import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../../services/contactService'
import './ContactEditPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrashAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons'


export class ContactEditPage extends Component {

    state = {
        contact: null,
        errMsg: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            console.log('contact:', contact)
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log(this.state.contact);
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    onRemoveContact = async () => {
        console.log(this.state.contact);
        await contactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading...'}</div>
        const { name, phone, email, _id } = this.state.contact
        return (
            <div>
                <div className="btn-wrapper flex space-between align-center">
                    {!_id && <Link className="back-btn" to="/contact"><FontAwesomeIcon className="icon" icon={faArrowLeft} />Back</Link>}
                    {_id && <Link className="back-btn" to={`/contact/` + _id} ><FontAwesomeIcon className="icon" icon={faArrowLeft} />Back</Link>}
                    {_id && <button className="delete-btn" onClick={this.onRemoveContact}>Delete<FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>}
                </div>
                <form className='contact-edit' onSubmit={this.onSaveContact}>

                    {_id ? <h2>Edit Contact</h2> : <h2>Add Contact</h2>}
                    <div className="name-wrapper">

                        <label htmlFor="name">Name</label>
                        <input autoFocus required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                    </div>
                    <div className="phone-wrapper">

                        <label htmlFor="phone">Phone</label>
                        <input required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />
                    </div>
                    <div className="email-wrapper">

                        <label htmlFor="email">Email</label>
                        <input required type="text" id="email" value={email} onChange={this.handleChange} name="email" />
                    </div>

                    {this.state.errMsg && <p>{this.state.errMsg}</p>}
                    <button>Save <FontAwesomeIcon className="icon" icon={faUserPlus} /></button>
                </form>
            </div>
        )
    }
}

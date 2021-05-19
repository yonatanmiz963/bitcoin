
import { Component } from 'react'

import './ContactList.scss'
import { ContactPreview } from '../ContactPreview'

export class ContactList extends Component {

    render() {
        const { contacts, onSelectContact } = this.props
        return (
            contacts && <div>
                <ul className="contact-list flex">
                    {contacts.map(contact => <li className="contact-preview-li" key={contact._id}><ContactPreview onSelectContact={onSelectContact} key={contact._id} contact={contact} /></li>)}
                </ul>
            </div>
        )
    }
}

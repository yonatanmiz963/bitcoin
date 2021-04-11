
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './ContactPreview.scss'
import Contact from '../../assets/imgs/contact.png'

export class ContactPreview extends Component {
    render() {
        const { contact } = this.props
        return (
            <Link to={'/contact/' + contact._id}>
                <div className="contact-preview flex align-center">
                    <img src={Contact} alt="contact" />
                    <h3>{contact.name}</h3>
                </div>
            </Link>
        )
    }
}

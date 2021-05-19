
import { Link } from 'react-router-dom'
import './ContactPreview.scss'
import Contact from '../../assets/imgs/contact.png'

export function ContactPreview({ contact }) {
    // const { contact } = this.props
    return (
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview flex align-center">
                <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="contact" />
                <h3>{contact.name}</h3>
            </div>
        </Link>
    )
}

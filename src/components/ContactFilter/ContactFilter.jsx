
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {

    state = {
        term: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onFilter({ ...this.state })
        })
    }
    render() {
        const { term } = this.state
        return (
            <div>
                <form className="contact-filter flex align-center" onSubmit={(ev) => ev.preventDefault()}>
                    <label htmlFor="term">Search</label>
                    <input autoFocus type="text" id="term" name="term" value={term} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

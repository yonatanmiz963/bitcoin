
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const _AppHeader = (props) => {

    return (
       <div className="app-header flex space-between align-center" >
           <div className="logo-wrapper">
               <h3>Mister-bitCoin</h3>
           </div>
            <ul className="header-nav flex justify-center align-center">
                <li><NavLink to="/contact" activeClassName="link active-nav"><p>Contacts</p><FontAwesomeIcon className="icon" icon={faAddressBook} /></NavLink></li>
                <li><NavLink to="/statistic" activeClassName="link active-nav"><p>Statistics</p><FontAwesomeIcon className="icon" icon={faChartLine} /></NavLink></li>
                <li><NavLink exact to="/" activeClassName="link active-nav"><p>Home</p><FontAwesomeIcon className="icon" icon={faHome} /></NavLink></li>
            </ul>
        </div>
    )
}


export const AppHeader = withRouter(_AppHeader)

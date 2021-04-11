

import { MovePreview } from '../MovePreview'
import './MovesList.scss'

export function MovesList({ title, movesList, showContact }) {
    return (
        <div className="moves-list-section flex column align-center">
            <div className="title-wrapper">
                <h2>{title}</h2>
            </div>
            <ul className="moves-list flex column justify-center align-center">
                {movesList.map((move, idx) => <li key={idx}><MovePreview move={move} showContact={showContact} /></li>)}
            </ul>
        </div>
    )
}




import './MovePreview.scss'
import React from 'react';
import moment from 'moment'

export function MovePreview({ move, showContact }) {
    return (
        <div className="move-preview">
            {showContact && <h3>To: {move.to}</h3>}
            <h3>At: {moment(move.at).format('llll')}</h3>
            <h3>Amount: {move.amount} coins</h3>
        </div>
    )
}


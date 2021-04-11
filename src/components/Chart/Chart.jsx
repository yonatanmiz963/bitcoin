import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './Chart.scss'

export function Chart({ color, data }) {
    console.log(data);
    return (
        <div className="chart">
            <h3>{data.name}</h3>
            <Sparklines data={data.values.map(value => value.y)}>
                <SparklinesLine color={color} />
            </Sparklines>
            <h3>{data.description}</h3>
        </div>
    )
}

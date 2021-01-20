import React from 'react';
import Arrow from '../arrow';

export default function ArrowContainer() {

    const divStyle = {
        display: 'block',
        width: '140px',
        height: '140px',
        position: 'absolute'
    }
    const columnOneThree = {
        width: '120px',
        height: '40px',
        position: 'fixed',
        writingMode: 'vertical-rl',
        paddingTop: '50px',
        alignContent: 'center',
        paddingLeft: '20px',

    }
    const columnTwo = {
        width: '40px',
        height: '120px',
        position: 'fixed',
        paddingLeft: '25px',
        paddingTop: '10px',

    }
    return (
        <div style={divStyle} id="arrows-container">
            <div style={columnTwo}>
                <Arrow id='up' />
                <Arrow id='down' />
            </div>
            <div style={columnOneThree}>
                <Arrow id='right' />
                <Arrow id='left' />
            </div>
        </div>

    )
}
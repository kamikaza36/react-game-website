import React from 'react';
import maleChar from '../../assets/images/m1.png';
import femaleChar from '../../assets/images/f1.png';
import { useSelector } from 'react-redux';

function Sprite({ data }) {
    const { position, gender } = useSelector(state => ({
        position: state.position,
        gender: state.gender,
    }));

    console.log('here' + position)
    const { x, y, h, w } = data;
    const char = gender === 'Male' ? maleChar : femaleChar;

    const spriteStyle = {
        position: 'absolute',
        left: position.x,
        top: position.y,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${char})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${x}px -${y}px`,
    }

    return (
        <div
            id='sprite'
            style={spriteStyle}
        />
    );
}

export default Sprite;
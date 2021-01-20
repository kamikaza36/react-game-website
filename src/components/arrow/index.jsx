import React from 'react';
import arrow from '../../assets/images/arrow.png'
import { useDispatch } from 'react-redux';
import { arrowAction } from '../../actions';

export default function Arrow({ id }) {
    const dispatch = useDispatch();
    const clickArrow = (el) => {
        const arrowPressed = el.currentTarget.id.toUpperCase();
        dispatch(arrowAction({ type: arrowPressed }));
    }

    const imgStyle = {
        display: 'block',
        width: '50px',
        height: '40px',
    }

    const createArrowStyle = id => {
        const dirHash = {
            up: 'rotate(270deg)',
            down: 'rotate(90deg)',
            right: 'rotate(0deg)',
            left: 'rotate(180deg)',
        }

        let style = {
            display: 'inline-block',
            transform: 'rotate(-90deg)',
            width: '50px',
            height: '40px',
            backgroundImage: `url(${arrow})`,
            backgroundSize: 'cover',
        }
        switch (id) {
            case 'up':
                style.marginLeft = '20px';
                style.marginBottom = '40px';
                break;
            case 'down':
                style.marginLeft = '20px';
                break;
            case 'right':
                style.marginLeft = '40px';
                break;
            default:
                break;
        }
        style.transform = dirHash[id];
        return style;
    }

    let press;

    const mouseDown = (el) => {
        press = setInterval(clickArrow(el), 400);
        return press;
    }

    const mouseUp = () => {
        clearInterval(press);
    }


    return (
        <div style={createArrowStyle(id)} id={id}
            onClick={clickArrow}
            onTouchStart={press = mouseDown}
            onTouchEnd={mouseUp}
        >
            <span style={imgStyle}>

            </span>
            {/* <img src={arrow} alt='Arrow' style={imgStyle} /> */}
        </div>
    )
}
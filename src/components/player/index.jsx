import React from 'react';
import Character from '../character';
import useKeyPress from '../../hooks/use-key-press';
import { useSelector, useDispatch } from 'react-redux';
import { arrowAction } from '../../actions';

export default function Player() {
    const dispatch = useDispatch();

    const { direction, step, gender } = useSelector(state => ({
        direction: state.direction,
        step: state.step,
        gender: state.gender,
    }));

    const data = {
        w: 34,
        h: gender === 'Male' ? 44 : 54,
    }

    useKeyPress((e) => {
        if (e.key.includes('Arrow')) {
            const arrowPressed = e.key.replace('Arrow', '').toUpperCase();
            dispatch(arrowAction({ type: arrowPressed }));
        }
        e.preventDefault();
    });

    return <Character data={data} step={step} direction={direction} />;
}

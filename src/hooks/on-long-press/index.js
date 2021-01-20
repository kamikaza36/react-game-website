import { useDispatch, useSelector } from 'react-redux';
import { arrowAction } from '../../actions';
import useStore from '../use-store/useStore';
import { useState, useEffect, useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

export default function useLongPress() {
    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch, subscribe } = store;
    const [storeState, setStoreState] = useState(getState());

    useEffect(() => subscribe(() => setStoreState(getState()), []));

    const longPress = () => storeState.direction.longPress;

    const checkStateAndCallAction = (el) => {
        while (longPress()) {
            dispatch({ type: 'PRESS_DOWN' });
            const arrowDir = el.currentTarget.id;
            dispatch(arrowAction({ type: arrowDir }));
        }
        dispatch({ type: 'PRESS_UP' });
    };

    const hold = el => {
        setTimeout(() => {
            checkStateAndCallAction(el);
        }, 300);
    };

    return {
        onMouseDown: (el) => {
            dispatch({ type: 'PRESS_DOWN' });
            hold(el);
        },
        onMouseUp: () => (el) => {
            dispatch({ type: 'PRESS_UP' });
            hold(el);
        },
        onMouseLeave: () => (el) => {
            dispatch({ type: 'PRESS_UP' });
            hold(el);
        },
        onTouchStart: (el) => {
            dispatch({ type: 'PRESS_DOWN' });
            hold(el);
        },
        onTouchEnd: () => (el) => {
            dispatch({ type: 'PRESS_UP' });
            hold(el);
        },
    };
}
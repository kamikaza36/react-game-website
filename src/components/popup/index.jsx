import React from 'react';
import { useDispatch } from 'react-redux';
import { genderAction, popupActions } from '../../actions';

function Popup({ popupStyle }) {
    const dispatch = useDispatch();

    const closePopup = (el) => {
        dispatch(genderAction(el.target.value));
        dispatch(popupActions('popup_close'));
    };

    // popupStyle = {
    //     display: 'inline-grid',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '200px',
    //     width: '100px',
    //     position: 'fixed',
    //     backgroundColor: 'red',
    //     zIndex: '10',
    //     left: '50%',
    //     top: '25%',
    // }

    return (
        <div id='popup' style={popupStyle}>
            <button value='Male' onClick={closePopup}>
                Male
            </button>
            <button value='Female' onClick={closePopup}>
                Female
            </button>
        </div>
    );
}

export default Popup;

import { popupStyleAboutMe, popupStyleDefault, popupStyleClose } from './popupStyles';

const setPopup = (actionType, state) => {
    if (actionType === 'popup_about_me') {
        return ({ popup: 'about_me', popupStyle: popupStyleAboutMe });
    }
    if (actionType === 'popup_close') {
        return ({ popup: 'popup_close', popupStyle: popupStyleClose});
    }
}

const popupReducer = (state = { name: 'popup_choose_char', popupStyle: popupStyleDefault }, action) => {
    switch (action.type) {
        case 'popup_cv':
            return setPopup(action.type, state);
        case 'popup_github':
            return setPopup(action.type, state);
        case 'popup_about_me':
            return setPopup(action.type, state);
        case 'popup_projects':
            return setPopup(action.type, state);
        case 'popup_social':
            return setPopup(action.type, state);
        case 'popup_close':
            return setPopup(action.type, state)
        default:
            return state;
    }
}

export default popupReducer;

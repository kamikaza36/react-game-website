export const genderAction = (action) => {
    return {
        type: action
    }
}

export const directionAction = (action) => {
    switch (action) {
        case 'DOWN':
            return {
                type: 'DOWN_DIR'
            };
        case 'UP':
            return {
                type: 'UP_DIR'
            };
        case 'LEFT':
            return {
                type: 'LEFT_DIR'
            };
        case 'RIGHT':
            return {
                type: 'RIGHT_DIR'
            }
        default:
            return action;
    }
}

export const positionAction = (action) => {
    switch (action) {
        case 'DOWN':
            return {
                type: 'DOWN_POS'
            };
        case 'UP':
            return {
                type: 'UP_POS'
            };
        case 'LEFT':
            return {
                type: 'LEFT_POS'
            };
        case 'RIGHT':
            return {
                type: 'RIGHT_POS'
            }
        default:
            return action;
    }
}

export const stepAction = (action) => {
    switch (action) {
        case 'ADD_STEP':
            return {
                type: action,
            }
        case 'RESET_STEP':
            return {
                type: action,
            }
        default:
            return {
                type: action,
            };
    }
}

export const arrowAction = (action) => {
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    }
    return async (dispatch, getState) => {
        const oldDirection = getState().direction;
        await dispatch({ type: action.type + "_DIR" });
        if (directions[action.type.toLowerCase()] === oldDirection) {
            dispatch({ type: action.type + "_POS" });
            dispatch({ type: "ADD_STEP" });
        } else {
            dispatch({ type: "RESET_STEP" });
        }
    };
}

export const popupActions = (action) => {
    switch (action) {
        case 'popup_close':
            return {
                type: action,
            }
        case 'popup_about_me':
            return {
                type: action,
            }
        default:
            return {
                type: action,
            };
    }
}

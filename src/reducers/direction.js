const directions = {
    down_dir: 0,
    left_dir: 1,
    right_dir: 2,
    up_dir: 3,
}

const setDirection = (action, state) => {
    if (directions[action.toLowerCase()] === state) {
        return state;
    }
    return directions[action.toLowerCase()];
}

const directionReducer = (state = 0, action) => {
    switch (action.type) {
        case 'DOWN_DIR':
            return setDirection(action.type, state);
        case 'UP_DIR':
            return setDirection(action.type, state);
        case 'LEFT_DIR':
            return setDirection(action.type, state);
        case 'RIGHT_DIR':
            return setDirection(action.type, state);
        default:
            return state;
    }
}

export default directionReducer;

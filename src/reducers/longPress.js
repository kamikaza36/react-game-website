const longPress = (state = false, action) => {
    if (action.type === 'PRESS_DOWN') {
        return true;
    } else {
        return false;
    }
}

export default longPress;

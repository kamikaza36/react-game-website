const stepReducer = (state = 0, action) => {
    const maxSteps = 3;
    switch (action.type) {
        case 'ADD_STEP':
            return (state < maxSteps - 1 ? state + 1 : 0);
        case 'RESET_STEP':
            return 0;
        default:
            return state;
    }
}

export default stepReducer;

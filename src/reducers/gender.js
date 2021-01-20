const genderReducer = (state = 0, action) => {
    switch (action.type) {
        case 'Male':
            return 'Male';
        case 'Female':
            return 'Female';
        default:
            return state;
    }
}

export default genderReducer;

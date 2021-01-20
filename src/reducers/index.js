import { combineReducers } from 'redux';
import position from './position';
import direction from './direction';
import step from './step';
import gender from './gender';
import longPress from './longPress';
import popup from './popup';

const allReducers = combineReducers({
    position,
    direction,
    step,
    gender,
    longPress,
    popup,
});

export default allReducers;

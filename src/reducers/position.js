import { blockProjects, blockCv, blockGithub, blockSocial, blockAboutMe } from './blockValues';
import { allowProjects, allowCv, allowGithub, allowSocial, allowAboutMe, } from './allowValues';

const stepSize = 6;
const modifier = {
    down_pos: { x: 0, y: stepSize },
    left_pos: { x: -stepSize, y: 0 },
    right_pos: { x: stepSize, y: 0 },
    up_pos: { x: 0, y: -stepSize },
}

const setPosition = (action, state) => {
    const curX = state.x;
    const curY = state.y;

    const blockArr = [
        blockProjects,
        blockCv,
        blockGithub,
        blockSocial,
        blockAboutMe,
    ];

    const allowArr = [
        allowProjects,
        allowCv,
        allowGithub,
        allowSocial,
        allowAboutMe,
    ];

    const block = () => {
        let bl = false;
        if (x > 1426 || x < 42) {
            bl = true;
            return bl;
        }
    
        if (y > 936 || y < 8) {
            bl = true;
            return bl;
        }

        blockArr.forEach(el => {
            if (x > el.x1 && x < el.x2 && y > el.y1 && y < el.y2) {
                bl = true;
            }
        });

        allowArr.forEach(el => {
            if (
                (el.x === x - stepSize || el.x === x || el.x === x + stepSize)
                &&
                (el.y === y || el.y - stepSize === y || el.y - stepSize * 2 === y || el.y - stepSize * 3 === y)
            ) {
                bl = false;
            }
        });

        return bl;
    }
    
    const direction = action.toLowerCase();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    let x = curX + modifier[direction].x;
    let y = curY + modifier[direction].y;

    if (block()) {
        x = curX;
        y = curY;
    }

    if (x !== curX || y !== curY) {
        let xWin, yWin;

        xWin = x - vw / 2 + 17;
        yWin = y - vh / 2 + 22;

        window.scroll(xWin, yWin);
    }

    return ({ x, y });
}

const positionReducer = (state = { x: 700, y: 350 }, action) => {
    switch (action.type) {
        case 'DOWN_POS':
            return setPosition(action.type, state)
        case 'UP_POS':
            return setPosition(action.type, state)
        case 'LEFT_POS':
            return setPosition(action.type, state)
        case 'RIGHT_POS':
            return setPosition(action.type, state)
        default:
            return state;
    }
}

export default positionReducer;

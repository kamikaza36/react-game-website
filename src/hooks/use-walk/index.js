// import { useState } from "react"
// import { useSelector, useDispatch } from 'react-redux';
// import { arrowAction, s } from '../../actions'

// export default function useWalk(action) {
//     const dispatch = useDispatch();

//     const position = useSelector(state => state.position);
//     const direction = useSelector(state => state.direction);
//     const step = useSelector(state => state.step);

//     const maxSteps = 3;

//     const directions = {
//         down: 0,
//         left: 1,
//         right: 2,
//         up: 3,
//     }

//     const stepSize = 6;

//     const modifier = {
//         down: { x: 0, y: stepSize },
//         left: { x: -stepSize, y: 0 },
//         right: { x: stepSize, y: 0 },
//         up: { x: 0, y: -stepSize },
//     }

//     function move(action) {
//         // call action set POSITION
//         setPos(direction => {
//             const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//             const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//             let x = prev.x + modifier[direction].x;
//             let y = prev.y + modifier[direction].y;

//             if (x > 1326 || x < 142) {
//                 x = prev.x;
//             }

//             if (y > 806 || y < 34) {
//                 y = prev.y;
//             }

//             if (x !== prev.x || y !== prev.y) {
//                 let xWin, yWin;

//                 xWin = x - vw / 2 + 17;
//                 yWin = y - vh / 2 + 22;

//                 window.scroll(xWin, yWin);
//             }

//             return ({ x, y });
//         });
//     }

//     function walk(action) {
//         if (directions[action.toLowerCase()] === direction.toLowerCase()) {
//             move(action);
//             dispatch(stepAction('ADD_STEP'));
//         } else {
//             setStep(0);
//         }
//         return directions[action];
//     };

//     return {
//         walk,
//     }
// }

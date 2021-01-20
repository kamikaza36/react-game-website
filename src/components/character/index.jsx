import React from 'react';
import Sprite from '../sprite';
import { useSelector } from 'react-redux';

function Character({ data, direction, step }) {
  const { w, h } = data;
  const stepHash = {
    0: 3,
    2: 2,
    1: 0
  }

  return (
    <div className="Character">
      <Sprite
        data={{
          x: stepHash[step] * w,
          y: direction * h,
          w,
          h,
        }} />
    </div>
  );
}

export default Character;

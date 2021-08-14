// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

import React, { useRef, useState, useEffect } from 'react';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';
import { useGesture } from 'react-with-gesture';
import shuffle from 'lodash.shuffle'
import { useTransition, animated } from '@react-spring/web'
import { useSprings, interpolate } from 'react-spring';
import './StackingCard.css';

const fn = (tempArray, curIndex) => (index) => {
    if (curIndex === index) {
        return { y: (tempArray.length - 1) * 95, scale: 1.1, zIndex: tempArray.indexOf(index) }
    }
    return { y: tempArray.indexOf(index) * 40, scale: 1, immediate: false, zIndex: tempArray.indexOf(index) }
}
    
const DraggableList = ({ items }) => {
    const order = useRef(items.map((_, index) => index))// Store indices as a local ref, this represents the item order
 
    const [springs, setSprings] = useSprings(items.length, fn(order.current))    

    const changeHandler = (index) => {
        const curIndex = order.current.indexOf(index)
        const lastItem = items.length - 1
        const tempArray = order.current;
        if (curIndex !== lastItem) {
            // console.log('fidning index', index, 'in array', order.current);
            tempArray.splice(order.current.indexOf(index), 1);
            tempArray.push(index);
            setSprings(fn(tempArray, curIndex))
            console.log(curIndex,index)
        } 

        setTimeout(() => setSprings(fn(tempArray, false)), 800);
    } 
  
  return (
    <div class="content" style={{ height: items.length * 180 }}>
      {springs.map(({ zIndex, scale, y }, i) => (
        <animated.div
        //   {...bind(i)}
          key={i}
          style={{
            zIndex,
            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
          }}
          children={items[i]}
          onClick={() => changeHandler(i, zIndex)}
        />
      ))}
    </div>
  )
}

export default DraggableList


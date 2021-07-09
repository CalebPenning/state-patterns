import './ColoredCircles.css'
import Circle from '../Circle/Circle'
import ColorButtons from '../ColorButtons/ColorButtons'

import { useState } from 'react'

const getRandom = (min = 0, max = 100) => {
    return Math.random() * (max - min) + min
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([])

    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom() }])
    }

    const changePosition = idx => {
        setCircles(circles => (
            circles.map((circle, i) => (
                i === idx ? 
                {...circle, x: getRandom(), y: getRandom()}
                : circle
            ))
        ))
    }

    return (
        <div>
            <ColorButtons options={['peachpuff', 'lightsteelblue', 'aquamarine']} addCircle={addCircle} />
            {circles.map(({ color, x, y }, idx) => (
                <Circle 
                    changePosition={changePosition} 
                    color={color} 
                    idx={idx}
                    key={idx}
                    x={x} y={y} 
                />
            ))}
        </div>
    )
}

export default ColoredCircles
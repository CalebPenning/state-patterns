import './ColoredCircles.css'
import Circle from '../Circle/Circle'
import ColorButtons from '../ColorButtons/ColorButtons'

import { useState } from 'react'

const ColoredCircles = () => {
    const [circles, setCircles] = useState(['lightSalmon', 'peachpuff', 'lavender'])

    const addCircle = (color) => {
        setCircles(circles => [...circles, color])
    }
    return (
        <div>
            <ColorButtons options={['peachpuff', 'lightsteelblue', 'aquamarine']} addCircle={addCircle} />
            {circles.map((color, idx) => (
                <Circle color={color} idx={idx}  />
            ))}
        </div>
    )
}

export default ColoredCircles
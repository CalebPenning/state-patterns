import { useState } from "react"

const Counter = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    const clickUp = () => {
        setNum(num + 1)
    }

    const clickUp2 = () => {
        setNum2(num2 + 2)
    }

    return (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickUp}>Increment Number</button>
            <h3>Count Two: {num2}</h3>
            <button onClick={clickUp2}>Increment Number By Two</button>
        </div>
    )
}

export default Counter
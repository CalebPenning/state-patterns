import { useState } from "react"
import NumberButton from "../NumberButton/NumberButton"

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 11, 12, 18])
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num))
        console.log(`REMOVING ${num}`)
    }

    return (
        <ul>
            {numbers.map((n, idx) => (
               <NumberButton num={n} remove={remove} key={idx} />
            ))}
        </ul>
    )
}

export default NumbersList
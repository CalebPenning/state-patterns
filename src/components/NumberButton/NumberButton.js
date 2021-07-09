const NumberButton = ({ num, remove }) => {
    const doRemove = () => {
        remove(num)
    }

    return (
        <li>
            <button onClick={doRemove}>{num}</button>
        </li>
    )
}

export default NumberButton
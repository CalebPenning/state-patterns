import "./Circle.css"

const Circle = ({ color, idx, key, x, y, changePosition }) => {
    return (
        <div 
        className="Circle"
        style={
            {
                backgroundColor: color,
                position: "absolute",
                top: `${y}vh`,
                left: `${x}vw`
            }
        }>
            {idx + 1}
        </div>
    )
}

export default Circle
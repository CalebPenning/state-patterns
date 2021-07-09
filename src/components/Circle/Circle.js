import "./Circle.css"

const Circle = ({ color, idx }) => {
    return (
        <div 
        className="Circle"
        style={
            {backgroundColor: color}
        }>
            {idx + 1}
        </div>
    )
}

export default Circle
import './ColorButtons.css'

const ColorButtons = ({ options, addCircle }) => {
    return (
        <div className="ColorButtons">
            {options.map(color => (
            <button 
                onClick={() => addCircle(color)} 
                className="ColorButton-btn"
                style={{ backgroundColor: color }}
            >
                {color}
            </button>)
            )}
        </div>
    )
}

export default ColorButtons
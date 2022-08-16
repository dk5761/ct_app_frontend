import './customButton.css'

const CustomButton = ({ value, onClick, ...rest }) => {
    return <input type={"button"} className="btn-class" value={value} onClick={onClick} {...rest} />

}


export default CustomButton;
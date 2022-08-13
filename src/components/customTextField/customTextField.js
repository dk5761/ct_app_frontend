import './customTextField.css'


const CustomTextField = ({ labelText, value, handleOnChange, ...rest }) => {
    return <>
        <input type="text" placeholder={labelText} value={value} onChange={handleOnChange} {...rest} />
    </>
}

export default CustomTextField;
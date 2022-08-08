import './customTextField.css'


const CustomTextField = ({labelText, value, handleOnChange}) =>{
    return <>
        <input type="text" placeholder={labelText} value={value} onChange={(evt) => handleOnChange(evt.target.value)}/>
    </>
}

export default CustomTextField;
import './customTextField.css'


const CustomTextField = ({ type="text", labelText, value, handleOnChange, ...rest }) => {

    const label = labelText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

    return <div className='customText-container'>
        <label className='label-text'>{label}</label>
        <input type={type} className="textfield" placeholder={labelText} value={value} onChange={handleOnChange} {...rest} />
    </div>
}

export default CustomTextField;
import { useState } from 'react'
import styles from '../compStyles/Onboarding.module.scss'


const FormInput = (props) => {
    // Focused state
    const [focused, setFocused] = useState(false)

     //Show password state
    const [showPassword, setShowPassword] = useState(true)

    //Destructure Props
    const {label, type, errorMessage, onChange, id, ...inputProps} = props
    
    //This function shows error if a user moves to another field if he has not completed a field
    const handleFocus = (e) => {
        setFocused(true)
    }

    console.log(inputProps.name)

    // Displays password values
    const handleShowPassword = ()=> {
        setShowPassword(!showPassword) 
    }

  return (
    <div>
        <div className={`${styles.login_input_group}`}>
            <label htmlFor="fullname">{label}*</label>
            <input 
            {...inputProps}
            className={`${styles.login_input}`} 
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            type={inputProps.name==="password" ? `${showPassword ? 'password' : 'text'}` : type }
            />
            <span className={`${styles.errormessage}`}>{errorMessage}</span>
            {inputProps.name==="password" ? <span onClick={handleShowPassword} className={`${styles.show} text-xs cursor-pointer`}><p>{showPassword ? <p>Show</p> : <p>hide</p>}</p></span> : null}
          </div>
    </div>
  )
}

export default FormInput
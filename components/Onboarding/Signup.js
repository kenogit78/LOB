import { useState, useEffect } from 'react';
import styles from '../compStyles/Onboarding.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import google_img from '../../assets/google.png'
import Loader from './../Loader';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Router
import { useRouter } from 'next/router';

//Toast
import {toast} from 'react-toastify'

//Auth
import { signup, reset } from './../../auth/authSlice';
import FormInput from './FormInput';

function Signup() {
  //Form data state
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phone_number: '',
    username: '',
  })

  //Checked state
  const [checked, setChecked] = useState(false)

  //Show password state
  const [showPassword, setShowPassword] = useState("text")
  
  //Next Routes Initialization
  const router = useRouter();

  // Dispatch initilization
  const dispatch = useDispatch()
  
  // Selector Initializatio to get states from redux
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>
    state.auth
  )

  useEffect (() => {
    if(isError) {
      console.log(message)
    }

    if(isSuccess || user) {
      // router.push('/verifiedpage')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, dispatch])
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      fullname, email, password, phone_number, username
    }
    dispatch(signup(userData))
  }

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  
  
const { fullname, email, password, phone_number, username, agree } = formData

const onCheckToggle = (e) => {
  setChecked(!checked)
}

console.log(checked)

const inputs = [
  {
    type: "text", 
    id: 1, 
    placeholder: "Enter name",
    label: "Full name",
    name: "fullname",
    required: true,
  },
  {
    type: "email", 
    id: 2, 
    placeholder: "Enter Email",
    label: "Email",
    name: "email",
    errorMessage: "Should be a valid email",
    required: true,
  },
  {
    id: 3,
    type: "phone", 
    placeholder: 'phone',
    label: "Phone Number",
    name: 'phone_number',
    errorMessage: "Should be a valid phone number",
    required: true,
    pattern: `/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/`,
  },
  {
    id: 4,
    type: "text", 
    placeholder: 'Username',
    label: "Username",
    name: 'username',
    errorMessage: "Should be 3-16 characters and without special characters",
    required: true,
    pattern: "^[A-Za-z0-9]{3,16}$"
  },
  {
    id: 5,
    // type: showPassword ? 'password' : 'text', 
    placeholder: 'Password',
    label: "Password",
    name: 'password',
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    required: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  },   
]

  return (
      <div className={`${styles.login_container}`}>
        <div className={styles.heading}>
          <h1>Sign up</h1>
          <Link href="/login">Sign In</Link>
        </div>

        <form onSubmit={onSubmit}>
          <div className={`${styles.login_input_group}`}>
            {inputs.map((input) => (
              <FormInput 
              key={input.id} 
              {...input} 
              value={formData[input.name]} 
              onChange={onChange}
              />
              ))}
              <div className={`${styles.remember} flex justify-between items-center pt-4`}>
                <div className='flex justify-between items-center'>
                  <input type="checkbox" name="agree" id="agree" value={agree} onChange={onCheckToggle} required/>
                  <span className='pl-4'>I agree to terms & conditions</span>
                </div>
              </div>
          </div>
          <div className={styles.button_container}>
            <input type="submit" value="Register Account" className={`${styles.login_input_button}`}/>
            {isLoading ? <Loader/> : null}
          </div>
          <div className={`${styles.divider} py-6`}>
            <p>or</p>
          </div>
          
        </form>
          <div className={`${styles.login_google}`}>
            <button className={`${styles.login_google_btn} flex pl-28 items-center`}><Image src={google_img} alt="google logo"/><span className='pl-28'>Sign in using Google</span></button>
          </div>

      </div>
  )
}

export default Signup
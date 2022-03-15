import { useState, useEffect } from 'react';
import styles from '../compStyles/Onboarding.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import google_img from '../../assets/google.png'

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Router
import { useRouter } from 'next/router';

//Toast
import {toast} from 'react-toastify'

//Auth
import { signup, reset } from './../../auth/authSlice';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    username: '',
  })
  const [showPassword, setShowPassword] = useState(true)
    const router = useRouter();
  const dispatch = useDispatch()
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>
    state.auth
  )

  useEffect (() => {
    if(isError) {
      console.log(message)
    }

    if(isSuccess || user) {
      router.push('/')
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
      name, email, password, phone, username
    }
    dispatch(signup(userData))
  }

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  
  const { name, email, password, phone, username } = formData
  

  return (
      <div className={`${styles.login_container}`}>
        <h1>Sign up <span>.</span></h1>

        <form onSubmit={onSubmit}>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="name">Fullname*</label>
            <input 
            type="text" 
            id="name" 
            placeholder='Enter name' 
            name="name" 
            value={name}
            onChange={onChange}
            className={`${styles.login_input}`}
            />
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Email address*</label>
            <input 
            type="email" 
            id="email"
            placeholder='Email' 
            name='email'
            value={email}
            onChange={onChange}
            className={`${styles.login_input}`}/>
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Phone number</label>
            <input 
            type="phone" 
            id="phone" 
            placeholder='phone'
            name='phone'
            value={phone}
            onChange={onChange}
            className={`${styles.login_input}`}/>
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="username">Username*</label>
            <input 
            type="text" 
            id="username" 
            placeholder='Username'
            name='username'
            value={username}
            onChange={onChange} 
            className={`${styles.login_input}`}
            />
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Create password*</label>
            <div className={`${styles.login_input_group__pass} items-center`}>
              <input 
              type={showPassword ? 'password' : 'text' } 
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Password' 
              className={`${styles.login_input}`}
              />
              <span onClick={handleShowPassword} className='text-xs cursor-pointer'><p>{showPassword ? <p>Show</p> : <p>hide</p>}</p></span>
            </div>
            <div className={`${styles.remember} flex justify-between items-center pt-4`}>
              <div className='flex justify-between items-center'>
                <input type="checkbox" name="" id=""/>
                <span className='pl-4'>I agree to terms & conditions</span>
              </div>
            </div>
          </div>
          <div>
            <input type="submit" value="Register Account" className={`${styles.login_input_button}`}/>
          </div>
          <div className={`${styles.divider} py-6`}>
            <p>or</p>
          </div>
          <div className={`${styles.login_google}`}>
            <button className={`${styles.login_google_btn} flex pl-28 items-center`}><Image src={google_img} alt="google logo"/><span className='pl-28'>Sign in using Google</span></button>
          </div>
          
        </form>

      </div>
  )
}

export default Signup
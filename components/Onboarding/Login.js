import { useEffect, useState } from 'react';
import Link from 'next/link';
import PlayerImages from './PlayerImages';
import styles from '../compStyles/Onboarding.module.scss'
import google_img from '../../assets/google.png'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../auth/authSlice';

import { logout } from '../../auth/authSlice';
import { useRouter } from 'next/router';
import Loader from '../Loader';

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [showPassword, setShowPassword] = useState(true)
  const [formData, setFormData] = useState({
    account: '',
    password: ''
  })

  const router = useRouter();
  const dispatch = useDispatch()
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>
    state.auth
  )

  useEffect (() => {
      if(isError) {
      toast.error(message, {
            className: `${styles.error_toast}`,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          }
      if(isSuccess || user) {
      router.push('/homepage')    
      
      }
    dispatch(reset())

  }, [user, isError, isSuccess, message, dispatch])
  

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      account, password
    }
    dispatch(login(userData))
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

    const { account, password } = formData

  return (
      <div className={`${styles.login_container}`}>
        <div className={styles.heading_login}>
          <h1> Sign In</h1>
          <Link href="/signup">Sign up</Link>
        </div>
        <form onSubmit={onSubmit}>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Username or email address</label>
            <input 
            type="text" 
            id="account" 
            placeholder='Enter Username or Email' 
            name="account" 
            value={account}
            onChange={onChange}
            className={`${styles.login_input}`}
            />
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="password">Password</label>
            <input 
            type={showPassword ? 'password' : 'text' }
            placeholder='Password' 
            id="password" 
            name="password" 
            value={password}
            onChange={onChange}
            className={`${styles.login_input}`}
            />
            <div className={`${styles.remember} flex justify-between items-center pt-4`}>
              <div className='flex justify-between items-center'>
                <input type="checkbox" name="" id=""/>
                <span className='pl-4'>Remember Me</span>
              </div>
              <Link href="#">Forgot password</Link>
            </div>
          </div>
          <div className={styles.button_container}>
            <input type="submit" value="Sign in" className={`${styles.login_input_button}`}/>
            {isLoading ? <Loader /> : null}
          </div>
          <div className={`${styles.divider} py-6`}>
            <p>or</p>
          </div>
        </form>
        <div className={`${styles.login_google}`}>
          <button className={`${styles.login_google_btn} flex pl-28 items-center`}><Image src={google_img} alt="google logo"/><span className='pl-28'>Sign in using Google</span></button>
        </div>
        <ToastContainer />
      </div>
  )
}

export default Login
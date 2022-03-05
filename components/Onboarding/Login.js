import { useState } from 'react';
import Link from 'next/link';
import PlayerImages from './PlayerImages';
import styles from '../compStyles/Onboarding.module.scss'
import google_img from '../../assets/google.png'
import Image from 'next/image';

function Login() {

  const [showPassword, setShowPassword] = useState(true)

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  console.log(showPassword)
  
  return (
      <div className={`${styles.login_container}`}>
        <h1>Sign in</h1>
        <form action="">
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Username or email address</label>
            <input type="email" placeholder='Email' className={`${styles.login_input}`}/>
          </div>
          <div className={`${styles.login_input_group}`}>
            <label htmlFor="email">Username or email address</label>
            <input type={showPassword ? 'password' : 'text' } placeholder='Password' className={`${styles.login_input}`}/>
            <div className={`${styles.remember} flex justify-between items-center pt-4`}>
              <div className='flex justify-between items-center'>
                <input type="checkbox" name="" id=""/>
                <span className='pl-4'>Remember Me</span>
              </div>
              <Link href="#">Forgot password</Link>
            </div>
          </div>
          <div>
            <input type="submit" value="Sign in" className={`${styles.login_input_button}`}/>
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

export default Login
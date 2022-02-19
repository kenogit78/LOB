import { useState } from 'react';
import styles from './compStyles/Signup.module.scss'
import { Button, Grid, Input, Loading, Spacer } from '@nextui-org/react';
import Link from 'next/link';


function Login() {

  const [showPassword, setShowPassword] = useState(true)

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  console.log(showPassword)
  
  return (
      <div className={styles.container}>
        <h1>Log In<span>.</span></h1>
        <p className={styles.p_end}>Don&apos;t have an account?
        <span><Link href="/signup"> Sign up</Link></span></p>
        
        <form action="">
          <Grid.Container gap={0} justify="start" fullWidth={true} className={styles.second_input}>   
            <Grid>
              <input type="email" placeholder='Email'/>
            </Grid>
          </Grid.Container>
          
          <Spacer y={1}/>
          
          <Grid.Container gap={0} justify="start" className={styles.third_input}>   
            <Grid>
              <input type={showPassword ? 'password' : 'text' } placeholder='Password'/>
              <span onClick={handleShowPassword}>{showPassword ? <p>Show</p> : <p>Hide</p>}</span>
            </Grid>
          </Grid.Container>
          
          <Spacer y={1}/>

          <Grid.Container gap={0} justify="start" className={styles.sign_btn}>   
            <Grid>
              <input type="submit" value="Log In"/>
            </Grid>
          </Grid.Container>
        </form>

      </div>
  )
}

export default Login
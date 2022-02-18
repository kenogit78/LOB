import { useState } from 'react';
import styles from './compStyles/Signup.module.scss'
import { Grid, Input } from '@nextui-org/react';


function Signup() {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = ()=> {
    setShowPassword(!showPassword) 
  }
  console.log(showPassword)
  
  return (
      <div className={styles.container}>
        <p className={styles.p_start}>Start for free</p>
        <h1>Create new account <span>.</span></h1>
        <p className={styles.p_end}>Already a Member? <span><a href="">log in</a></span></p>
        
        <form action="">

          <Grid.Container gap={2} justify="start" className={styles.first_input}>   
            <Grid className={styles.first_grid}>
              <input type="text" placeholder='First name'/>
            </Grid>
            <Grid>
              <input type="text" placeholder='Last name'/>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="start" fullWidth={true} className={styles.second_input}>   
            <Grid>
              <input type="email" placeholder='Email'/>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="start" className={styles.third_input}>   
            <Grid>
              <input type={showPassword ? 'password' : 'text' } placeholder='Password'/>
              <span onClick={handleShowPassword}>{showPassword ? <p>Show</p> : <p>Hide</p>}</span>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="start" className={styles.sign_btn}>   
            <Grid>
              <input type="submit" value="Create account"/>
            </Grid>
          </Grid.Container>
        </form>

      </div>
  )
}

export default Signup
import React from 'react'
import Header from './Header'
import styles from '../compStyles/Home.module.scss'
const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_sidebar}></div>
        <div className={styles.main_home}></div>
        <div className={styles.main_explore}></div>
      </div>
    </div>
  )
}

export default Home
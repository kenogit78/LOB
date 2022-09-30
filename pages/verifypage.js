import React from 'react'
import PlayerImages from '../components/Onboarding/PlayerImages'
import styles from '../styles/OnboardingPage.module.scss'
import Verify from './../components/Onboarding/Verify';

const verifypage = () => {
  return (
    <div className={`${styles.onboarding} grid h-screen`}>
        <PlayerImages />
        <Verify />
    </div>
  )
}

export default verifypage
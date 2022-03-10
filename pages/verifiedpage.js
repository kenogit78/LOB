import React from 'react'
import PlayerImages from '../components/Onboarding/PlayerImages'
import Verified from '../components/Onboarding/verified';
import styles from '../styles/OnboardingPage.module.scss'

const verifiedpage = () => {
  return (
    <div className={`${styles.onboarding} grid h-screen`}>
        <PlayerImages />
        <Verified />
    </div>
  )
}

export default verifiedpage
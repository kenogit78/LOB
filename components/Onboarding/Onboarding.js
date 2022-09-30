import styles from '../compStyles/Onboarding.module.scss'
import PlayerImages from './PlayerImages'

const Onboarding = () => {
  return (
    <div className={`${styles.onboarding} grid h-screen`}>
        <PlayerImages />
        <div className="right">
            form
        </div>
    </div>
  )
}

export default Onboarding
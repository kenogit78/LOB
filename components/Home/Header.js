import styles from '../compStyles/Home.module.scss'
import user_image from '../../assets/user_image.png'
import Notification from '../../assets/Notification.png'
import Image from 'next/image';
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1>FPLHive</h1>
        </div>

        <div className={styles.user}>
            <div className={styles.user_info}>
                <div className={styles.user_info__username}>
                    <p>Odizee_Man Utd</p>
                </div>
                <div className={styles.user_info__image}>
                    <Image src={user_image} alt="user image"/>
                </div>
            </div>
            <div className={styles.user__notification}>
                <Image src={Notification} alt="user image"/>
            </div>
        </div>
    </div>
  )
}

export default Header
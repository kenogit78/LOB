import styles from '../compStyles/Home.module.scss'
import user_image from '../../assets/user_image.png'
import Notification from '../../assets/Notification.png'
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
const Header = () => {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >=.1) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    // window.addEventListener("scroll", setFixed)
    
    const openModal = () => {
        console.log("open modal")
    }

  return (
    <div className={styles.header_container}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>FPLHive</h1>
            </div>

            <div className={styles.user}>
                <div className={styles.user_info}>
                    <div className={styles.user_info__username}>
                        <p>Odizee_Man Utd</p>
                    </div>
                    <div className={styles.user_info__image} onClick={openModal}>
                        <Image src={user_image} alt="user image"/>
                    </div>
                </div>
                <div className={styles.user__notification}>
                    <Image src={Notification} alt="user image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
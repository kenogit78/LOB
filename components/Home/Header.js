import styles from '../compStyles/Home.module.scss';
import user_image from '../../assets/user_image.png';
import Bell from '../../assets/bell.png';
import Image from 'next/image';
import Modal from './Modal';
import defaultImg from '../../assets/default.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../auth/authSlice';

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 0.1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  const user = useSelector(selectCurrentUser);
  console.log(user);
  // window.addEventListener("scroll", setFixed)

  const openModal = () => {
    console.log('open modal');
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1>LOB</h1>
        </div>

        <div className={styles.user}>
          {/* <div className={styles.user__notification}>
            <Image src={Bell} alt="user image" />
          </div> */}
          <div className={`text-[1.4rem] capitalize ${styles.user_info}`}>
            <p className="text-[#7d7abc] font-bold">{user?.username}</p>
            <div className={styles.user_info__image} onClick={openModal}>
              <Image src={defaultImg} alt="user image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import styles from './Modal.module.scss'
import Link from 'next/link';
import Image from 'next/image';

import avatar from '../../assets/avatar.png'
import image from '../../assets/image.svg'
import mic from '../../assets/mic.svg'

const Modal = ({closeModal}) => {

  
  return (
    <>
    <div className={styles.Modal}>
        <div className={styles.Modal__container}>
          <div className={styles.Modal__top}>
            <div onClick={() => closeModal(false)}>
              <h3>Cancel</h3>
            </div>            
            <div>
              <h3>Send to draft</h3>  
            </div>           
          </div>
          <div className={styles.input}>
            <form>
              <div className={styles.input__text}>
                <div className={styles.input__avatar}>
                  <Image src={avatar} alt="avatar"/>
                </div>
                <textarea rows={1}
                  cols={40} type="text" placeholder='What’s on you mind?' />
              </div>
              <div className={styles.input__btn_icon}>
                <div className={styles.input__icons}>
                  <Image src={image} alt="image"/>
                  <Image src={mic} alt="mic"/>
                </div>
                <button>Send</button>
              </div>
            </form>
          </div>
          <div className={styles.Modal__title}>

          </div>
        </div>
    </div>
    </>
  )
}

export default Modal
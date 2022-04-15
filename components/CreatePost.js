import React from 'react'
import Image from 'next/image';
import avatar from '../assets/post_avatar.png'
import styles from './compStyles/CreatePost.module.scss'
import image from '../assets/image.svg'
import mic from '../assets/mic.svg'

const CreatePost = () => {
  return (
        <div className={styles.mobile_post}>
          <form>
            <div className={styles.mobile_post__input}>
              <div className={styles.mobile_post__avatar}>
                <Image src={avatar} alt="avatar"/>
              </div>
              <textarea rows={1}
                cols={40} type="text" placeholder='What’s on you mind?' />
            </div>
            <div className={styles.mobile_post__btn_icon}>
              <div className={styles.icons}>
                <Image src={image} alt="image"/>
                <Image src={mic} alt="mic"/>
              </div>
              <button>Send</button>
            </div>
          </form>
        </div>
  )
}

export default CreatePost
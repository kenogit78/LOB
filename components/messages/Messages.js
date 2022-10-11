import styles from './Messages.module.scss';
import Image from 'next/image';
import message_img from '../../assets/message_img.png';

const Messages = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__heading}>
        {/* <h2>Coming Soon</h2> */}
      </div>
      <div className={styles.messages__container}>
        {/* <div className={styles.message}>
          <div className={styles.message__img}>
            <Image src={message_img}></Image>
          </div>
          <div className={styles.message__content}>
            <h3>@Ejim_Davidson</h3>
            <p>Why do you hate Messi so much tho? Are you a mad person ?</p>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.message__img}>
            <Image src={message_img}></Image>
          </div>
          <div className={styles.message__content}>
            <h3>@Ejim_Davidson</h3>
            <p>Why do you hate Messi so much tho? Are you a mad person ?</p>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.message__img}>
            <Image src={message_img}></Image>
          </div>
          <div className={styles.message__content}>
            <h3>@Ejim_Davidson</h3>
            <p>Why do you hate Messi so much tho? Are you a mad person ?</p>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.message__img}>
            <Image src={message_img}></Image>
          </div>
          <div className={styles.message__content}>
            <h3>@Ejim_Davidson</h3>
            <p>Why do you hate Messi so much tho? Are you a mad person ?</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Messages;

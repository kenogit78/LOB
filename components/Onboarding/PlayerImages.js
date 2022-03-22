import styles from '../compStyles/PlayerImage.module.scss'
import Image from 'next/image';
import Open_Doodles_Zombieing from '../../assets/Open_Doodles_Zombieing_1.png'

const PlayerImages = () => {
  return (
    <div className={`${styles.onboarding__left}`}>
      <div className={styles.onboarding__left_image_illus}>
        <Image src={Open_Doodles_Zombieing} />
      </div>
      <p className={`${styles.onboarding__left__p}`}>Seamlessly chat, bant, and interact with other players </p>
    </div>
  )
}

export default PlayerImages
import styles from '../compStyles/Home.module.scss'
import search from '../../assets/search.svg'
import explore_img from '../../assets/explore_img.png'
import Image from 'next/image';
const Explore = () => {
  return (
    <div className={styles.explore}>
      <h2>Explore</h2>
      <div className={styles.explore_search}>
            <span className={styles.explore_search__icon}><Image src={search} alt='search'/></span>
            <input type="search" className={styles.search} placeholder='Search'/>
      </div>
      <div className={styles.explore_details}>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
        <div className={styles.explore_details__items}>
          <Image src={explore_img} alt="explore image"/>
          <p>Look at these foolish Man U defenders fgs</p>
        </div>
      </div>
    </div>
  )
}

export default Explore
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../compStyles/Onboarding.module.scss'
import congrats from '../../assets/Group 14.png'

const Verified = () => {
  return (
    <div className={`${styles.verify_container} mt-20 mx-auto`}>
        <div className={`${styles.verify_back} text-base flex items-center mb-32`}>
            <span><p className='text-4xl'>&#8249;</p></span>
            <Link href="/signup">Back</Link>
        </div>
        <div className={`${styles.verify_details} mb-28`}>
            <h1 className='font-bold'>Congratulations!</h1>
            <div className={`${styles.verify_image} max-w-md mx-auto mb-20`}>
              <Image src={congrats} alt="email-img"></Image>
            </div>
            <div className={`${styles.verify_p}`}>
              <p className="mb-4 font-bold">Your account is verified</p>
              <p className="mb-12">You are now a member. You can now begin to enjoy the seamless chat, bant, and interaction with other players </p>
            </div>
        </div>
        {/* <button className={`${styles.go_home}`}><Link href='/homepage'>Go to Home</Link></button> */}
        <Link href='/homepage'><button className={`${styles.go_home}`}>Go to Home</button></Link>
    </div>
  )
}

export default Verified
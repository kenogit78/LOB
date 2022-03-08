import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../compStyles/Onboarding.module.scss'
import email1 from '../../assets/email1.png'

const Verify = () => {
  return (
    <div className={`${styles.verify_container} mt-20 mx-auto`}>
        <div className={`${styles.verify_back} text-base flex items-center mb-32`}>
            <span><p className='text-3xl'>&#8249;</p></span>
            <Link href="/signup">Back</Link>
        </div>
        <div className={`${styles.verify_details}`}>
            <h1>Verify your account</h1>
            <div className={`${styles.verify_image} max-w-md mx-auto`}>
              <Image src={email1} alt="email-img"></Image>
            </div>
            <div className={`${styles.verify_p}`}>
              <p className="mb-4">Hello Paul,</p>
              <p className="mb-12">A verification link has been sent to your email paulkanayo@gmail.com.</p>
              <p>Please click the link to get verified ASAP.</p>
            </div>
        </div>
    </div>
  )
}

export default Verify
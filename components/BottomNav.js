import React, { useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './compStyles/BottomNav.module.scss'
import Home from './../assets/House_mobile.png'
import HomeFilled from './../assets/House_mobile_filled.png'
import messages from './../assets/messages_mobile.png'
import messagesFilled from './../assets/messages_mobile_filled.png'
import Rows from './../assets/Rows_mobile.svg'
import RowsFilled from './../assets/Rows_mobile_filled.png'
import ArrowLeftRight from './../assets/ArrowsLeftRight_mobile.png'
import ArrowLeftRightFilled from './../assets/ArrowsLeftRight_mobile_filled.png'
import Plus from './../assets/PlusCircle.png'
import Modal from './Modal/Index';

const BottomNav = ({setOpenModal}) => {

  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div className={styles.bottom_nav}>
          <nav>
            <ul>
              <div className={styles.bottom_nav_links}>
                <li className={router.pathname == "/homepage" ? styles.active : ""}>
                  <Link href='/homepage'>             
                  <a><Image src={router.pathname == "/homepage" ? HomeFilled : Home} alt='Home'/></a>
                  </Link>
                </li>
                <li className={router.pathname == "/table" ? styles.active : ""}>
                  <Link href='/table'>
                    
                    <a><Image src={router.pathname == "/table" ? RowsFilled : Rows} alt='Table'/></a>
                  </Link>
                </li>
              </div>
              <div className={styles.bottom_nav_links}>
                <li className={router.pathname == "/fixtures" ? styles.active : ""}>
                  <Link href='/fixtures'>
                    <a><Image src={router.pathname == "/fixtures" ? ArrowLeftRightFilled : ArrowLeftRight} alt='Fixtures'/></a>
                  </Link>
                </li>
                <li className={router.pathname == "/messages" ? styles.active : ""}>
                  <Link href='/messages'>
                    <a><Image src={messages} alt='Messages'/></a>
                  </Link>
                </li>
              </div>
            </ul>
            <div className={styles.addpost} onClick={() => setOpenModal(true)}>
              <Image src={Plus} alt='Table'/>
            </div>
        </nav>
    </div>
  )
}

export default BottomNav
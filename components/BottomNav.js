import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './compStyles/BottomNav.module.scss';
import Home from './../assets/House_mobile.png';
import HomeFilled from './../assets/House_mobile_filled.png';
import messages from './../assets/messages_mobile.png';
import messagesFilled from './../assets/messages_mobile_filled.png';
import Rows from './../assets/Rows_mobile.svg';
import RowsFilled from './../assets/Rows_mobile_filled.png';
import ArrowLeftRight from './../assets/ArrowsLeftRight_mobile.png';
import ArrowLeftRightFilled from './../assets/ArrowsLeftRight_mobile_filled.png';
import Plus from './../assets/PlusCircle.png';
import Modal from './Modal/Index';
import {
  RiArrowLeftRightFill,
  RiHome3Fill,
  RiHome3Line,
  RiMessage3Fill,
  RiMessage3Line,
  RiTableFill,
  RiTableLine,
} from 'react-icons/ri';

const BottomNav = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className={styles.bottom_nav}>
      <nav>
        <ul>
          <div className={styles.bottom_nav_links}>
            <li className={router.pathname == '/homepage' ? styles.active : ''}>
              <Link href="/homepage">
                <a>
                  {router.pathname == '/homepage' ? (
                    <RiHome3Fill color="#fff" size={25} />
                  ) : (
                    <RiHome3Line size={25} />
                  )}
                </a>
              </Link>
            </li>
            <li className={router.pathname == '/table' ? styles.active : ''}>
              <Link href="/table">
                <a>
                  {router.pathname == '/table' ? (
                    <RiTableFill color="#fff" size={25} />
                  ) : (
                    <RiTableLine size={25} />
                  )}
                </a>
              </Link>
            </li>
          </div>
          <div className={styles.bottom_nav_links}>
            <li className={router.pathname == '/fixtures' ? styles.active : ''}>
              <Link href="/fixtures">
                <a>
                  {router.pathname == '/fixtures' ? (
                    <RiArrowLeftRightFill color="#FFFFF0" size={25} />
                  ) : (
                    <RiArrowLeftRightFill size={25} />
                  )}
                </a>
              </Link>
            </li>
            <li className={router.pathname == '/messages' ? styles.active : ''}>
              <Link href="/messages">
                <a>
                  {router.pathname == '/messages' ? (
                    <RiMessage3Fill size={25} />
                  ) : (
                    <RiMessage3Line size={25} />
                  )}{' '}
                </a>
              </Link>
            </li>
          </div>
        </ul>
        <div className={styles.addpost} onClick={() => setOpenModal(true)}>
          <Image src={Plus} alt="Table" />
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;

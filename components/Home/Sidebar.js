import React from 'react'
import styles from '../compStyles/Home.module.scss'
import Image from 'next/image'
import Home from '../../assets/House.svg'
import Table from '../../assets/Rows.svg'
import Fixtures from '../../assets/ArrowsLeftRight.svg'
import Messages from '../../assets/EnvelopeSimpl.svg'
import Settings from '../../assets/Gear.svg'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <nav>
            <ul>
                <Link href='#'>             
                <li><Image src={Home} alt='Home'/><span>Home</span></li>
                </Link>
                <li><Image src={Table} alt='Table'/><span>Table</span> </li>
                <li><Image src={Fixtures} alt='Fixtures'/><span>Fixtures</span></li>
                <li><Image src={Messages} alt='Messages'/><span>Messages</span></li>
                <li><Image src={Settings} alt='Settings'/><span>Settings</span></li>
            </ul>
            <button className={styles.sidebar_btn}>Make a post</button>
        </nav>
        
    </div>
  )
}

export default Sidebar
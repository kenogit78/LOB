import styles from '../compStyles/Home.module.scss'
import Image from 'next/image'
import Home from '../../assets/House.svg'
import HomeFilled1 from '../../assets/House_fill.png'
import TableFilled from '../../assets/RowsFilled.svg'
import FixturesFilled from '../../assets/ArrowsLeftRightFilled.svg'
// import ArrowsLeftRightFilled from '../../assets/ArrowsLeftRightFilled.svg'
import Table from '../../assets/Rows.svg'
import Fixtures from '../../assets/ArrowsLeftRight.svg'
import Messages from '../../assets/EnvelopeSimpl.svg'
import Settings from '../../assets/Gear.svg'
import Link from 'next/link';

import { logout, reset } from '../../auth/authSlice'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Sidebar = () => {

  const dispatch = useDispatch()
  const router = useRouter()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    router.push('/login')
  }
  return (
    <div className={styles.sidebar}>
        <nav>
            <ul>
                <li className={router.pathname == "/homepage" ? styles.active : ""}>
                  <Link href='/homepage'>             
                  <a><Image src={router.pathname == "/homepage" ? HomeFilled1 : Home} alt='Home'/><span>Home</span></a>
                  </Link>
                </li>
                <li className={router.pathname == "/table" ? styles.active : ""}>
                  <Link href='/table'>
                    
                    <a><Image src={router.pathname == "/table" ? TableFilled : Table} alt='Table'/><span>Table</span></a>
                  </Link>
                </li>
                <li className={router.pathname == "/fixtures" ? styles.active : ""}>
                  <Link href='/fixtures'>
                    <a><Image src={router.pathname == "/fixtures" ? FixturesFilled : Fixtures} alt='Fixtures'/><span>Fixtures</span></a>
                  </Link>
                </li>
                <li className={router.pathname == "/messages" ? styles.active : ""}>
                  <Link href='/messages'>
                    <a><Image src={Messages} alt='Messages'/><span>Messages</span></a>
                  </Link>
                </li>
                <li className={router.pathname == "/settings" ? styles.active : ""}>
                  <Link href='/settings'>
                    <a><Image src={Settings} alt='Settings'/><span>Settings</span></a>
                  </Link>
                  </li>
            </ul>
            <div className={styles.sidebar_btn_container}>
              <button onClick={onLogout} className={styles.sidebar_btn}>Make a post</button>
            </div>
        </nav>
        <div className={styles.toggle}>
          Toggle
        </div>
    </div>
  )
}

export default Sidebar
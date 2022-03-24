import styles from '../compStyles/Home.module.scss'
import Image from 'next/image'
import Home from '../../assets/House.svg'
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
                <Link href='/homepage'>             
                <li><a><Image src={Home} alt='Home'/><span>Home</span></a></li>
                </Link>
                <li><a><Image src={Table} alt='Table'/><span>Table</span></a></li>
                <li><a><Image src={Fixtures} alt='Fixtures'/><span>Fixtures</span></a></li>
                <li><a><Image src={Messages} alt='Messages'/><span>Messages</span></a></li>
                <li><a><Image src={Settings} alt='Settings'/><span>Settings</span></a></li>
            </ul>
            <button onClick={onLogout} className={styles.sidebar_btn}>Make a post</button>
        </nav>
        <div className="toggle">
          Toggle
        </div>
    </div>
  )
}

export default Sidebar
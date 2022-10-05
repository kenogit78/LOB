import styles from '../compStyles/Home.module.scss';
import Image from 'next/image';
import Home from '../../assets/House.svg';
import HomeFilled1 from '../../assets/House_fill.png';
import TableFilled from '../../assets/RowsFilled.svg';
import FixturesFilled from '../../assets/ArrowsLeftRightFilled.svg';
// import ArrowsLeftRightFilled from '../../assets/ArrowsLeftRightFilled.svg'
import Table from '../../assets/Rows.svg';
import Fixtures from '../../assets/ArrowsLeftRight.svg';
import Messages from '../../assets/EnvelopeSimpl.svg';
import Settings from '../../assets/Gear.svg';
import Link from 'next/link';

import { logout, reset } from '../../auth/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { persistor } from '../../pages/_app';
import axios from 'axios';

// ICONS IMPORT
import {
  RiArrowLeftRightFill,
  RiHome3Fill,
  RiMessage3Fill,
  RiMessage3Line,
  RiSettings3Fill,
  RiSettings3Line,
} from 'react-icons/ri';
import { RiHome3Line } from 'react-icons/ri';
import { RiTableFill, RiTableLine } from 'react-icons/ri';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogout = async (e) => {
    e.preventDefault();
    // dispatch(logout());
    // dispatch(reset());
    axios
      .get('https://league-of-billions.up.railway.app/auth/logout')
      .then((res) => {});
    // router.push('/login');
  };

  const purge = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li className={router.pathname == '/homepage' ? styles.active : ''}>
            <Link href="/homepage">
              <a>
                {router.pathname == '/homepage' ? (
                  <RiHome3Fill color="#7d7abc" size={25} />
                ) : (
                  <RiHome3Line size={25} />
                )}
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/table' ? styles.active : ''}>
            <Link href="/table">
              <a>
                {router.pathname == '/table' ? (
                  <RiTableFill color="#7d7abc" size={25} />
                ) : (
                  <RiTableLine size={25} />
                )}

                <span>Table</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/fixtures' ? styles.active : ''}>
            <Link href="/fixtures">
              <a>
                {router.pathname == '/fixtures' ? (
                  <RiArrowLeftRightFill color="#7d7abc" size={25} />
                ) : (
                  <RiArrowLeftRightFill size={25} />
                )}
                <span>Fixtures</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/messages' ? styles.active : ''}>
            <Link href="/messages">
              <a>
                {router.pathname == '/messages' ? (
                  <RiMessage3Fill color="#7d7abc" size={25} />
                ) : (
                  <RiMessage3Line size={25} />
                )}
                <span>Messages</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/settings' ? styles.active : ''}>
            <Link href="/settings">
              <a>
                {router.pathname == '/settings' ? (
                  <RiSettings3Fill color="#7d7abc" size={25} />
                ) : (
                  <RiSettings3Line size={25} />
                )}
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.sidebar_btn_container}>
          <button onClick={onLogout} className={styles.sidebar_btn}>
            Logout
          </button>
        </div>
      </nav>
      {/* <div className={styles.toggle}>Toggle</div> */}
    </div>
  );
};

export default Sidebar;

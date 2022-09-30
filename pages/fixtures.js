import React from 'react'
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss'
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import Modal from '../components/Home/Modal';
import Fixtures from '../components/Fixtures/Fixtures';
import BottomNav from './../components/BottomNav';

const fixtures = () => {
  return (
    <div>
        <Header />
        <div className={styles.main}>
            <div className={styles.main_sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main_sidebar_bottom}>
                <BottomNav />
            </div>
            <div className={styles.main_home}>
                {/* <Table /> */}
                <Fixtures />
            </div>
            <div className={styles.main_explore}>
                <Explore />
            </div>
        </div>
    </div>
  )
}

export default fixtures
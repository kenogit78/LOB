import React from 'react';
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss';
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import Page from '../components/Page';

const settings = () => {
  return (
    <Page description="Chats and Bants" title="settings || LOB">
      <div>
        {/* <Header />
      <div className={styles.main}>
        <div className={styles.main_sidebar}>
          <Sidebar />
        </div> */}
        <p className="m-auto pt-5 text-4xl"> Coming soon</p>

        {/* <div className={styles.main_home}><Table /></div> */}

        {/* <div className={styles.main_explore}>
          <Explore />
        </div>
      </div> */}
      </div>
    </Page>
  );
};

export default settings;

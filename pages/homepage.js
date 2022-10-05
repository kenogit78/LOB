import React, { useEffect } from 'react';
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss';
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import BottomNav from '../components/BottomNav';
import ProtectedHOC from '../protected/index';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../auth/authSlice';
import { wrapper, State } from '../store';

const homepage = ({ data, user }) => {
  // const header = `Authorization: Bearer ${token}`;

  // const user = useSelector((state) => state).auth;

  // const accessToken = useSelector(selectCurrentToken);
  // console.log(accessToken);

  // console.log(user);
  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_sidebar}>
          <Sidebar />
        </div>
        {/* <div className={styles.main_sidebar_bottom}>
                <BottomNav />
            </div> */}
        <div className={styles.main_home}>
          <Home />
        </div>
        <div className={styles.main_explore}>
          <Explore />
        </div>
      </div>
    </div>
  );
};

// export default ProtectedHOC(homepage);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) =>
    async ({ res }) => {
      try {
        //ADD AUTHHEADERS
        const header = `Authorization: Bearer ${token}`;

        const user = useSelector(selectCurrentUser);

        console.log(user);
        const res = await axios.get(
          'https://league-of-billions.up.railway.app/api/post'
        );
        // const images = await getCampaignImages(state);

        // const villages = await getVillages(state);
        console.log('State on server', params);

        const data = await res.data;
        return {
          props: {
            data,
            user: user,
            // images: images.data,
            // villages: villages.data,
          },
        };
      } catch {
        res.statusCode = 404;
        return {
          props: {},
        };
      }
    }
);

export default homepage;

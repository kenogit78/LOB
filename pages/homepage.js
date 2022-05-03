import React from 'react';
import Header from '../components/Home/Header';
import Home from './../components/Home/Home';
import styles from '../styles/homepage.module.scss';
import Explore from './../components/Home/Explore';
import Sidebar from './../components/Home/Sidebar';
import BottomNav from '../components/BottomNav';
import requireAuthentication from '../protected/index';

const homepage = () => {
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
export default homepage;
// export default requireAuthentication(homepage)

// export const getServerSideProps = requireAuthentication(
//     async (ctx) => {
//         console.log(ctx.req.cookies)
//         return {
//             props: {},
//         }
//     }
// )

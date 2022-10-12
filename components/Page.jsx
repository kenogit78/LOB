import Head from 'next/head';
import Explore from './Home/Explore';
import Header from './Home/Header';
import Sidebar from './Home/Sidebar';
import styles from '../styles/homepage.module.scss';
import BottomNav from './BottomNav';
import lob from '../assets/lob.png';

export default function Page({ title, description, children }) {
  // const editTitle = title?.includes(undefined) ? 'loading...' : title;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:url" content="https://fplhub.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LOB" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="LOB || FPL Chats and Bants" />
        <meta property="og:image" content={lob} />
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main_sidebar_bottom}>
          <BottomNav />
        </div>
        <div className={styles.main_home}>{children}</div>
        <div className={styles.main_explore}>
          <Explore />
        </div>
      </div>
    </>
  );
}

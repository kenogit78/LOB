import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Login from '../pages/login';
// import Signup from '../components/Onboarding/Signup'

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://fplhub.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LOB" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="LOB || FPL Chats and Bants" />
        <meta
          property="og:image:secure"
          content="https://www.canva.com/design/DAFKWUlE1d8/gOIKD3PWU626k0nf9kjG5g/view?utm_content=DAFKWUlE1d8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        />
      </Head>
      <Login />
    </div>
  );
}

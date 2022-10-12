import { Container, Row, Col, Card, Text } from '@nextui-org/react';
import Login from '../components/Onboarding/Login';
import PlayerImages from '../components/Onboarding/PlayerImages';
import styles from '../styles/OnboardingPage.module.scss';
import Link from 'next/link';
import Head from 'next/head';

function login() {
  return (
    <div className={`${styles.onboarding} grid h-screen`}>
      <Head>
        <title>LOB || Login</title>
      </Head>
      <PlayerImages />
      <div className={`${styles.onboarding__right} grid`}>
        <Login />
        {/* <div className={`${styles.no_account} flex justify-end pb-12`}>
            <p>Don’t have an acount? <span><Link href="/signup"> Sign Up</Link></span></p>
          </div> */}
      </div>
    </div>
  );
}

export default login;

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Login from '../pages/login'
// import Signup from '../components/Onboarding/Signup'

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  )
}

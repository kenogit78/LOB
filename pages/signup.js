import { Container, Row, Col, Card, Text } from '@nextui-org/react';
import Signup from '../components/Signup';
import styles from '../styles/signup.module.scss'

function signup() {
  return (
    <div className={styles.container}>
        <Signup />     
    </div>
  )
}

export default signup
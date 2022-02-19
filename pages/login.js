import { Container, Row, Col, Card, Text } from '@nextui-org/react';
import Login from '../components/Login';
import styles from '../styles/signup.module.scss'

function login() {
  return (
    <div className={styles.container}>
        <Login />     
    </div>
  )
}

export default login

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import styles from '../compStyles/Modal.module.scss'
import Image from 'next/image';
import pencil from '../../assets/pencil.svg'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
      <div className={styles.modal}>
        <div className={styles.modal_heading}>
          <input type="file" />
          <div className={styles.modal_heading__text}>
            <p>Joined</p>
            <p>27th January, 2021</p>
          </div>
        </div>
        <div className={styles.modal_inputs}>
          <div>
            <label htmlFor="username">Username</label>
            <div>
              <input type="text" id='username'/>
              <Image src={pencil}/>
            </div>
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <div>
              <input type="text" id='location'/>
              <Image src={pencil}/>
            </div>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <div>
              <input type="select" id='gender'/>
              <Image src={pencil}/>
            </div>
          </div>
        </div>
      </div>
  )
}
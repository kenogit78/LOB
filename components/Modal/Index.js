import styles from './Modal.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import avatar from '../../assets/avatar.png';
import image from '../../assets/image.svg';
import mic from '../../assets/mic.svg';
import { useEffect, useState } from 'react';

//Redux & State
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../post/postSlice';

const Modal = ({ closeModal }) => {
  const [desc, setDesc] = useState('');

  const dispatch = useDispatch();

  const { user, post, isLoading } = useSelector((state) => state.auth);

  const userId = user?.data.user._id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      userId,
      desc,
    };
    dispatch(createPost(postData));

    closeModal(true);
  };

  return (
    <>
      <div className={styles.Modal}>
        <div className={styles.Modal__container}>
          <div className={styles.Modal__top}>
            <div onClick={() => closeModal(false)}>
              <h3>Cancel</h3>
            </div>
            <div>
              <h3>Send to draft</h3>
            </div>
          </div>
          <div className={styles.input}>
            <form onSubmit={onSubmit}>
              <div className={styles.input__text}>
                <div className={styles.input__avatar}>
                  <Image src={avatar} alt="avatar" />
                </div>
                <textarea
                  rows={1}
                  cols={40}
                  type="text"
                  placeholder="What’s on you mind?"
                  name="text"
                  id="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className={styles.input__btn_icon}>
                <div className={styles.input__icons}>
                  <Image src={image} alt="image" />
                  <Image src={mic} alt="mic" />
                </div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className={styles.Modal__title}></div>
        </div>
      </div>
    </>
  );
};

export default Modal;

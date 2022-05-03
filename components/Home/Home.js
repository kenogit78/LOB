import React, { useRef, useState } from 'react';
import Header from './Header';
import styles from '../compStyles/Home.module.scss';
import Image from 'next/image';

import image from '../../assets/image.svg';
import video from '../../assets/video.svg';
import mic from '../../assets/mic.svg';
import thumbs_up from '../../assets/thumbs-up.svg';
import likefilled from '../../assets/likefilled.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/Share.svg';
import avatar from '../../assets/avatar.png';
import post_avatar from '../../assets/post_avatar.png';
import post_img_1 from '../../assets/post_img_1.png';
import post_img_2 from '../../assets/post_img_2.png';
import Modal from '../Modal/Index';
import BottomNav from '../BottomNav';

//Redux & State
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../post/postSlice';
import axios from 'axios';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [desc, setDesc] = useState('');

  console.log(openModal);

  const dispatch = useDispatch();

  const { user, post } = useSelector((state) => state.auth);

  const userId = user?.data.user._id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      userId,
      desc,
    };
    dispatch(createPost(postData));

    setDesc('');
  };

  const like = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.home}>
      {openModal && <Modal closeModal={setOpenModal} />}

      <div className={styles.heading}>
        <h2>Home</h2>
      </div>
      <div className={styles.home_main}>
        <div className={styles.home_post}>
          <form onSubmit={onSubmit}>
            <div className={styles.home_post__input}>
              <div className={styles.home_post__avatar}>
                <Image src={avatar} alt="avatar" />
              </div>
              <textarea
                rows={1}
                cols={40}
                type="text"
                name="text"
                id="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="What’s on you mind?"
              />
            </div>
            <div className={styles.home_post__btn_icon}>
              <div className={styles.icons}>
                <Image src={image} alt="image" />
                <Image src={mic} alt="mic" />
              </div>
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className={styles.home_feeds}>
          <div className={styles.home_feeds__user_img}>
            <Image src={post_avatar} />
          </div>
          <div className={styles.home_feeds_container}>
            <div className={styles.home_feeds__post}>
              <div className={styles.home_feeds__post_username}>
                <h4>PaulKanayo</h4>
              </div>
              <div className={styles.home_feeds__post_text}>
                <p>Look at these foolish Man U defenders fgs</p>
              </div>
              <div className={styles.home_feeds__post_img}>
                <Image src={post_img_1} alt="post image" />
                <Image src={post_img_2} alt="post image" />
              </div>
            </div>
            <div className={styles.home_feeds__post_icons}>
              <div>
                <Image
                  src={liked ? likefilled : thumbs_up}
                  alt="like"
                  onClick={like}
                />
              </div>
              <Image
                src={comment}
                alt="comment"
                onClick={() => setOpenModal(true)}
              />
              <Image src={share} alt="share" />
            </div>
          </div>
        </div>
        <div className={styles.home_feeds}>
          <div className={styles.home_feeds__user_img}>
            <Image src={post_avatar} />
          </div>
          <div className={styles.home_feeds_container}>
            <div className={styles.home_feeds__post}>
              <div className={styles.home_feeds__post_username}>
                <h4>PaulKanayo</h4>
              </div>
              <div className={styles.home_feeds__post_text}>
                <p>Look at these foolish Man U defenders fgs</p>
              </div>
            </div>
            <div className={styles.home_feeds__post_icons}>
              <Image src={thumbs_up} alt="like" />
              <Image
                src={comment}
                alt="comment"
                onClick={() => setOpenModal(true)}
              />
              <Image src={share} alt="share" />
            </div>
          </div>
        </div>
        <div className={styles.home_feeds}>
          <div className={styles.home_feeds__user_img}>
            <Image src={post_avatar} />
          </div>
          <div className={styles.home_feeds_container}>
            <div className={styles.home_feeds__post}>
              <div className={styles.home_feeds__post_username}>
                <h4>PaulKanayo</h4>
              </div>
              <div className={styles.home_feeds__post_text}>
                <p>Look at these foolish Man U defenders fgs</p>
              </div>
              <div className={styles.home_feeds__post_img}>
                <Image src={post_img_1} alt="post image" />
                <Image src={post_img_2} alt="post image" />
              </div>
            </div>
            <div className={styles.home_feeds__post_icons}>
              <Image src={thumbs_up} alt="like" />
              <Image
                src={comment}
                alt="comment"
                onClick={() => setOpenModal(true)}
              />
              <Image src={share} alt="share" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_bottom}>
        <BottomNav setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Home;

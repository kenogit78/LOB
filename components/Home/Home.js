import React, { useRef, useState, useEffect } from 'react';
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
import { useAddNewPostMutation } from '../../post/postApiSlice';
import axios from 'axios';

// Toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectCurrentToken,
  selectCurrentUser,
  setCredentials,
} from '../../auth/authSlice';
import { useGetPostQuery } from '../../post/postApiSlice';
import { useGetPostsQuery } from '../../post/pApiSlice';
import Post from './Post';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [desc, setDesc] = useState('');

  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const canSave = [user?.id, desc].every(Boolean) && !isLoading;

  console.log(canSave);

  const handleNewPost = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        await addNewPost({ userId: user?.id, desc }).unwrap();
        setDesc('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success(message, {
  //       className: `${styles.error_toast}`,
  //       position: 'top-left',
  //       // zIndex: 10000,
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // }, [message]);

  // const userId = user?.data.user._id;

  useEffect(() => {
    try {
      const refreshData = axios
        .get('http://localhost:8000/auth/refresh', { withCredentials: true })
        .then((res) => {
          dispatch(setCredentials({ ...res.data }));
        });
      // console.log(refreshData);
    } catch (err) {}
  }, []);

  const { data: post, isError, isSuccess } = useGetPostQuery();

  const posts = post?.data.data;

  console.log(posts);

  const onSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      userId,
      desc,
    };
    dispatch(createPost(postData));

    setDesc('');
  };

  const like = (e) => {
    console.log(e.target);
    setLiked(!liked);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = openModal ? 'hidden' : 'auto';
  }, [openModal]);

  return (
    <div className={styles.home}>
      {openModal && <Modal closeModal={setOpenModal} />}

      <div className={styles.heading}>
        <ToastContainer />
        <h2>Home</h2>
      </div>
      <div className={styles.home_main}>
        <div className={styles.home_post}>
          <form onSubmit={handleNewPost}>
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
        {posts?.map((post) => {
          return <Post key={post._id} posts={post} user={user} token={token} />;
        })}
      </div>
      <div className={styles.sidebar_bottom}>
        <BottomNav setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Home;

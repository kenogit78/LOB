import React, { useRef, useState, useEffect, useCallback } from 'react';
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
import Loader from '../misc/Loader';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUpload, setImageUpload] = useState('');
  const [img, setImg] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const canSave = [user?.id, desc].every(Boolean) && !isLoading;

  console.log(imageUpload);

  console.log(token);
  const handleNewPost = async (e) => {
    e.preventDefault();
    console.log('post');
    // console.log(img);
    // const headers = {
    //   authorization: `Bearer ${token}`,
    //   Accept: 'application/json',
    //   'Content-Type': 'multipart/form-data',
    // };

    const formData = new FormData();

    const data = {
      userId: user?.id,
      desc,
      img,
    };

    formData.append('desc', desc);
    formData.append('userId', user?.id);
    formData.append('img', img[0]);
    img.length == 2 ? formData.append('img', img[1]) : null;
    // img.length == 3 ? formData.append('img', img[2]) : null;

    if (canSave) {
      try {
        await addNewPost(formData).unwrap();

        // axios.post('http://localhost:8000/api/post/new', data, {
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //     Accept: 'application/json',
        //     // 'Content-Type': 'multipart/form-data',
        //   },
        // });

        // console.log(img, 'img');
        setDesc('');
        setImg([]);
        setSelectedImages([]);
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
    // try {
    const refreshData = axios
      .get('http://localhost:8000/auth/refresh', { withCredentials: true })
      .then((res) => {
        dispatch(setCredentials({ ...res.data }));
        setLoading(false);
      })
      .catch((err) => {
        router.push('/');

        console.log(err);
      });
    // console.log(refreshData);
    // } catch (err) {
    //   console.log(err);
    // }
  }, []);

  const { data: post, isError, isSuccess } = useGetPostQuery();

  const posts = post?.data.data;

  // FUNCTION FOR PREVIEWING IMAGES

  console.log(img);

  //IMAGE ONCHANGE
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImg((previousImages) => previousImages.concat(selectedFilesArray));
    // FOR BUG IN CHROME
    event.target.value = '';
  };

  //DELETE IMAGE
  const deleteImage = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

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
  if (loading) return <Loader />;
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
                <div className={styles.upload}>
                  <button type="button" className={styles.btn_upload}>
                    <Image src={image} alt="add image" />
                    <input
                      type="file"
                      name="img"
                      id=""
                      onChange={onSelectFile}
                      multiple
                      accept="image/*, png, jpeg, jpg, image/jpeg, image/webp"
                    />
                  </button>
                </div>
                {/* <Image src={mic} alt="mic" /> */}
              </div>
              <input type="submit" />
            </div>
            <div className={styles.images_prev_container}>
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div className={styles.image_preview}>
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="upload"
                      />
                      <div onClick={deleteImage} className={styles.cancel}>
                        {/* <FaTimes /> */}
                      </div>
                    </div>
                  );
                })}
            </div>
            {selectedImages.length > 2 ? (
              <p className="text-[1.2rem] text-[red]">
                You can only upload up to two images
              </p>
            ) : null}
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

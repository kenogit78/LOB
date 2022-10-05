import styles from '../compStyles/Home.module.scss';
import Image from 'next/image';
import image from '../../assets/image.svg';
import video from '../../assets/video.svg';
import mic from '../../assets/mic.svg';
import thumbs_up from '../../assets/thumbs-up.svg';
import likefilled from '../../assets/likefilled.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/Share.svg';
import defaultImg from '../../assets/default.png';
import post_avatar from '../../assets/post_avatar.png';
import post_img_1 from '../../assets/post_img_1.png';
import post_img_2 from '../../assets/post_img_2.png';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import { useDeletePostMutation } from '../../post/postApiSlice';
import { RiDeleteBin3Line, RiHeartsFill, RiHeartsLine } from 'react-icons/ri';

const Post = ({ posts, user, token }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(posts.likes.length);

  useEffect(() => {
    posts?.likes.includes(user?.id) ? setLiked(true) : '';
  }, []);

  const like = async (e) => {
    setLiked(!liked);
    liked === false ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
    // console.log(user);
    try {
      await axios
        .put(
          `https://league-of-billions.up.railway.app/api/post/${posts._id}/like`,
          { userId: user.id },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  const [deletePost, { isLoading }] = useDeletePostMutation();

  const deleteAPost = async (e) => {
    try {
      await deletePost(posts?._id).unwrap();
    } catch (err) {
      console.error('Failed to delete the post: ', err);
    }
  };

  // const handleDelete = async (e) => {
  //   try {
  //     await axios
  //       .delete(
  //         `https://league-of-billions.up.railway.app/api/post/${posts._id}`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
  //         { userId: user.id }
  //       )
  //       .then((res) => console.log(res));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(posts);

  return (
    <div className={styles.post}>
      {/* {posts?.map((post) => {
        return ( */}
      <div key={posts._id} className={styles.home_feeds}>
        <div className={styles.home_feeds__user_img}>
          <Image src={defaultImg} />
        </div>
        <div className={styles.home_feeds_container}>
          <div className={styles.home_feeds__post}>
            <div className={styles.home_feeds__post_username}>
              <h4>{posts?.userId}</h4>
            </div>
            <div className={styles.home_feeds__post_text}>
              <p>{posts.desc}</p>
            </div>
            <div className={styles.home_feeds__post_img}>
              {posts.img.map((img) => {
                return <img src={img} alt="post image" />;
              })}
              {/* <Image
                src={
                  'https://res.cloudinary.com/odizee/image/upload/v1664943215/juliiiuqmahyvfpguvqb.avif'
                }
                layout="fill"
                alt="post image"
              /> */}
            </div>
          </div>
          <div className={styles.home_feeds__post_icons}>
            <div className="flex items-center gap-2 cursor-pointer">
              {/* <Image
                src={liked ? likefilled : thumbs_up}
                alt="like"
                onClick={(e) => like(e)}
              /> */}
              <div onClick={(e) => like(e)}>
                {liked ? (
                  <RiHeartsFill size={20} color="#FF5A5F" />
                ) : (
                  <RiHeartsLine size={20} />
                )}
              </div>

              <p className="text-[1.2rem]">
                {likeCount > 0 ? likeCount : null}
              </p>
            </div>
            {/* <Image
              src={comment}
              alt="comment"
              onClick={() => setOpenModal(true)}
            /> */}
            {user?.id == posts?.userId ? (
              <div
                className={`cursor-pointer ${styles.delete}`}
                onClick={deleteAPost}
              >
                <RiDeleteBin3Line size={20} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default Post;

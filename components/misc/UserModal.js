import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Input, Row, Checkbox, Button, Text } from '@nextui-org/react';
import styles from './Styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../../auth/authSlice';
import { useAddNewPostMutation } from '../../post/postApiSlice';
import image from '../../assets/image.svg';
import camera from '../../public/camera.png';
import Image from 'next/image';
import url from 'eslint-plugin-node/lib/rules/prefer-global/url';
import { useUpdateUserMutation } from '../../auth/authApiSlice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function UserModal({ visible, setVisible }) {
  const closeHandler = () => {
    setVisible(false);
    // console.log('closed');
  };

  const { user, post, isLoading } = useSelector((state) => state.auth);

  const [desc, setDesc] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUpload, setImageUpload] = useState(user?.photo);
  const [img, setImg] = useState([]);
  const [formDetails, setFormDetails] = useState({
    username: '',
    fplteam: '',
  });

  const dispatch = useDispatch();
  const router = useRouter();

  //Select state data
  const token = useSelector(selectCurrentToken);

  const userId = user?.id;

  // console.log(user1);

  useEffect(() => {
    setFormDetails({
      username: user?.username,
      fplteam: user?.fplteam,
    });
    console.log('game');
  }, [user]);

  // MAKE POST
  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const postData = {
  //       userId,
  //       desc,
  //     };
  //     dispatch(createPost(postData));

  //     closeModal(true);
  //   };

  const [updateUser, { isLoading: isLoading1 }] = useUpdateUserMutation();

  // Make Post Function
  const handleNewPost = async (e) => {
    e.preventDefault();

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

        setDesc('');
        setImg([]);
        setSelectedImages([]);
        closeModal(false);
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  };

  const onSelectFile = useCallback(async (e) => {
    const selectedFiles = e.target.files[0];
    // const base64 = await convertToBase64(selectedFiles);
    setImageUpload(selectedFiles);
    const convImage = URL.createObjectURL(selectedFiles);
    setSelectedImages(convImage);

    e.target.value = '';
  }, []);

  // console.log(imageUpload);
  //DELETE IMAGE
  const deleteImage = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  const canSave = [
    formDetails.username,
    formDetails.fplteam,
    // imageUpload,
  ].every(Boolean);

  //   destructure form data
  const { username, fplteam } = formDetails;

  // ONCHANGE FOR TEXT INPUT

  const onChange = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // SUBMIT FORM
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('username', username);
    formData.append('fplteam', fplteam);
    formData.append('photo', imageUpload);
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (canSave) {
      try {
        // const updateData = await updateUser(formData).unwrap();
        // dispatch(setCredentials({ ...updateData, formData }));
        // await updateUser(formData).unwrap();

        axios
          .patch(
            'https://league-of-billions.up.railway.app/api/user/updateMe',
            formData,
            {
              headers: headers,
            }
          )
          .then((res) => {
            toast.success(res.data.data.message);
          });

        setVisible(false);
        setFormDetails({
          username: '',
          fplteam: '',
        });
      } catch (err) {}
    }
  };

  //LOG OUT FUNCTIONALITY
  const onLogout = async (e) => {
    e.preventDefault();
    // dispatch(logout());
    // dispatch(reset());

    //With credentials is used to set the cookies in browser
    axios
      .get('https://league-of-billions.up.railway.app/auth/logout', {
        withCredentials: true,
      })
      .then((res) => {});
    // router.push('/login');
  };

  return (
    <div className={styles.user_modal}>
      {/* <Toaster /> */}

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <div className={styles.user_modal}>
          <form onSubmit={onSubmit}>
            <div className={styles.upload}>
              <button type="button" className={styles.btn_upload}>
                {/* <div className={styles.}>
                  <Image src={image} alt="add image" />
                </div> */}
                <div
                  className={styles.image_preview}
                  style={{
                    // backgroundImage: `url(${image})`,
                    backgroundImage: `url(${selectedImages})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // padding: '1rem',
                    height: '8rem',
                    width: '8rem',
                    backgroundPosition: 'center',
                    borderRadius: '48px',
                  }}
                >
                  <Image src={camera} alt="add image" width={40} height={30} />
                </div>

                <input
                  type="file"
                  name="img"
                  id=""
                  onChange={onSelectFile}
                  accept="image/*, png, jpeg, jpg, image/jpeg, image/webp"
                />
              </button>
            </div>
            <input
              placeholder="username"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
            />
            <input
              placeholder="FPL Team Name"
              type="text"
              id="fplteam"
              name="fplteam"
              value={fplteam}
              onChange={onChange}
            />
            <div className={styles.button_container}>
              <input
                type="submit"
                value="Update"
                className={`${styles.login_input_button}`}
              />
              {/* {isLoading ? <Loader /> : null} */}
            </div>
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className={styles.button_container}>
            <input
              type="submit"
              value="Logout"
              className={`${styles.login_input_button}`}
              onClick={onLogout}
            />
            {/* {isLoading ? <Loader /> : null} */}
          </div>
        </div>
      </Modal>
    </div>
  );
}

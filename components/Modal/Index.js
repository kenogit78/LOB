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
import { useAddNewPostMutation } from '../../post/postApiSlice';
import { selectCurrentToken } from '../../auth/authSlice';

const Modal = ({ closeModal }) => {
  const [desc, setDesc] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUpload, setImageUpload] = useState('');
  const [img, setImg] = useState([]);

  const dispatch = useDispatch();

  //Select state data
  const token = useSelector(selectCurrentToken);
  const { user, post, isLoading } = useSelector((state) => state.auth);

  const userId = user?.id;

  console.log(userId);

  // MAKE POST
  const onSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      userId,
      desc,
    };
    dispatch(createPost(postData));

    closeModal(true);
  };

  const [addNewPost, { isLoading: isLoading1 }] = useAddNewPostMutation();

  const canSave = [user?.id, desc].every(Boolean) && !isLoading;

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
    formData.append('user', user?.id);
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

  /* FUNCTION FOR PREVIEWING IMAGES */

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
            <form onSubmit={handleNewPost}>
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
              <div>
                <div className={styles.input__btn_icon}>
                  <div className={styles.input__icons}>
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
                  </div>

                  <button type="submit">Send</button>
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

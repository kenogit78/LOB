import styles from './Styles.module.scss';
import React, { useEffect, useRef, useCallback } from 'react';

const Loader = ({
  show,
  onClose,
  backdropStyles,
  width,
  children,
  innerClose,
}) => {
  const modalRef = useRef();

  return (
    <div className={styles.backdrop} style={{ ...backdropStyles }}>
      <div className={styles.modal} ref={modalRef} style={{ width: width }}>
        <div className={styles.spinner}>
          {/*<Image src={big} alt="loader" />*/}
        </div>
      </div>
    </div>
  );
};

export default Loader;

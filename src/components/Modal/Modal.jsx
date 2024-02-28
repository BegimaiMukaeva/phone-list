import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={styles.modal__overlay} onClick={hide}/>
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <button type="button" className={styles.modal__closeButton} onClick={hide}>
          <span>&times;</span>
        </button>
        {children}
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;

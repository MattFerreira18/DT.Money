import React from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

type MessageModalProps = {
  title: string;
  message: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function MessageModal({ 
  title, 
  message, 
  isOpen, 
  onRequestClose, 
}: MessageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button">
        <img
          src={closeImg}
          alt="fechar modal"
          onClick={() => onRequestClose()}
          className='modal-close'
        />
      </button>

      <Container>
        <h2>{title}</h2>
        <p>{message}</p>
      </Container>
    </Modal>
  );
}

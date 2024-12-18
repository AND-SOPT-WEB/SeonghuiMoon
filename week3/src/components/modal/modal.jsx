import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalBackground>,
    document.getElementById("modal-root")
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 30rem;
  height: 20rem;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: darkcyan;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 2.4rem;
  cursor: pointer;
  width: 10rem;
`;

export default Modal;

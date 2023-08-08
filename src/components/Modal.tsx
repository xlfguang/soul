import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative; /* Needed for absolute positioning of the close button */
  background-image: radial-gradient(at 52% 98%, #1b1758 39%, #17162d 100%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 30%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 28px;
  padding: 0;
  cursor: pointer;
  border: none;
  color: #fff;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        {title && (
          <div
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "40px",
          }}
        >
          {children}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

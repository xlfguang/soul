import React, { ReactNode } from "react";
import styled from "styled-components";
import drawerClosure from "@/assets/images/DrawerClosure.png";
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 999;
`;

const DrawerContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: #0e0c31;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;
const DrawerClosure = styled.img`
  width: 8.53333vw;
  height: 8.53333vw;
  position: absolute;
  top: 10px;
  right: 16px;
`;

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DrawerOverlay>
      <DrawerContent>
        <DrawerClosure onClick={onClose} src={drawerClosure} />
        {children}
      </DrawerContent>
    </DrawerOverlay>
  );
};

export default Drawer;

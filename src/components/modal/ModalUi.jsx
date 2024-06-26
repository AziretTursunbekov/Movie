import React from "react";
import styled from "styled-components";

export const ModalUi = ({ children, onClose }) => {
  return (
    <StyledModal>
      <StyledBackdrop onClick={onClose}></StyledBackdrop>
      <Styled_Modal>{children}</Styled_Modal>
    </StyledModal>
  );
};
const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 2;
`;
const StyledBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.633);
  position: fixed;
  z-index: -1;
`;
const Styled_Modal = styled.div`
  width: 400px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  color: black;
  position: relative;
  z-index: 99;
`;

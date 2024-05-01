import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface PopupProps {
  text: string;
  content: React.ReactNode;
}

const PopupContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const PopupText = styled.span<{ isVisible: boolean }>`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedPopupText = styled(PopupText)`
  visibility: visible;
  animation: ${fadeIn} 1s;
`;

const Popup: React.FC<PopupProps> = ({ text, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <PopupContainer>
      <p onClick={togglePopup}>{content}</p>
      {isVisible && <AnimatedPopupText isVisible={isVisible}>{text}</AnimatedPopupText>}
      {isVisible && <div onClick={closePopup} style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 }} />}
    </PopupContainer>
  );
};

export default Popup;

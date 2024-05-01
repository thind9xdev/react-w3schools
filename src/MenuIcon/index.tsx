import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuIconContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const BarAnimation1 = keyframes`
  from {
    transform: translateY(0) rotate(0);
  }
  to {
    transform: translateY(11px) rotate(-45deg);
  }
`;

const BarAnimation2 = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const BarAnimation3 = keyframes`
  from {
    transform: translateY(0) rotate(0);
  }
  to {
    transform: translateY(-11px) rotate(45deg);
  }
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const animatedStyles = css<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen && css`
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  `}
`;

const Bar1 = styled(Bar)<{ isOpen: boolean }>`
  animation-name: ${({ isOpen }) => isOpen ? BarAnimation1 : 'none'};
  ${animatedStyles}
`;

const Bar2 = styled(Bar)<{ isOpen: boolean }>`
  animation-name: ${({ isOpen }) => isOpen ? BarAnimation2 : 'none'};
  ${animatedStyles}
`;

const Bar3 = styled(Bar)<{ isOpen: boolean }>`
  animation-name: ${({ isOpen }) => isOpen ? BarAnimation3 : 'none'};
  ${animatedStyles}
`;

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, onClick }) => {
  return (
    <MenuIconContainer className={`${isOpen ? 'change' : ''}`} onClick={onClick}>
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </MenuIconContainer>
  );
};

export default MenuIcon;

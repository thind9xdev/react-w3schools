import React, { useState, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large'; 
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; 
  effect?: 'pressed' | 'ripple';
}

const ButtonContainer = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  ${({ size }) => size === 'small' && css`
    font-size: 14px;
    padding: 10px 15px;
  `}

  ${({ size }) => size === 'large' && css`
    font-size: 14px;
    padding: 15px 25px;
  `}
`;

const RippleEffect = styled.span<{ left: number; top: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ripple-animation 1s linear;

  @keyframes ripple-animation {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  ${({ left, top }) => css`
    left: ${left}px;
    top: ${top}px;
  `}
`;

const Button: React.FC<ButtonProps> = ({ text, size = 'medium', onClick, effect }) => {
  const [ripple, setRipple] = useState<{ left: number; top: number } | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (effect === 'ripple') {
      const button = event.currentTarget;
      const buttonRect = button.getBoundingClientRect();
      const rippleSize = Math.max(buttonRect.width, buttonRect.height) * 2;
      const rippleLeft = event.clientX - buttonRect.left - rippleSize / 2;
      const rippleTop = event.clientY - buttonRect.top - rippleSize / 2;
      setRipple({ left: rippleLeft, top: rippleTop });

      setTimeout(() => {
        setRipple(null);
      }, 1000);
    }
    onClick && onClick(event); 
  };

  return (
    <>
     <ButtonContainer text={text} size={size} onClick={handleClick}>
      {text}
      {effect === 'ripple' && ripple && <RippleEffect left={ripple.left} top={ripple.top} />}
    </ButtonContainer>
    </>
  );
};

export default Button;

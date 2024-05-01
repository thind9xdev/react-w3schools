import React, { useState } from 'react';
import styled from 'styled-components';

interface TopnavProps {
  menu: React.ReactNode;
  menuIcon: React.ReactNode;
}

type ContainerProps = React.ComponentProps<'div'> & {
  responsive?: boolean;
};

const TopnavContainer = styled.div<ContainerProps>`
  overflow: hidden;
  background-color: #333;

  @media screen and (max-width: 600px) {
    position: relative;

    ${(props) =>
      props.responsive &&
      `
      .icon {
        position: absolute;
        right: 0;
        top: 0;
      }

      p {
        float: none;
        display: block;
        text-align: left;
      }
    `}
  }
`;

const MenuLink = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &.active {
    background-color: #04aa6d;
    color: white;
  }

  @media screen and (max-width: 600px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;

const MenuIcon = styled.p`
  display: none;
  float: right;
  color: #fff;

  @media screen and (max-width: 600px) {
    display: inline;
  }
`;

const Topnav: React.FC<TopnavProps> = ({ menu, menuIcon }) => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <TopnavContainer responsive={isResponsive} className={`topnav ${isResponsive ? 'responsive' : ''}`}>
      {menu}
      <MenuIcon className="icon" onClick={toggleResponsive}>
        {menuIcon}
      </MenuIcon>
    </TopnavContainer>
  );
};

export default Topnav;

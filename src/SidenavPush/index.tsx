import React, { useState } from "react";
import styled from "styled-components";

interface SidenavProps {
  mainContent?: React.ReactNode;
  menuContent?: React.ReactNode;
}

const SidenavContainer = styled.div``;

const SidenavMenu = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${({ isOpen }) => isOpen ? "250px" : "0"};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: width 0.5s;
  padding-top: 60px;
`;

const SidenavCloseButton = styled.p`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }

  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: white;
  cursor: pointer;
`;

const MainContent = styled.div<{ isOpen: boolean }>`
  transition: margin-left 0.5s;
  padding: 16px;
  margin-left: ${({ isOpen }) => isOpen ? "250px" : "0"};
`;

const Sidenav: React.FC<SidenavProps> = ({ mainContent, menuContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <SidenavContainer>
      <SidenavMenu isOpen={isOpen}>
        <SidenavCloseButton onClick={closeNav}>&times;</SidenavCloseButton>
        {menuContent}
      </SidenavMenu>

      <MainContent isOpen={isOpen}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={openNav}
            >
              &#9776;
            </span>
          </div>
          <div style={{ paddingLeft: '30px' }}>{mainContent}</div>
        </div>
      </MainContent>
    </SidenavContainer>
  );
};

export default Sidenav;

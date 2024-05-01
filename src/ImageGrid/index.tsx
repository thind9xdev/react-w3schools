import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImageLazy } from "image-lazy-component";

interface ImageGridProps {
  images: string[]; 
}

const Header = styled.div`
  text-align: center;
  padding: 32px;
`;

const Row = styled.div`
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
`;

const Column = styled.div`
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;

  img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #666;
    color: white;
  }
`;

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [gridStyle, setGridStyle] = useState('two'); 

  useEffect(() => {
    const elements = document.getElementsByClassName("btn");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", handleButtonClick);
    }
    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  const changeGrid = (style: string) => {
    setGridStyle(style);
  };

  const handleButtonClick = (event: any) => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.target.className += " active";
    switch (event.target.textContent) {
      case '1':
        changeGrid('one');
        break;
      case '2':
        changeGrid('two');
        break;
      case '4':
        changeGrid('four');
        break;
      default:
        break;
    }
  };

  const one = () =>{
    let elements = document.getElementsByClassName("column") as any;
    let i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  
        elements[i].style.flex = "100%";
      }
  }

  const two = () =>{
    let elements = document.getElementsByClassName("column") as any;
    let i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";  
        elements[i].style.flex = "50%";
      }
  }

  const four = () =>{
    let elements = document.getElementsByClassName("column") as any;
    let i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  
        elements[i].style.flex = "25%";
      }
  }

  return (
    <div>
      <Header>
        <Button onClick={one} className={`btn ${gridStyle === 'one' ? 'active' : ''}`}>1</Button>
        <Button onClick={two} className={`btn ${gridStyle === 'two' ? 'active' : ''}`}>2</Button>
        <Button onClick={four} className={`btn ${gridStyle === 'four' ? 'active' : ''}`}>4</Button>
      </Header>

      <Row>
        {images.map((image, index) => (
          <Column key={index} className={`column ${gridStyle}`}>
            <ImageLazy imgUrl={image} alt={`photo`} />
          </Column>
        ))}
      </Row>
    </div>
  );
};

export default ImageGrid;

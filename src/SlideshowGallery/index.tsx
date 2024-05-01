import React, { useState } from 'react';
import styled from 'styled-components';

interface Slide {
  src: string;
  alt: string;
}

interface SlideshowProps {
  slides: Slide[];
}

const Container = styled.div`
  position: relative;
`;

const MySlides = styled.div`
  display: none;
`;

const Cursor = styled.div`
  cursor: pointer;
`;

const Prev = styled.p`
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  left: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Next = styled(Prev)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

const CaptionContainer = styled.div`
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
`;

const Row = styled.div`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  float: left;
  width: 16.66%;
`;

const Demo = styled.img`
  opacity: 0.6;

  &:hover,
  &.active {
    opacity: 1;
  }
`;

const SlideshowGallery: React.FC<SlideshowProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n: number) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n: number) => {
    showSlides(n);
  };

  const showSlides = (n: number) => {
    let newIndex = n;
    if (n > slides.length) newIndex = 1;
    if (n < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  return (
    <Container>
      {slides.map((slide, index) => (
        <MySlides
          className={index + 1 === slideIndex ? 'mySlides' : 'mySlides hidden'}
          key={index}
        >
          <NumberText>
            {index + 1} / {slides.length}
          </NumberText>
          <img src={slide.src} style={{ width: '100%' }} alt={slide.alt} />
        </MySlides>
      ))}

      <Prev onClick={() => plusSlides(-1)}>
        ❮
      </Prev>
      <Next onClick={() => plusSlides(1)}>
        ❯
      </Next>

      <CaptionContainer>
        <img src={slides[slideIndex - 1].src} style={{ width: '100%' }} alt={slides[slideIndex - 1].alt} />
        <p id="caption">{slides[slideIndex - 1].alt}</p>
      </CaptionContainer>

      <Row>
        {slides.map((slide, index) => (
          <Column key={index}>
            <Demo
              className={index + 1 === slideIndex ? 'demo cursor active' : 'demo cursor'}
              src={slide.src.replace('_wide', '')}
              onClick={() => currentSlide(index + 1)}
              alt={slide.alt}
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export default SlideshowGallery;

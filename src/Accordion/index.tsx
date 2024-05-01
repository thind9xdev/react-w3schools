import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

interface AccordionContentProps {
  isActive: boolean;
}

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionButton = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;

  &:hover {
    background-color: #ccc;
  }
`;

const AccordionContent = styled.div<AccordionContentProps>`
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: ${({ isActive }: AccordionContentProps) => (isActive ? '1000px' : '0')};
`;

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <AccordionContainer>
      <AccordionButton className={isActive ? 'active' : ''} onClick={toggleAccordion}>
        {title}
        <span>{isActive ? '-' : '+'}</span>
      </AccordionButton>
      <AccordionContent isActive={isActive}>{content}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;

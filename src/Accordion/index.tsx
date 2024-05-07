import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const AccordionTitle = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  transition: height 0.3s ease;
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const Icon = styled.span`
  transform: rotate(0deg);
  transition: transform 0.3s ease;
  float: right; 
`;

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionTitle onClick={toggleAccordion}>
        {title}
        <Icon style={{float:'right'}}>{isOpen ? '-' : '+'}</Icon>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

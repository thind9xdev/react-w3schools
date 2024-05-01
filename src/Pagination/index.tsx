import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface PageNumberProps {
  active: boolean;
}

const PaginationContainer = styled.div`
  display: flex;
`;

const PageNumber = styled.p<PageNumberProps>`
  color: ${props => props.active ? 'white' : 'black'};
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.active ? '' : 'lightgray'};
  }

  ${({ active }) => active && `
    background-color: dodgerblue;
  `}
`;

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const calculatePages = () => {
      const pagesToShow = [];
      const totalPagesToShow = Math.min(totalPages, 7); // You can adjust this number as needed
      let startPage = 1;
      let endPage = totalPagesToShow;

      if (currentPage > Math.floor(totalPagesToShow / 2)) {
        startPage = Math.max(currentPage - Math.floor(totalPagesToShow / 2), 1);
        endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);
      }

      for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
      }

      setPages(pagesToShow);
    };

    calculatePages();
  }, [totalPages, currentPage]);

  return (
    <PaginationContainer>
      <PageNumber onClick={() => onPageChange(Math.max(currentPage - 1, 1))} active={false}>&laquo;</PageNumber>
      {pages.map((page) => (
        <PageNumber 
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      <PageNumber onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} active={false}>&raquo;</PageNumber>
    </PaginationContainer>
  );
};

export default Pagination;

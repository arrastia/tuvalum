import React, { useState } from 'react';
import { atomFamily } from 'recoil';
import { Button } from '../Button';
import { Styles } from './Pagination.styles';

const items = [...Array.from({ length: 10 }, (v, k) => k + 1)];

type Props = {
  onPageChange: () => void;
};

export const Pagination = ({ onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = (oage: number) => {
    setCurrentPage(oage);
    onPageChange();
  };

  return (
    <Styles.Pagination>
      {items.map(item => (
        <Styles.Page isActive={item === currentPage} key={item} onClick={() => onChangePage(item)}>
          {item}
        </Styles.Page>
      ))}
    </Styles.Pagination>
  );
};

import React from 'react';
import { atomFamily, useRecoilValue } from 'recoil';

type Props = {
  pageId: number;
};

const pages = atomFamily({
  key: 'pages',
  default: (id: number) => ({
    page: id,
    isActive: false
  })
});

export const PageButton = ({ pageId }: Props) => {
  const { isActive, page } = useRecoilValue(pages(pageId));
  return <div>{page}</div>;
};

import { IoFilter } from 'react-icons/io5';
import { Button } from 'ui/_components/Button';
import { Pagination } from 'ui/_components/Pagination';
import { Styles } from './ListTitle.styles';

export const ListTitle = () => {
  return (
    <Styles.ListTitle>
      <Styles.TitleWrapper>
        <Styles.Title>Products</Styles.Title>
        <Button icon={<IoFilter />} />
      </Styles.TitleWrapper>
      <Pagination onPageChange={() => {}} />
    </Styles.ListTitle>
  );
};

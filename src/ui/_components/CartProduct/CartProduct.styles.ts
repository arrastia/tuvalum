import styled from 'styled-components';
import { Column } from 'ui/_styles/components/Column';
import { Image } from 'ui/_styles/components/Image';
import { Row } from 'ui/_styles/components/Row';

const ProductImage = styled(Image)`
  border-radius: 10px;
  height: 100px;
  width: 100px;
`;

const Product = styled(Row)``;

const Content = styled(Column)``;

export const Styles = { ProductImage, Product, Content };

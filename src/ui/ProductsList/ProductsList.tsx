import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { Styles } from './ProductsList.styles';

import { Card } from 'ui/_components/Card';

import { productsState } from 'ui/_tools/Stores/ProductStore';
import { ListTitle } from './_components/ListTitle';
import { cartProductsIdsState, cartProductState } from 'ui/_tools/Stores/CartStore';

export const ProductsList = () => {
  const products = useRecoilValue(productsState);
  // const setCardProducts = useSetRecoilState(cartProductsIdsState);

  const onAddToCart = useRecoilCallback(({ set, snapshot }) => async (id: number) => {
    const cartProductsIds = await snapshot.getPromise(cartProductsIdsState);
    const isRepeatedItem = cartProductsIds.includes(id);

    console.log('isRepeatedItem :>> ', isRepeatedItem);

    if (isRepeatedItem) {
      //   const cartProduct = await snapshot.getPromise(cartProductState(id));
      //   set({
      //     ...cartProduct,
      //     quantity: cartProduct.quantity + 1,
      //   });
      // }
      // const cartProduct = await snapshot.getPromise(cartProductState(id));
      // console.log('cartProduct :>> ', cartProduct);
      set(cartProductState(id), prevState => {
        console.log('prevState :>> ', prevState);
        return { ...prevState, quantity: prevState.quantity + 1, test: 'test' };
      });
    } else {
      set(cartProductsIdsState, prevState => [...prevState, id]);
    }

    // const cartProductsIds = await snapshot.getPromise(cartProductsIdsState);
    // const isRepeatedItem = cartProductsIds.includes(id);

    // if (!isRepeatedItem) {
    //   set(cartProductsIdsState, prevState => [...prevState, id]);
    // } else {
    //   const product = await snapshot.getPromise(cartProductState(id));
    //   set(product, prevState => ({ ...prevState, quantity: prevState.quantity + 1 }));
    // }
  });

  // const onAddToCart = (id: number) => {
  //   setCardProducts(prevState => [...prevState, id]);
  // };

  return (
    <Styles.Container>
      <ListTitle />
      <Styles.CardsWrapper>
        {products.map(product => (
          <Card
            id={product.id}
            image={product.image}
            key={product.id}
            onButtonClick={onAddToCart}
            price={product.price}
            quantity={product.quantity}
            title={product.title}
            year={product.year}
          />
        ))}
      </Styles.CardsWrapper>
    </Styles.Container>
  );
};

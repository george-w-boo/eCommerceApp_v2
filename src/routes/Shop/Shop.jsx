import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductContext';

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);

  return (
    <div>
      {currentProducts.map(({id, name, imageUrl}) => (
        <div key={id}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} />
        </div>
      ))}
    </div>
  )
}

export default Shop;

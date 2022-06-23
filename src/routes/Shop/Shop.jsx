import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductContext';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import './Shop.scss';

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {currentProducts[4].items.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Shop;

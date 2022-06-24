import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import './Category.scss';

const Category = () => {
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap, setProducts]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  )
}

export default Category;

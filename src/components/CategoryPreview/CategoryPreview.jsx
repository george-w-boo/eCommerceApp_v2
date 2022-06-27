import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import ProductCard from '../common/ProductCard/ProductCard';
import Spinner from '../common/Spinner/Spinner';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} ><span className="title">{title.toUpperCase()}</span></Link>
      </h2>
      {isLoading ? <Spinner /> : (
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      )}
    </div>
  )
}

export default CategoryPreview;

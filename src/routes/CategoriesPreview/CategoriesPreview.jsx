import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => <CategoryPreview key={title} title={title} products={categoriesMap[title]} />)}
    </>
  )
}

export default CategoriesPreview;

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategories } from '../../store/categories/categories.action';
import './Shop.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');

      console.log('Shop > categoriesArray', categoriesArray);
      dispatch(setCategories(categoriesArray));
    })();
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop;

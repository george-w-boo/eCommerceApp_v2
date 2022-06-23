import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap }

  useEffect(() => {
    (async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    })();
  }, [])

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
};

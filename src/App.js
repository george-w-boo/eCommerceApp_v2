import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import { ProductsProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import Shop from "./routes/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CartProvider>
            <Navigation />
          </CartProvider>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="shop"
          element={
            <ProductsProvider>
              <Shop />
            </ProductsProvider>
          }
        />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import("./routes/Home/Home"));
const Navigation = lazy(() => import("./routes/Navigation/Navigation"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>Shop</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

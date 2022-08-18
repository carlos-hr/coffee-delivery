import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { Checkout, Home, OrderPlaced } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Route>
    </Routes>
  );
};

export default Router;

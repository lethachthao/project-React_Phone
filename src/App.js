import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/layout/Footer";
import Header from "./shared/components/layout/Header";
import Menu from "./shared/components/layout/Menu";
import Sidbar from "./shared/components/layout/Sidbar";
import Slider from "./shared/components/layout/Slider";
import Home from "./Pages/Home";
import Category from "./Pages/Cattegory";
import ProductDetails from "./Pages/ProductDetails";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          {/*	Body	*/}
          <div id="body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Menu />
                </div>
              </div>
              <div className="row" style={{flexWrap: "nowrap"}}>
                <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                  {/*	Slider	*/}
                  <Slider />
                  {/*	End Slider	*/}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Category" element={<Category />} />
                    <Route
                      path="/ProductDetails"
                      element={<ProductDetails />}
                    />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Sidbar />
              </div>
            </div>
          </div>
          {/*	End Body	*/}
          <Footer />
          {/*	End Footer	*/}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

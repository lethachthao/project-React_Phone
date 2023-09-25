import React from "react";
import { getProducts } from "../../Services/Api";
import ProductItem from "../../shared/components/Product-item";

const Home = () => {
  const [featureProduct, setFeatureProduct] = React.useState([]);
  const [LatestProduct, setLatestProduct] = React.useState([]);
  React.useEffect(()=>{
      //Get Featured
      getProducts({
        params:{
          limit: 6,
          "filter[is_featured]": true
        }
      }).then(({data})=>setFeatureProduct(data.data.docs))
      //Get latest
      getProducts({
        params: {
          limit: 6,
        },
      }).then(({ data }) => setLatestProduct(data.data.docs));
  }, [])
  return (
    <>
      {/*	Feature Product	*/}
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          {
            featureProduct.map((item)=> <ProductItem item={item}/>)
          }
        </div>
      </div>
      {/*	End Feature Product	*/}
      {/*	Latest Product	*/}
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          {
            LatestProduct.map((item)=>
              <ProductItem item={item}/>
            )
          }
        </div>
      </div>
      {/*	End Latest Product	*/}
    </>
  );
};

export default Home;

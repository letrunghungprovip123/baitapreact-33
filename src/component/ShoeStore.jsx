import data from "../assets/data/data.json";
import Header from "./Header";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Footer from "./Footer";

const ShoeStore = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductList giay={data} />
      <Footer/>
    </>
  );
};

export default ShoeStore;

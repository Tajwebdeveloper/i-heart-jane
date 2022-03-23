import { Header, Banner, Footer, Features, Effects, Products, Collection, Reviews, Ratings, Brands, Love } from "../components/sections/index";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Effects />
      <Products />
      <Collection />
      {/*<Reviews />
      <Ratings />
      <Brands />
      <Love /> */}
      <Footer />
    </div>
  );
};

export default IndexPage;

import { Header, Banner, Footer, Features, Effects, Favourite, Products, Collection, Reviews, Ratings, Brands, Love } from "../components/sections/index";
import Head from 'next/head'

const IndexPage = () => {
  
  return (
    
    <div>
      <Head>
      <meta http-equiv="cache-control" content="no-cache"/>
    </Head>
      <Header />
      <Banner />
      <Features />
      <Effects />
      <Products />
      <Collection />
      <Reviews />
      <Ratings />
      <Brands />
      <Favourite />
      <Love />
      <Footer />
    </div>
  );
};

export default IndexPage;

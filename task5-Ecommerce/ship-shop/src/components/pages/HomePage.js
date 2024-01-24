import React from "react";
import Layout from "./../layout/layout";
import Banner from "./banner";
import Categories from "./categories";
import Trendingproducts from "./trendingproducts";
import Newsletter from "./newsletter";


const HomePage = () => {

  return (
    <Layout>
     <Banner/>
     <Categories/>
     <Trendingproducts/>
     <Newsletter/>
    </Layout>
  );
};

export default HomePage;
import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import Banner from "../components/cards/Banner";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Hero from "../components/nav/Hero"
// import Footertop from "../components/nav/Footertop"
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="row">
        <Hero/>
      </div>

      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>
      
      <div style={{ margin: "5px", borderRadius: "5px", border: "2px solid #eee"}}>
      <h3 className="text-start text-danger font-weight-bold p-3 mb-5 display-4 jumbotron">
          <Typewriter
         options={{
         strings: ["New Arrivals", "New Arrivals", "New Arrivals"],
         autoStart: true,
         loop: true,
      }}
      />
      </h3>
      <NewArrivals />
      </div>

      <div>
        <Banner/>
      </div>

      <div style={{ margin: "5px", borderRadius: "5px", border: "2px solid #eee"}}>
      <h3 className="text-start text-danger font-weight-bold p-3  mb-5 display-4 jumbotron">
          <Typewriter
         options={{
         strings: ["Best Sellers", "Best Sellers", "Best Sellers"],
         autoStart: true,
         loop: true,
      }}
      />
      </h3>
      <BestSellers />
      </div>
      <div style={{ margin: "5px", borderRadius: "5px", border: "2px solid #eee"}}>
      <h4 className="text-start text-danger font-weight-bold p-3  mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />
      </div>
      <div style={{ margin: "5px", borderRadius: "5px", border: "2px solid #eee"}}>
      <h4 className="text-start text-danger font-weight-bold p-3  mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList />
      </div>
      <br />
      <div>
      {/* <Footertop /> */}
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;

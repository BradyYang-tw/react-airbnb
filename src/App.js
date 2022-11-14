import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Contact from "./components/Contact";
import data from "./data";
import "./App.css";

const App = () => {
  // const data = {
  //   img: "../katie-zaferes-hero.png",
  //   rating: 5.0,
  //   reviewCount: 6,
  //   country: "USA",
  //   title: "Life lessions with Katie Zaferes",
  //   price: 136,
  // };
  const dealData = data.map((data) => {
    return (
      <Card
        key={data.id}
        title={data.title}
        img={data.img}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        country={data.country}
        price={data.price}
      ></Card>
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="card-list">{dealData}</section>
    </div>
  );
};

export default App;

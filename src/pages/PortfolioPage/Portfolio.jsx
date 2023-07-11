import React from "react";
import Entertainment from "./Entertainment";
import Dictionary from "./Dictionary";
import PlanetFacts from "./PlanetFacts";
import RestCountries from "./RestCountries";
import Todo from "./Todo";

const Portfolio = () => {
  return (
    <main className="portfolio">
      <section>
        <Entertainment />
        <div className="line"></div>
        <Dictionary />
        <div className="line"></div>
        <PlanetFacts />
        <div className="line"></div>
        <RestCountries />
        <div className="line"></div>
        <Todo />
        <div className="line"></div>
      </section>
    </main>
  );
};

export default Portfolio;

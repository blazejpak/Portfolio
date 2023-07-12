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
        <Entertainment index={1} />
        <div className="line"></div>
        <Dictionary index={2} />
        <div className="line"></div>
        <PlanetFacts index={3} />
        <div className="line"></div>
        <RestCountries index={4} />
        <div className="line"></div>
        <Todo index={5} />
      </section>
    </main>
  );
};

export default Portfolio;

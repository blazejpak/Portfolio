import React, { useEffect, useRef, useState } from "react";
import Entertainment from "./Entertainment";
import Dictionary from "./Dictionary";
import PlanetFacts from "./PlanetFacts";
import RestCountries from "./RestCountries";
import Todo from "./Todo";

const Portfolio = () => {
  const portfolioRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("portfolio_visible");
            entry.target.classList.remove("portfolio_invisible");
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const portfolios = portfolioRef.current.children;

    Array.from(portfolios).forEach((portfolio) => {
      portfolio.classList.add("portfolio_invisible");
      observer.observe(portfolio);
    });

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <main className="portfolio">
      <section ref={portfolioRef}>
        <div className="">
          <Entertainment index={1} />
          <div className="line"></div>
        </div>
        <div className="">
          <Dictionary index={2} />
          <div className="line"></div>
        </div>
        <div className="">
          <PlanetFacts index={3} />
          <div className="line"></div>
        </div>
        <div className="">
          <RestCountries index={4} />
          <div className="line"></div>
        </div>
        <div className="">
          <Todo index={5} />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;

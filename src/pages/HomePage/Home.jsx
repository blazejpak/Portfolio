import React, { useRef } from "react";
import Button from "../../UI/button";
import Skills from "./Skills";

const Home = () => {
  const aboutRef = useRef(null);

  console.log(aboutRef.current);

  return (
    <main className="home">
      <section className="hero">
        <h1>Hey, I'm Błażej Pakuła and I love building beautiful websites</h1>
        <Button text="about me" />
        <Skills />
      </section>
      <div className="line"></div>
      <section className="about" id="about" ref={aboutRef}>
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
      </section>
    </main>
  );
};

export default Home;

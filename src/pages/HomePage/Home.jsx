import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import Button from "../../UI/Button";
import ButtonSite from "../../UI/ButtonSite";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";

const Home = () => {
  const [scrollUpVisible, setScrollUpVisible] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const interestRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setScrollUpVisible(true);
      } else {
        setScrollUpVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let scrollUp;
  if (scrollUpVisible) {
    scrollUp = (
      <div
        className="home_absolute"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <BsArrowBarUp className="home_absolute--icon" />
      </div>
    );
  }

  return (
    <main className="home" ref={homeRef}>
      {scrollUp}
      <section className="hero">
        <h1>Hey, I'm Błażej Pakuła and I love building beautiful websites</h1>
        <Button
          text="about me"
          onClick={() =>
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      </section>
      <section className="about" id="about" ref={aboutRef}>
        <h2>About Me</h2>
        <p className="about_text">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <ButtonSite text="go to portfolio" link="/portfolio" />
        <div className="home_scroll">
          <BsArrowBarDown
            className="home_scroll--icon"
            onClick={() =>
              skillsRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </div>
      </section>
      <section className="skills" ref={skillsRef}>
        <h2>Skills</h2>

        <Skills />
        <div className="home_scroll">
          <BsArrowBarDown
            className="home_scroll--icon"
            onClick={() =>
              interestRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </div>
      </section>

      <section className="interest" ref={interestRef}>
        <h2>Interested in doing a project together?</h2>
        <ButtonSite text="contact me" link="/contact" />
      </section>
    </main>
  );
};

export default Home;

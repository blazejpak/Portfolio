import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import InterestContact from "../../components/InterestContact";
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
        <p className="hero_text">Hi, my name is</p>
        <h1 className="hero_heading-primary">Błażej Pakuła</h1>
        <h2 className="hero_heading-secondary">I'm a Front End Developer</h2>
        <Button
          text="about me"
          onClick={() =>
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        />
      </section>
      <section className="about" id="about" ref={aboutRef}>
        <h2>About</h2>
        <div className="about_box">
          <p className="about_text">
            Hi. I'm Błażej, nice to meet you. Please feel free to look around.
          </p>
          <p className="about_text--more">
            I am a passionate programmer specializing in responsive design.
            Mainly, I use React and TailwindCSS, but I feel flexible enough to
            use, for example, SCSS for styling. I try my best to create the most
            user-friendly interfaces for various devices. I am based in
            Wejherowo, Poland, but I have no issue with working remotely or
            relocating if needed. When I am not coding, I try to find time for
            swimming and cycling. Additionally, I am a fan of books, movies, the
            world, and everything related to the Harry Potter series.
          </p>
        </div>
        <ButtonSite text="go to portfolio" link="/portfolio" />
        <div
          className="home_scroll"
          onClick={() =>
            skillsRef.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
            })
          }
        >
          <BsArrowBarDown className="home_scroll--icon" />
        </div>
      </section>
      <section className="skills" ref={skillsRef}>
        <h2>Skills</h2>

        <Skills />
        <div
          className="home_scroll"
          onClick={() =>
            interestRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <BsArrowBarDown className="home_scroll--icon" />
        </div>
      </section>
      <InterestContact pickedRef={interestRef} />
    </main>
  );
};

export default Home;

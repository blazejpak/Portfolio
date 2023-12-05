import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import InterestContact from "../../components/InterestContact";
import Button from "../../UI/Button";
import ButtonSite from "../../UI/ButtonSite";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";

const Home = () => {
  const [scrollUpVisible, setScrollUpVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState();

  const homeRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home_visible");
            entry.target.classList.remove("home_invisible");
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const sections = homeRef.current.children;

    Array.from(sections).forEach((section) => {
      section.classList.add("home_invisible");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isIntersecting]);

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
        <div className="hero_box">
          <div className="hero_box--text">
            <p className="hero_text">Hi, my name is</p>
            <h1 className="hero_heading-primary">Błażej Pakuła</h1>
            <h2 className="hero_heading-secondary">
              I'm a Front End Developer
            </h2>
          </div>
          <img
            src="/assets/images/header.jpg"
            alt="Image of code in vistual studio code"
            className="hero_image"
          />
        </div>
        <Button
          text="about me"
          onClick={() => {
            const aboutPosition = aboutRef.current.getBoundingClientRect().top;
            return window.scrollTo({
              top: window.pageYOffset + aboutPosition - 100,
              behavior: "smooth",
            });
          }}
        />
      </section>
      <section className="about" id="about" ref={aboutRef}>
        <h2>About</h2>
        <div className="about_box">
          <p className="about_text">
            Hi. I'm Błażej, nice to meet you. Please feel free to look around.
          </p>
          <p className="about_text--more">
            I am a passionate programmer specialising in responsive design.
            Mainly, I use React and TailwindCSS, but I feel flexible enough to
            use, for example, SCSS for styling. I focus on creating
            user-friendly interfaces for various devices. When I am not coding,
            I try to find time for swimming or cycling. Additionally, I am a fan
            of books, movies, the world, and everything related to the Harry
            Potter series.
          </p>
        </div>
        <ButtonSite text="go to portfolio" link="/portfolio" />
      </section>
      <section className="skills">
        <h2>Skills</h2>

        <Skills />
      </section>
      <InterestContact />
    </main>
  );
};

export default Home;

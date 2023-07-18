import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import planetFactsImg from "../../assets/images/planetFacts.webp";
import planetFactsImgDetail from "../../assets/images/planetFacts--detail.webp";
import planetFactsImgDetatilMore from "../../assets/images/planetFacts--more-detail.webp";

const PlanetFactsDetail = () => {
  const images = [
    {
      src: planetFactsImg,
      alt: "Image of planet facts site",
    },
    { src: planetFactsImgDetail, alt: "Image of planet facts site in detail" },
    {
      src: planetFactsImgDetatilMore,
      alt: "Image of planet facts site with more detail",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="detail-section">
      <img
        src={planetFactsImg}
        alt="Image of Planet Facts Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Planet Facts App</h2>
              <p>
                I have developed a fully responsive multi-page website where you
                can explore and read interesting facts about the planets
                orbiting around the Sun. Each page of the website is dedicated
                to a specific planet in our solar system.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                React / React-Router / TailwindCSS / Framer-Motion
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://planets-fact-site-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/planets-fact-site"
                />
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="detail-section_box">
          <div>
            <h3 className="detail-section--heading">Project Background</h3>
            <p>
              This project was created by Front End Mentor in Figma and
              developed by me. I used React with its various hooks to manage
              states and effects. For navigation, I employed React Router. The
              styling was done using Tailwind CSS, and for animating the
              planets, I used Framer Motion.
            </p>
          </div>
          <div>
            <h3 className="detail-section--heading">Static Previews</h3>
            <div className="detail-section_images-box">
              <div className="detail-section_images">
                <button className="detail-section_images--button detail-section_images--button-prev">
                  <AiOutlineArrowLeft
                    size={32}
                    onClick={prevSlide}
                    aria-label="left arrow"
                  />
                </button>
                <button className="detail-section_images--button detail-section_images--button-next">
                  <AiOutlineArrowRight
                    size={32}
                    onClick={nextSlide}
                    aria-label="right arrow"
                  />
                </button>
                <div
                  role="img"
                  aria-label={images[currentIndex].alt}
                  style={{
                    backgroundImage: `url(${images[currentIndex].src})`,
                  }}
                  className="detail-section_images--image"
                ></div>
              </div>
              <div className="detail-section_images--dots">
                {images.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`detail-section_images--dots-button ${
                      slideIndex === currentIndex
                        ? "detail-section_images--dots-button_active"
                        : ""
                    }`}
                  >
                    <RxDotFilled size={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonNavigatePortfolio
        leftProject="Dictionary"
        rightProject="Rest Countries"
        navigateLeft="dictionary"
        navigateRight="restcountries"
      />
      <InterestContact />
    </section>
  );
};

export default PlanetFactsDetail;

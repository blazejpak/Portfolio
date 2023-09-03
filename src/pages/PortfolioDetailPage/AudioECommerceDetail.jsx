import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

const DictionaryDetail = () => {
  const images = [
    {
      src: "/assets/images/audiophile/audiophile-mainPage-desktop.webp",
      alt: "Image of Dictionary app with details",
    },
    {
      src: "/assets/images/audiophile/audiophile-emptyCart-desktop.webp",
      alt: "Image of Dictionary app with details",
    },
    {
      src: "/assets/images/audiophile/audiophile-cartFilled-desktop.webp",
      alt: "Image of Dictionary app in light mode",
    },
    {
      src: "/assets/images/audiophile/audiophile-productDetail-desktop.webp",
      alt: "Image of Dictionary app with details",
    },
    {
      src: "/assets/images/audiophile/audiophile-checkout-desktop.webp",
      alt: "Image of Dictionary app with details",
    },

    {
      src: "/assets/images/audiophile/audiophile-orderConfirmation-desktop.webp",
      alt: "Image of Dictionary app with details",
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
        src="/assets/images/audiophile/audiophile-mainPage-desktop.webp"
        alt="Image of Audio eCommerce Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">
                Audio eCommerce Website
              </h2>
              <p>
                This project was created using the Dictionary API. I used Raect
                with TypeScript, Redux to manage states, TailwindCSS for
                styling, and Framer Motion for animation. This is a fully
                responsive website where you can check the meaning of a written
                word, find synonyms, and hear the correct pronunciation.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                React / TypeScript / Redux / TailwindCSS / Framer Motion
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://audio-e-commerce-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/Audio-eCommerce"
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
              This project was designed by a Front End Mentor in Figma and
              developed by me. I used React with hooks to manage states or
              effects in components, but I also used Redux to manage states in
              the whole application. This project includes data from an external
              API that allows you to check, for example, synonyms, meaning, or
              pronunciation.
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
                    role="img"
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
        leftProject="Todo"
        rightProject="Entertainment"
        navigateLeft="todo"
        navigateRight="entertainment"
      />
      <InterestContact />
    </section>
  );
};

export default DictionaryDetail;

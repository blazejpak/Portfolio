import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import restCountriesImg from "../../assets/images/restCountries--dark.webp";
import restCountriesImgLight from "../../assets/images/restCountries--light.webp";
import restCountriesImgLightDetail from "../../assets/images/restCountries--light--detail.webp";
import restCountriesImgFilter from "../../assets/images/restCountries--filter.webp";
import restCountriesImgSearch from "../../assets/images/restCountries--search.webp";

const RestCountries = () => {
  const images = [
    {
      src: restCountriesImg,
      alt: "image of Rest Countries site",
    },
    {
      src: restCountriesImgLight,
      alt: "image of Rest Countries site in light mode",
    },
    {
      src: restCountriesImgLightDetail,
      alt: "image of Rest Countries site deatails in light mode",
    },
    {
      src: restCountriesImgFilter,
      alt: "image of Rest Countries site with filter feature",
    },
    {
      src: restCountriesImgSearch,
      alt: "image of Rest Countries site with search feature",
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
        src={restCountriesImg}
        alt="Image of RestCountries App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">RestCountries App</h2>
              <p>
                This project was created using the RestCountries API. It is a
                fully responsive website where you can read information about
                various countries. You have the ability to choose color themes,
                search for specific countries, and filter them based on your
                preferences.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                React / Axios / React-Router / TailwindCSS
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://rest-countries-api-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/Rest-countries-api"
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
              This project was designed by a Frontend Mentor in Figma and
              developed by me. I used React with its hooks to effectively manage
              states and effects in the application. For navigation, I
              implemented React-Router. To fetch data from the API, I utilized
              the Axios library. The styling was accomplished using Tailwind
              CSS.
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
        leftProject="Planet Facts"
        rightProject="Todo"
        navigateLeft="planetfacts"
        navigateRight="todo"
      />
      <InterestContact />
    </section>
  );
};

export default RestCountries;

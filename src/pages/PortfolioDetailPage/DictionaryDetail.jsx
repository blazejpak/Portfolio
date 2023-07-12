import ButtonExternal from "../../UI/ButtonExternal";
import dictionaryImg from "../../assets/images/dictionary.webp";

const DictionaryDetail = () => {
  return (
    <section>
      <img
        src={dictionaryImg}
        alt="Image of Dictionary App Website"
        className="detail_image"
      />
      <div>
        <div className="line"></div>
        <div>
          <h2>Dictionary</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
        </div>
        <div>
          <p></p>
          <ButtonExternal text="visit website" link="#" />
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default DictionaryDetail;

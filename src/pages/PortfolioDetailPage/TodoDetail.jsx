import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import todoImg from "../../assets/images/todo_dark.webp";
import todoImgLight from "../../assets/images/todo_light.webp";

const TodoDetail = () => {
  return (
    <section className="detail-section">
      <img
        src={todoImg}
        alt="Image of Dictionary App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Todo App</h2>
              <p>
                This project required me to build a fully responsive landing
                page to the designs provided. I used HTML5, along with CSS Grid
                and JavaScript for the areas that required interactivity, such
                as the testimonial slider.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">HTML / CSS / JS</p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal text="LIVE" link="#" />
                <ButtonExternal text="GITHUB" link="#" />
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="detail-section_box">
          <div>
            <h3 className="detail-section--heading">Project Background</h3>
            <p>
              This project was a front-end challenge from Frontend Mentor. It’s
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>
          </div>
          <div>
            <h3 className="detail-section--heading">Static Previews</h3>
            <div className="detail-section_images">
              <img src={todoImg} className="detail-section_images--image" />
              <img
                src={todoImgLight}
                className="detail-section_images--image"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonNavigatePortfolio
        leftProject="RestCountries"
        rightProject="Planet Facts"
        navigateLeft="restcountries"
        navigateRight="planetfacts"
      />
      <InterestContact />
    </section>
  );
};

export default TodoDetail;

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import entertainmentImg from "../../assets/images/entertainment.webp";
import entertainmentImgLogin from "../../assets/images/entertainment--login.webp";

const EntertainmentDetail = () => {
  return (
    <section className="detail-section">
      <img
        src={entertainmentImg}
        alt="Image of Dictionary App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Entertainment App</h2>
              <p>
                Fully responsive multi-page Entertainment App where you can sign
                in / sign up, search and bookmark favorite movie / serial.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                TAILWINDCSS / REACT / REACT-ROUTER / FIREBASE
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://entertainment-app-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/Entertainment-app"
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
              This project was designed by FrontEnd Mentor in Figma and coded by
              me. I used React with hooks like useContext, useEffect, and
              useState to manage application. For navigation, I employed
              React-Router. Authentication was implemented using firebase. To
              style the app I used TailwindCSS. This project contains static
              data that allows you to search, filter, and bookmark series and
              movies.
            </p>
          </div>
          <div>
            <h3 className="detail-section--heading">Static Previews</h3>
            <div className="detail-section_images">
              <img
                src={entertainmentImg}
                className="detail-section_images--image"
              />
              <img
                src={entertainmentImgLogin}
                className="detail-section_images--image"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonNavigatePortfolio
        leftProject="Todo"
        rightProject="Dictionary"
        navigateLeft="todo"
        navigateRight="dictionary"
      />
      <InterestContact />
    </section>
  );
};

export default EntertainmentDetail;

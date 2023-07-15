import Github from "../../UI/Github";
import Linkedin from "../../UI/Linkedin";
import FrontendMentor from "../../UI/FrontendMentor";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <div className="contact_info">
          <h2>Get in Touch</h2>
          <div>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="contact_socials">
              <Github fill="#33323d" />
              <Linkedin fill="#33323d" />
              <div className="contact_socials--fem">
                <FrontendMentor />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact_info">
          <h2>Contact Me</h2>
          <form className="contact_form">
            <div className="contact_form--label-input">
              <label className="contact_form--label">Name</label>
              <input
                type="text"
                placeholder="Błażej Pakuła"
                className="contact_form--input"
              />
            </div>
            <div className="contact_form--label-input">
              <label className="contact_form--label">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="contact_form--input"
              />
            </div>
            <div className="contact_form--label-input">
              <label className="contact_form--label">Message</label>
              <textarea
                type="text"
                placeholder="How can I help?"
                className="contact_form--message"
              />
            </div>

            <input
              type="submit"
              value="send message"
              className="contact_form--button"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;

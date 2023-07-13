import ButtonSite from "../UI/ButtonSite";

const InterestContact = ({ pickedRef }) => {
  return (
    <section className="interest" ref={pickedRef}>
      <h2>Interested in doing a project together?</h2>
      <ButtonSite text="contact me" link="/contact" />
    </section>
  );
};

export default InterestContact;

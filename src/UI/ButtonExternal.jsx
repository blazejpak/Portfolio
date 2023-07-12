const ButtonExternal = ({ link, text }) => {
  return (
    //Using class from ButtonSite.scss  only changed anchor instead Link
    <a className="button-site" href={link}>
      <p className="button-site_text">{text}</p>
    </a>
  );
};

export default ButtonExternal;

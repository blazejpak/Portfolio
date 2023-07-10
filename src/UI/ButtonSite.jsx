import React from "react";
import { Link } from "react-router-dom";

const ButtonSite = ({ link, text }) => {
  return (
    <Link className="button-site" to={link}>
      <p className="button-site_text">{text}</p>
    </Link>
  );
};

export default ButtonSite;

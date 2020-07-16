import React from "react";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay="500">
        <div className="font_righteous footer_logo_venue">the venue</div>
        <div className="footer_copyright">
          the venue 2020 all rights reserved{" "}
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;

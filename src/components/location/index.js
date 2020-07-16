import React from "react";

const index = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22401.450973541043!2d28.048841726644163!3d45.425845084816594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x341569ba69416dbc!2sIV%20Future%20SRL!5e0!3m2!1sen!2sro!4v1594885891365!5m2!1sen!2sro"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default index;

import React from "react";
import "./CommomSection.css";

const CommomSection = ({ title }) => {
  return (
    <section className="commom_section">
      <h2>{title}</h2>
    </section>
  );
};

export default CommomSection;

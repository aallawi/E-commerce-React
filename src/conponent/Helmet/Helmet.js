import React from "react";

const Helmet = (Props) => {
  document.title = "Modern Furniture - " + Props.title;
  return <div className="w-100">{Props.children}</div>;
};
export default Helmet;

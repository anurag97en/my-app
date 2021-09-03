import React from "react";

//STYLES
let parentStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "red",
  color: "green",
  display: "flex",
  flex: "nowrap",
  textAlign: "center",
  // paddingLeft:"200px"
};
const MenuComponent = ({ children }) => {
  return <div style={parentStyle}>{children}</div>;
};

export default MenuComponent;

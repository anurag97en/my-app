import React from "react";

//STYLES
let parentStyle = {
  // width: "100%",
  // height: "50px",
  backgroundColor: "#ff5511",
  color: "green",
//   display: "flex",
//   flex: "nowrap",
//   textAlign: "center",
};
const SubMenuComponent = ({ children }) => {
  return <div style={parentStyle}>{children}</div>;
  // return <div>{children}</div>
};

export default SubMenuComponent;

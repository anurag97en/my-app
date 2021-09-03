import React, { useState, useEffect } from "react";
// import styles from "./index.module.css";
//STYLES
let parentStyle = {
    
  height: "50px",
  backgroundColor: "#cc9944",
  color: "yellow",
  paddingLeft: "5px",
  paddingRight: "5px",
  margin: "auto",
  // border: "1px solid blue",
  borderRadius:"5px"
};

let parentStyleHover = {
  height: "50px",
  backgroundColor: "yellow",
  color: "#990099",
  paddingLeft: "5px",
  paddingRight: "5px",
  margin: "auto",
  // border: "2px solid blue",
  borderRadius:"5px",
  // display: "content-block"
};

const SubMenuItems = ({ children, maintainFocus}) => {
  const [customStyle, setCustomStyle] = useState(parentStyle);

  useEffect(() => {
    console.log("MAINTAIN FOCUS ON ITEMS PAGE =>", maintainFocus)
    maintainFocus
      ? setCustomStyle(parentStyleHover)
      : setCustomStyle(parentStyle);
  }, [maintainFocus]);
  // console.log("STYLE=> ", styles.menuItems)
  return (
    <div
      style={customStyle}
      onMouseEnter={() => setCustomStyle(parentStyleHover)}
      onMouseLeave={() => maintainFocus? setCustomStyle(parentStyleHover): setCustomStyle(parentStyle)}
    >
      {children}
    </div>
  );
};

export default SubMenuItems;

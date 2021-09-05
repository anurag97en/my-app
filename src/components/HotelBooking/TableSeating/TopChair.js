import React from "react";
import chair from "../../../assets/svg/chair.svg";
let parentCard = {
  width: "150px",
  height: "210px",
  backgroundColor: "#881133",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
};

let subTitleStyle = { fontSize: "12px" };
let priceStyle = { fontWeight: "bold" };
let mrpStyle = { textDecorationStyle: "double", fontSize: "12px" };
const LeftChair = (props) => {
  return (
    <div style={{display:"flex", padding: "0px"}}>
      <div style={{paddingLeft:"5px", paddingRight:"5px"}}>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{  transform: "rotate(0deg)" }}
        />
      </div>
      <div style={{paddingLeft:"5px", paddingRight:"5px"}}>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{ transform: "rotate(0deg)" }}
        />
      </div>
      <div style={{paddingLeft:"5px", paddingRight:"5px"}}>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{  transform: "rotate(0deg)" }}
        />
      </div>
    </div>
  );
};

export default LeftChair;

import React from "react";
import butterChicken from "../../../assets/image/butterChicken.jpg";
let parentCard = {
  width: "150px",
  height: "210px",
  backgroundColor: "#881133",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
  margin:"10px"
};

let subTitleStyle = { fontSize: "12px" };
let priceStyle = { fontWeight: "bold" };
let mrpStyle = { textDecorationStyle: "double", fontSize: "12px" };
export const FoodCard = (props) => {
  return (
    <div style={parentCard}>
      <img
        height="130px"
        width="130px"
        src={butterChicken}
        alt="butterChicken"
        style={{ marginTop: "10px" }}
      />
      <div>
        <s>{props.title}</s>
      </div>
      <div style={subTitleStyle}>{props.subTitle}</div>
      <div>
        ₹ <span style={priceStyle}>{props.price}</span> &nbsp;
         <del style={mrpStyle}>{props.mrp}</del>
      </div>
    </div>
  );
};

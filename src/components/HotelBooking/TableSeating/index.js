import React from "react";
import chair from "../../../assets/svg/chair.svg";
import LeftChair from "./LeftChair";
import RightChair from "./RightChair";
let parentCard = { display: "flex", flex: "wrap", padding:"10px" };
let table = {
  width: "50px",
  height: "105px",
  backgroundColor: "#881133",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
};

let subTitleStyle = { fontSize: "12px" };
let priceStyle = { fontWeight: "bold" };
let mrpStyle = { textDecorationStyle: "double", fontSize: "12px" };

export const TableSeating = (props) => {
  return (
    <div style={parentCard}>
      <LeftChair />
      <div style={table}>
       
      </div>
      <RightChair/>
    </div>
  );
};

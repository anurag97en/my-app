import React from "react";
import chair from "../../../assets/svg/chair.svg";
import TopChair from "./TopChair";
import BottomChair from "./BottomChair";
let parentCard = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
};
let table = {
  width: "105px",
  height: "50px",
  backgroundColor: "#881133",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
};

let subTitleStyle = { fontSize: "12px" };
let tableNumberStyle = {
  fontWeight: "bold",
  textAlign: "center",
  width: "100%",
  padding: "auto",
  height: "105%",
};
let mrpStyle = { textDecorationStyle: "double", fontSize: "12px" };

export const HorizontalTable = (props) => {
  return (
    <div style={parentCard}>
      <TopChair tableId={props.id} />
      <div style={table}>
        <div style={tableNumberStyle}>{props.id}</div>
      </div>
      <BottomChair tableId={props.id} />
    </div>
  );
};

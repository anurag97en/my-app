import React from "react";
import { PopOver } from "../../../components/ReusableComponents/PopOver";
// import Chair from "../../../assets/svg/chair.svg"
import { VerticalTable } from "../../../components/HotelBooking/TableSeating/VerticalTable";
import { HorizontalTable } from "../../../components/HotelBooking/TableSeating/HorizontalTable";
const BookSeat = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid black",
        width: "780px",
        height: "300px",
      }}
    >
      <HorizontalTable  id ="1"/>
      <HorizontalTable  id ="2"/>
      <HorizontalTable  id ="3"/>
      <HorizontalTable  id ="4"/>
      <HorizontalTable  id ="5"/>
      <HorizontalTable  id ="6"/>
      <VerticalTable  id ="7"/>
      <VerticalTable  id ="8"/>
       <VerticalTable  id ="9"/>
      <VerticalTable  id ="10"/>
      <VerticalTable  id ="11"/>
      <VerticalTable  id ="12"/>
      <VerticalTable  id ="13"/>
      {/*<VerticalTable  id ="14"/>
      <VerticalTable  id ="15"/>
      <VerticalTable  id ="16"/>
      <VerticalTable  id ="17"/>
      <VerticalTable  id ="18"/> */}
    </div>
  );
};

export default BookSeat;

// ${window.innerWidth - 200}

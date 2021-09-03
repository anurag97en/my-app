import React from "react";
import { PopOver } from "../../../components/ReusableComponents/PopOver";
import Chair from "../../../assets/svg/chair.svg"
const BookSeat = () => {
  return (
    <div >
    This is my book seat component
    <img
        height="130px"
        width="130px"
        src={Chair}
        alt="butterChicken"
        style={{ marginTop: "10px" }}
      />
    {/* {} */}
    {/* <Chair/> */}
    {/* <PopOver/> */}
    </div>
  );
};

export default BookSeat;

// ${window.innerWidth - 200}
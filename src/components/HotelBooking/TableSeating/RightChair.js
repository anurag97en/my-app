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
const RightChair = (props) => {
  return (
    <div>
      <div>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{ marginTop: "10px", transform: "rotate(90deg)" }}
        />
      </div>
      <div>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{ marginTop: "10px", transform: "rotate(90deg)" }}
        />
      </div>
      <div>
        <img
          height="20px"
          width="20px"
          src={chair}
          alt="butterChicken"
          style={{ marginTop: "10px", transform: "rotate(90deg)" }}
        />
      </div>
    </div>
  );
};

export default RightChair;

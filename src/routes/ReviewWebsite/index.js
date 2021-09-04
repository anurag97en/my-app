import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { SubMenuConstants } from "../../constants/SubMenu";
import SubMenuItems from "../../components/SubMenuItems";
import SubMenu from "../../containers/SubMenu";

import BookSeat from "./BookSeat";
import HotelDetails from "./HotelDetails";
import BookFood from "./BookFood";

//STYLES
let subContentStyle = {
  width: "100%",
  display: "flex",
  flex: "noWrap",
  minHeight: `${window.innerHeight - 170}px`,
};
let tabsStyle = { marginLeft: 0, width: "200px" };
let finalContentStyle = {
  width: `${window.innerWidth - 200}px`,
  backgroundColor: "yellow",
};
const HotelBooking = () => {
  
  return (
    <SubMenu subMenuArray={SubMenuConstants}>
      <Switch>
        <Redirect exact from="/hotel_booking" to="/hotel_booking/book_seat" />
        <Route exact path="/hotel_booking/book_seat">
          <BookSeat />
        </Route>
        <Route path="/hotel_booking/hotel_details">
          <HotelDetails />
        </Route>
        <Route path="/hotel_booking/book_food">
          <BookFood />
        </Route>
      </Switch>
    </SubMenu>
  );
};

export default HotelBooking;

// ${window.innerWidth - 200}

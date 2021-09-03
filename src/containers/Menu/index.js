import React, { useState } from "react";
import MenuComponent from "../../components/Menu";
import MenuItems from "../../components/MenuItems";
import { MenuConstants } from "../../constants/Menu";
import Home from "../../routes/Home";
import ContactUs from "../../routes/ContactsUs";
import About from "../../routes/About";
import HotelBooking from "../../routes/HotelBooking";
import { PopOver } from "../../components/ReusableComponents/PopOver";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,useHistory
} from "react-router-dom";
const ParentMenu = () => {
  const [maintainFocus, setMaintainFocus] = useState({ 0: true });
  console.log("MenuConstants => ", MenuConstants);


  let history = useHistory();
  console.log("HISTORY => ", history);
  if (window.performance) {
    if (performance.navigation.type == 1) {
      console.log("Reload called with history on content page=>", history);
      // <Link to="/home" />
      // history.push("/home");
      // alert( "This page is reloaded" );
    } else {
      // alert( "This page is not reloaded");
    }
  }





  console.log(
    "INDEX =>",
    MenuConstants.findIndex((el) => el.title === MenuConstants[1].title)
  );
  return (
    <Router>
      <MenuComponent>
        {MenuConstants.map((item, index) => (
          <Link
            to={item.path}
            onClick={() => {
              setMaintainFocus((preValue) => {
                console.log("MaintainFocus =>", preValue);
                // let tempMainTainFocus = preValue.map(e => e)
                for (let x in preValue) preValue[x] = false;
                return { ...preValue, [index]: true };
              });
            }}
          >
            <PopOver content={`THIS IS ${item.title} CONTENT`}>
              <MenuItems
                key={item.title}
                maintainFocus={
                  maintainFocus[
                    MenuConstants.findIndex((el) => el.title === item.title)
                  ]
                }
              >
                {item.title}
              </MenuItems>
            </PopOver>
          </Link>
        ))}
        {/* <Link to="/home">
          <MenuItems onClick={()=>{}}>{Menu.HOME}</MenuItems>
        </Link>
        <Link to="/about">
          <MenuItems>{Menu.ABOUT}</MenuItems>
        </Link>
        <Link to="/contact_us">
          <MenuItems>{Menu.CONTACT_US}</MenuItems>
        </Link> */}
      </MenuComponent>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/hotel_booking">
          <HotelBooking />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact_us">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
};

export default ParentMenu;

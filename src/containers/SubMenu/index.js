import React, { useState } from "react";
import SubMenuComponent from "../../components/SubMenu";
import SubMenuItems from "../../components/SubMenuItems";
// import { SubMenuConstants } from "../../constants/SubMenu";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

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

const SubMenu = ({subMenuArray, children }) => {
  // const [maintainFocus, setMaintainFocus] = useState(null)
  const [maintainFocus, setMaintainFocus] = useState({ 0: true });
  return (
    <Router>
      <div style={subContentStyle}>
        <div style={tabsStyle}>
          <SubMenuComponent>
            {subMenuArray.map((item, index) => (
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
                <SubMenuItems
                  key={item.title}
                  maintainFocus={
                    maintainFocus[
                      subMenuArray.findIndex(
                        (el) => el.title === item.title
                      )
                    ]
                  }
                >
                  {item.title}
                </SubMenuItems>
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
          </SubMenuComponent>
        </div>
        <div style={finalContentStyle}>
          {children}
          {/* <Switch>
            <Redirect exact from="/home" to="/home/book_seat" />
            <Route exact path="/home/book_seat">
              <BookSeat />
            </Route>
            <Route path="/home/about">
              <About />
            </Route>
            <Route path="/home/contact_us">
              <ContactUs />
            </Route>
          </Switch> */}
        </div>
      </div>
    </Router>
  );
};

export default SubMenu;

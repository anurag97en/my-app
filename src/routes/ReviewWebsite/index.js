import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { reviewWebsite } from "../../constants/SubMenu";
import SubMenuItems from "../../components/SubMenuItems";
import SubMenu from "../../containers/SubMenu";

import Books from "./Books";
import Mobiles from "./Mobiles";
 import Bikes from "./Bikes";

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
const ReviewWebsite = () => {
  
  return (
    <SubMenu subMenuArray={reviewWebsite}>
      <Switch>
        <Redirect exact from="/review_website" to="/review_website/books" />
        <Route exact path="/review_website/books">
          <Books />
        </Route>
        <Route path="/review_website/mobiles">
          <Mobiles />
        </Route>
        <Route path="/review_website/bikes">
          <Bikes />
        </Route>
      </Switch>
    </SubMenu>
  );
};

export default ReviewWebsite;

// ${window.innerWidth - 200}

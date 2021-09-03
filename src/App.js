import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";
import ParentMenu from "./containers/Menu";

let contentHeight = window.innerHeight - 120;
let headerStyle = {
  width: "100%",
  height: "60px",
  textAlign: "center",
  position: "fixed",
  top: 0,
  // position: "sticky",
  zIndex: 1,
  backgroundColor: "green",
};
let contentStyle = {
  // marginBottom: "55px",
  // display: "inline-block",
  minHeight: contentHeight,
  // height: "100%",
  width: "100%",
  marginTop: "60px",
  backgroundColor: "#ff00ff",
};
let footerStyle = {
  // position: "fixed",
  // bottom: 0,
  height: "50px",
  textAlign: "center",
  width: "100%",
  marginTop: "10px",
  backgroundColor: "khaki",
};
const App = () => {
  let history = useHistory();
  console.log("HISTORY => ", history);
  if (window.performance) {
    if (performance.navigation.type == 1) {
      console.log("Reload called with history =>", history);
      // <Link to="/home" />
      // history.push("/home");
      // alert( "This page is reloaded" );
    } else {
      // alert( "This page is not reloaded");
    }
  }
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div style={headerStyle}>This is header</div>
      <div style={contentStyle}>
        <ParentMenu />
      </div>
      <div style={footerStyle}>This is Footer{contentHeight}</div>
    </div>
  );
};

export default App;

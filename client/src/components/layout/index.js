// import Footer from "../footer";
import Header from "../header";
import "./style.css";

const Layout = (props) => {
  return (
    <div className="mainContainer">
      <Header alt={props.minimal ? true : false} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

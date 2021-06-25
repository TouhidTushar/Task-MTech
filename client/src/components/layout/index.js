import Footer from "../footer";
import Header from "../header";
import "./style.css";

function Layout(props) {
  return (
    <div className="mainContainer">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;

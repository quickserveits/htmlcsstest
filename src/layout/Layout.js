import Footer from "./Footer";
import TopNav from "./TopNav";

function Layout(props) {
  return (
    <div>
      <TopNav />
      {props.children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Componets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Componets/About";

function App() {
  // const user=false;

  return (
    <Router>
      <Switch>
        <Route path={["/home", "/newHome"]}>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello wold</p>
    //     <Home />
    //   </header>
    // </div>
  );
}

export default App;

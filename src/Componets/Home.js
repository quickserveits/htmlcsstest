import { Route, withRouter } from "react-router";
import NewHome from "./NewHome";

function Home(props) {
  return (
    <div>
      <Route path="/newHome">
        <NewHome title="New Home"></NewHome>
      </Route>
      <Route path="/home">
        <NewHome title="My Home"></NewHome>
      </Route>
    </div>
  );
}

export default withRouter(Home);

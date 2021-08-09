import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import ErrorComponent from "./Components/ErrorComponent";
import SuccessComp from "./Components/SuccessComp";
import MessageComponent from "./Components/MessageComponent";
import DefaultFourOFour from "./Components/DefaultFourOFour";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/success">
          <SuccessComp />
        </Route>
        <Route exact path="/error">
          <ErrorComponent />
        </Route>
        <Route exact path="/message">
          <MessageComponent />
        </Route>
        <Route exact path="/fourofour">
          <DefaultFourOFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

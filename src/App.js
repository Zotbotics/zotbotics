import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./app/views/Home";
import Resources from "./app/views/Resources";

function App() {
  return (
    <Router>


      <Switch>
        <Route path = "/">
            <Home/>
        </Route>
        <Route path = "/resources">
            <Resources/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

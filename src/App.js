import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./app/views/Home";
import InterestedStudents from "./app/views/InterestedStudents";
import Resources from "./app/views/Resources";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/interested-students" component={InterestedStudents}/>
      <Route exact path="/resources" component={Resources}/>
    </Router>
  );
}

export default App;

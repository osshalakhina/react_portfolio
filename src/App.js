import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch >
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/project/:id" component={ProjectDisplay}/>
          <Route path="/experience" exact  component={Experience}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

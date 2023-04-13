import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./pages/Skills/index.js";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" exact component={Experience} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

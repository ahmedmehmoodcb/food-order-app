import './App.css';
import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Swich, Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
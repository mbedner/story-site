import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './components/HomeBody';
import About from './components/AboutBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
    <Nav />
    <div className="py-10 pl-48 px-28 h-screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;

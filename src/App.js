import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
      <Route exact path="/" component={Home } />
      <Route exact path="/about/" component={About} />
      <Route exact path="/contact/" component={Contact} />
      <Route exact path="/courses/" component={Courses} />
      </Switch>
      </Router>
      <Footer />
    </>
  )
}
export default App;

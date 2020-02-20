import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './comps/About/About'
import Works from './comps/Works/Works';
import Workshop from './comps/Workshop/Workshop';
import Project from './comps/Project/aayaam/Project';
import Project2 from './comps/Project/dialog/Project';
import Project3 from './comps/Project/atyati_web/Project';
import Project4 from './comps/Project/lightmetrics/Project';
import Project5 from './comps/Project/ktech/Project';
import Project6 from './comps/Project/innovate_karnataka/Project';
import Project7 from './comps/Project/atyati_branding/Project';




// import Nav from './comps/common/Nav/Nav';

const routing = (
    <Router>
     
      <div>
        <Route exact  path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/workshops" component={Workshop} />
        <Route path="/project/aayaam" component={Project} />
        <Route path="/project/dialog" component={Project2} />
        <Route path="/project/atyati_web" component={Project3} />
        <Route path="/project/lightmetrics" component={Project4} />
        <Route path="/project/ktech" component={Project5} />
        <Route path="/project/innovate_karnataka" component={Project6} />
        <Route path="/project/atyati_branding" component={Project7} />




        
     

         
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

//Load foundations-sites
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path='/countdown' component={Countdown}></Route>
    </Route>

  </Router>,
  document.getElementById('app')
);

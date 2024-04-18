// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import OTPVerification from './components/OTPVerification';
import Success from './components/Success';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/otp" component={OTPVerification} />
        <Route path="/success" component={Success} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

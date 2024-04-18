import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'; // Remove duplicate import of Switch and useHistory
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

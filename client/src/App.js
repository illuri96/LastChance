import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () => {
 

  return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
            <Container maxWidth="lg">
              <Navbar  title = "THE BLOG"/>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
              </Switch>
            </Container>
        </BrowserRouter>
      </React.Fragment>
  );
};

export default App;
import React from 'react';

import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useStyles from './styles';


import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import About from './components/Sections/About/About';
import Technology from './components/Sections/Technology/Technology';




const App = () => {
 
  const classes = useStyles();


  return (
      <React.Fragment>
        <BrowserRouter>
            <Container fullWidth= "lg" className= {classes.container}>
              <Navbar title = "THE BLOG"/>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/about" exact component={About} />
                <Route path="/technology" exact component={Technology} />
              </Switch>
            </Container>
        </BrowserRouter>
      </React.Fragment>
  );
};

export default App;
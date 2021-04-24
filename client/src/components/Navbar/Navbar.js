import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { Typography, Toolbar, Avatar, Button, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
import Sections from '../Sections/sections'



const Navbar = (props) => {
  const classes = useStyles();
  const { title } = props;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (
    <React.Fragment>
      <Container >
        <Toolbar className={classes.toolbar}>
          <Typography component={Link} to="/" className={classes.toolbarTitle} variant="h6" align="center">
              {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          {user?.result ? (
          <Toolbar className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h8">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </Toolbar>
        ) : (
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
        </Toolbar>
        <Sections />
        
    </Container>

    </React.Fragment>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
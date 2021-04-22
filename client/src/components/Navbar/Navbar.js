import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import { Container } from '@material-ui/core';



const Navbar = (props) => {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Container >
        <Toolbar className={classes.toolbar}>
          <Typography component={Link} to="/" variant="h4" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
    </Container>

    </React.Fragment>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Navbar;

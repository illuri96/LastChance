import React from 'react';

import { Toolbar, Link } from '@material-ui/core';

import useStyles from './styles';

const Sections = () => {

    const classes = useStyles();

    const fields = [
      { title: 'Technology', url: '/technology' },
      { title: 'History', url: '/history' },
      { title: 'Business', url: '/business' },
      { title: 'Politics', url: '/politics' },
      { title: 'Opinion', url: '/opinion' },
      { title: 'Science', url: '/science' },
      { title: 'Health', url: '/health' },
      { title: 'Cinema', url: 'cinema' },
      { title: 'Travel', url: '/travel' },
      { title: 'About', url: '/about' },

    ];

  return (
    <Toolbar component="Sections" variant="dense" className={classes.toolbarSecondary}>
          {fields.map((field) => (
            <Link color="inherit" noWrap key={field.title} variant="body2" href={field.url} className={classes.toolbarLink} >
              {field.title}
            </Link>
          ))}
        </Toolbar>

  )
}
export default Sections; 
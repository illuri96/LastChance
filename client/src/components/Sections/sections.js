import React from 'react';
import { Toolbar, Link } from '@material-ui/core';

import useStyles from './styles';



const Sections = () => {

    const classes = useStyles();

    const sections = [
        { title: 'Technology', url: '#' },
        { title: 'Culture', url: '#' },
        { title: 'Business', url: '#' },
        { title: 'Politics', url: '#' },
        { title: 'Opinion', url: '#' },
        { title: 'Science', url: '#' },
        { title: 'Health', url: '#' },
        { title: 'Cinema', url: '#' },
        { title: 'Travel', url: '/travel' },
        { title: 'About', url: '/about' },

      ];

    return (
        <Toolbar component="Sections" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} className={classes.toolbarLink}>
              {section.title}
            </Link>
          ))}
        </Toolbar>

    );
}

export default Sections; 
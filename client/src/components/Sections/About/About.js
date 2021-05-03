import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { ExpansionPanelDetails, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';






import useStyles from './styles';
import ubIcon from '../../../images/ubIcon.png';
import jntuLogo from '../../../images/jntuLogo.png';


const About = () => {
  const classes = useStyles();
  

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
};


  

  return (
        <Grid container justify="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={5}>
                <Paper className = "body">
                    <div className= {classes.root} varaint = "outlined">
                        <Avatar className = {classes.avatar}>MR</Avatar>
                        <div className= {classes.secondary}>
                            <Typography variant="h4" spacing > Sai Mahidhar Reddy Illuri </Typography>
                            <Typography variant="caption" display="block" spacing gutterBottom>Software Engineer</Typography>
                        </div>                        
                    </div>  
                    <Grid>
                        <div className= {classes.secondary}>
                            <Typography variant = "h4"> Education </Typography>
                        </div>
                        <List className={classes.listRoot}>
                            <ListItem onclick = {handleClick} >
                                    <ListItemAvatar>
                                        <Avatar className={classes.image} src={ubIcon} alt="ub-icon" />
                                    </ListItemAvatar>
                                    <ListItemText primary="University of Bridgeport" secondary="Bridgeport, Connecticut"/>
                                    {open ? <ExpandMore /> : <ExpandLess /> }
                            </ListItem>
                                    <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.image} src={jntuLogo} alt="jntu-Logo"/>
                                </ListItemAvatar>
                                <ListItemText primary="Jawaharlal Nehru Technological University" secondary="Hyderabad, Telangana" />
                                <ExpandMore/>
                            </ListItem>
                            <Divider variant="inset" component="li" />        
                        </List>
                    </Grid>

                </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                        <Paper>
                            <h1> Projects & Works </h1>
                                
                        </Paper>
                </Grid>
        </Grid>

     

  );
}

export default About;
import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) =>  ({
        mainDiv: {
            marginTop: '0px',
            padding:'0',
        },
        secondaryDiv: {
          paddingTop : '15px',
        },
        appBar: {
          
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        image: {
          marginLeft: '15px',
        },
        [theme.breakpoints.down('sm')]: {
          mainContainer: {
            flexDirection : "column-reverse",
            marginTop : '50px',
          }
        }
      
}));
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#665544',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: '#665544',
    display: 'flex',
    // height:'400px',
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 100,
    width: 150,
  },

  content: {
    width: '80%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  setImg: {
    textAlign: 'center',
  },

  img: {
    maxWidth: '40%',
    height: 'auto',
    padding: '5%',
  },

  text: {
    paddingBottom: 80,
    minHeight: '300px',
  },
  emphasize: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Tabs
          indicatorColor='primary'
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          className={classes.tabs}>

          <Tab className={classes.tab} label='About Us' {...a11yProps(0)} />
          <Tab className={classes.tab} label='About Workshop' {...a11yProps(1)} />
          <Tab className={classes.tab} label='Inspiration' {...a11yProps(2)} />
        </Tabs>
      </ThemeProvider>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <TabPanel value={value} index={0}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt='600*450'
                src='images/Aboutus.jpg'
              />
              <img className={classes.img}
                alt='600*450'
                src='images/AboutUs3.jpg'
              />
            </div>
            <div className={classes.text}>
              <p className={classes.emphasize}>CungDesign is the stories told by brushes and paints, capture the places where each of us lives and has been to.</p>
              <p> Sometimes it is an old and narrow street corner of Hanoi. </p>
              <p> Sometimes, it is a sunny yellow rice field in a rural countryside area. </p>
              <p>  Everything is so connected, so related that anyone can find themselves somewhere in our collection.</p>
              <p> That is the message we want to send to each person joining CungDesign: <i><b>Art is as simple
            as a part of your life and anyone can make it.</b></i> </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt='600*450'
                src='images/Workshop1.jpg'
              />
              <img className={classes.img}
                alt='600*450'
                src='images/Workshop2.jpg'
              />
            </div>

            <div className={classes.text}>
              <p>We provide you every kit you need to become <b>a "pro" artist. </b> In each of our workshops, we introduce you to one
            painting in our collection and show you every single step to create it. </p>
              <p>As our workshop is usually held in a coffee shop, attenders will have a relaxing time for themselves, chill with music, and playing with paints. You will have a chance to
             <b> create your art, wash away all the tiredness, and become stress-free after a long week of work. </b>
            A perfect place to be creative, enjoy art activities, and have your unforgettable
            memory with your friends and family. </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.info}>
            <div className={classes.setImg}>
              <img className={classes.img}
                alt='600*450'
                src='images/Inspiration2.jpg'
              />
              <img className={classes.img}
                alt='600*450'
                src='images/PlayingwPaint.jpg'
              />
            </div>
            <div className={classes.text}>
              <p>We are inspired by everything in our life - nature, people, and our lifestyle. </p>
              <p> From where we live, to where we travel to. </p>
              <p> Every moment in life has its own beauty. </p>
              <p> And every person is an artist who can capture and express that beauty. </p>
              <p> <b><i>With CungDesign, we want you to learn about art, and also, learn about the beauty of your life.  </i></b></p>
            </div>
          </div>
        </TabPanel>
      </main>
    </div>
  );
}
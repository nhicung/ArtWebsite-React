import React, { useEffect } from 'react';
import { Route, Link, Redirect, useLocation } from 'react-router-dom';
import { Home } from './Home';
import About from './About';
import Gallery from './Gallery';
import { Workshop } from './Workshop';
import { Product } from './Product';
import Footer from './Footer'
import FooterInfo from './FooterInfo'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#665544',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  list: {
    padding: 20,
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    margin: '0 10px',
    '&:hover': {
      textDecoration: 'none',
      color: '#d4d0c6',
    },
  },
}));

const mapPath = {
  '/CungDesign': 1,
  '/CungDesign/': 1,
  '/CungDesign/gallery': 2,
  '/CungDesign/workshop': 3,
  '/CungDesign/about': 4,
  '/CungDesign/product': 5,
  '/CungDesign/info': 6
}

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let location = useLocation();

  useEffect(() => {
    if (location === null) {
      setValue(1);
    }
    setValue(mapPath[location.pathname]);
    console.log(location);
  }, [location])

  console.log(value);
  return (
    <React.Fragment>
      <AppBar color='default'>
        <ThemeProvider theme={theme}>
          <Tabs
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            centered
            value={value}
            aria-label='scrollable auto tabs example'
          >
            <img
              src='images/logo.jpg'
              width='60'
              height='60'
              alt='logo' />
            <Tab className={classes.list}
              label='Home'
              component={Link} to={process.env.PUBLIC_URL + '/'}
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label='Gallery'
              component={Link} to={process.env.PUBLIC_URL + '/gallery'}
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label='Workshop'
              component={Link} to={process.env.PUBLIC_URL + '/workshop'}
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label='About'
              component={Link} to={process.env.PUBLIC_URL + '/about'}
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
            <Tab className={classes.list}
              label='Products'
              component={Link} to={process.env.PUBLIC_URL + '/product'}
              onClick={() => {
                window.scrollTo(0, 0);
              }} />
          </Tabs>
        </ThemeProvider>
      </AppBar>

      <Route value={1} exact path={process.env.PUBLIC_URL + '/'} component={Home} render={() => (
        <Redirect to='/home' />)}
      />
      <Route value={2} path={process.env.PUBLIC_URL + '/gallery'} component={Gallery} />
      <Route value={3} path={process.env.PUBLIC_URL + '/workshop'} component={Workshop} />
      <Route value={4} path={process.env.PUBLIC_URL + '/about'} component={About} />
      <Route value={5} path={process.env.PUBLIC_URL + '/product'} component={Product} />
      <Route value={6} path={process.env.PUBLIC_URL + '/info'} component={FooterInfo} />
      <Footer />
    </React.Fragment>

  );
}


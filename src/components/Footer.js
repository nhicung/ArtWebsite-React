import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#665544',
    color: 'white',
    width: '100%',
    height: 225,
    flexShrink: 0,
    left: 0,
    bottom: 0
  },

  demo: {
    display: 'flex',
    color: 'white',
  },

  item: {
    color: 'white',
    '&:hover': {
      color: '#d4d0c6',
      cursor: 'pointer',
      textDecoration: 'none',
    }
  },
  link: {
    color: 'white',
  },

  list: {
    paddingLeft: 60,
  },

  copyright: {
    textAlign: 'left',
    paddingTop: 20,
    fontSize: '0.7em',
  },

  iconList: {
    textAlign: 'right',
  },

  IconButton: {
    color: 'white',
    '&:hover': {
      color: '#d4d0c6',
      cursor: 'pointer',
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.iconList}>
          <IconButton className={classes.IconButton} href='https://facebook.com/cungarttherapy' target='_blank'><FacebookIcon /></IconButton>
          <IconButton className={classes.IconButton} href='https://instagram.com/cungdesign' target='_blank'><InstagramIcon /></IconButton>
          <IconButton className={classes.IconButton} href={'mailto:' + props.email}><EmailIcon /></IconButton>
          <IconButton className={classes.IconButton}><TwitterIcon href='/home' /></IconButton>
        </div>
        <div className={classes.demo}>
          <img
            src='images/logo.jpg'
            width='60'
            height='60'
            alt='logo' />
          <List component='nav' className={classes.list} >
            <ListItem className={classes.item} component={Link} to={process.env.PUBLIC_URL + '/about'}>
              <ListItemText primary='About' onClick={() => {
                window.scrollTo(0, 0);
              }}>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item} component={Link} to={process.env.PUBLIC_URL + '/info'}>
              <ListItemText primary='FAQs' onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}>
              </ListItemText>
            </ListItem>
          </List>
          <List component='nav' className={classes.list} >
            <ListItem className={classes.item} component={Link} to={process.env.PUBLIC_URL + '/info'}>
              <ListItemText primary='Terms & Conditions' onClick={() => {
                window.scrollTo({
                  top: 200,
                  behavior: 'smooth'
                });
              }}>
              </ListItemText>
            </ListItem>
          </List>
          <List component='nav' className={classes.list} >
            <ListItem className={classes.item} component={Link} to={process.env.PUBLIC_URL + '/info'}>
              <ListItemText primary='Privacy Policy' onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: 'smooth'
                });
              }}>
              </ListItemText>
            </ListItem>
          </List>
          <List component='nav' className={classes.list}>
            <ListItem>

              <ListItemText>
                <a className={classes.item} href={'mailto:' + props.email}>Email
                  </a>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText primary='Cell: XXX(XXX)-XXXX'>
              </ListItemText>
            </ListItem>
          </List>
        </div>

        <div className={classes.copyright}>
          © Copyright 2020 CungDesign
        </div>
      </Container>
    </div>
  );
}

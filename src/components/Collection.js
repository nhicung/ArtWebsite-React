import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import tileData from './title';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  title: {
    color: 'white',
  },

  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  moreButton: {
    '& > *': {
      margin: theme.spacing(4),
      fontSize: '16px',
      color: '#665544',
      textDecoration: 'none',
      '&:hover': {
        color: '#d4d0c6',
      }
    },
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
      <div className={classes.moreButton}>
        <Button
          component={Link} to={process.env.PUBLIC_URL + '/gallery'} 
          size='small'
          variant='outlined'
          color='#665544'
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          Show Gallery
          </Button>
      </div>
    </div>
  );
}
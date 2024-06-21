import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import tileData from './otherImages';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	container: {
		padding: 30,
		border: '1px solid #665544',
		height: '30%',
		marginTop: 50,
		display: 'flex',
		flexDirection: 'row',
	},
	description: {
		width: '70%',
		color: '#665544',
		padding: 70,
	},
	moreButton: {
		'&:hover': {
			color: '#d4d0c6',
			cursor: 'pointer',
			textDecoration: 'none',
		}
	}
}));

export default function SimpleContainer(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container className={classes.container} maxWidth="md">
				<img
					src={tileData[15].img}
					alt={tileData[15].title}
					width={200}
					height={250} />

				<div className={classes.description}>
					<h3>Who are we?</h3>
					<hr color='#665544'></hr>
					<p>CungDesign captures the beautiful moment of nature, humans, and life. We bring creativity to inspire art in each person.</p>
					<Button
						className={classes.moreButton}
						size='small'
						variant='outlined'
						color='#665544' component={Link} to={process.env.PUBLIC_URL + '/about'}
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						Learn More
         			 </Button>
				</div>
			</Container>

			<Container className={classes.container} maxWidth='md'>
				<div className={classes.description}>
					<h3>Painting of the Week</h3>
					<hr color='#665544'></hr>
					<p>"Fall in Love" is the theme painting of this week. Painted with Acrylic paints, "Fall in love" captures a beautiful pair of swans at a lake on a quiet afternoon in the fall  </p>
					<Button
						className={classes.moreButton}
						size='small'
						variant='outlined'
						color='#665544'
						component={Link} to={process.env.PUBLIC_URL + '/gallery'}
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						See Other Paintings
          			</Button>
				</div>
				<img
					src={tileData[14].img}
					alt={tileData[14].title}
					width={200}
					height={250} />
			</Container>
		</React.Fragment>
	);
}
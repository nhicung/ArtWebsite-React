import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BreakLine } from './LineBreak'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '100px',
		textAlign: 'center',
		color: '#665544',
	},
	section: {
		paddingBottom: 100,
	},
	text: {
		textAlign: 'left',
	}

}));

export default function Terms() {
	const classes = useStyles();
	return (
		<Container className={classes.container} maxWidth='md'>
			<BreakLine />
			<div className={classes.section}>
				<h2>
					Frequently Asked Questions
            </h2>
				<p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
			</div>
			<BreakLine />
			<div className={classes.section}>
				<h2>
					Terms and Condition
            </h2>
				<p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
			</div>
			<BreakLine />
			<div className={classes.section}>
				<h2>
					Privacy Policy
            </h2>
				<p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
				facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. </p>
			</div>

		</Container>
	);
}
import React from 'react';
import { CarouselHandler } from './Carousel';
import { BreakLine } from './LineBreak'
import Feature from './Feature'
import Collection from './Collection'

export const Home = (props) => (
	<React.Fragment>
		<BreakLine w='100%' />
		<CarouselHandler />
		<Feature switchPage={props.switchPage}></Feature>
		<div className='collection'>
			<h1>Our Collection</h1>
			<BreakLine w='50%' />
			<Collection switchPage={props.switchPage} />
		</div>
	</React.Fragment>
)
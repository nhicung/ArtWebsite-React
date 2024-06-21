import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import styled from 'styled-components';
import tileData from './otherImages';

const Styles = styled.div`
	.root {
		padding: 80px;
		color: #665544;
	}
	.intro {
		text-align: center;
		padding-top:20px;
	}
	.email {
		text-decoration: none;
		font-weight: bold;
		color: #665544;
		:hover {
			cursor: pointer;
			text-decoration-line: underline;
		}
	}
	.card-deck{
		width: 100%;
		height: 50%;
		margin: auto;
		padding-top: 40px;
	}
	.frame {
    height: 100%,
    width: 100%,
    display: flex,
    justify-content: center,
    background-color: #ECECEC,
  },

  .card-img: {
    max-height: 100%,
    max-width: 100%,
  },
`

export const Product = (props) => (
	<Styles>
		<div className='root'>
			<div className='intro'>
				<p> Handmade products by CungDesign. Message on Facebook <a className='email' href='https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2Fcungarttherapy%3Ffbclid%3DIwAR0Mt5w8mDb4qYW-xQ4W2_t-JFAi7E8mrAMsn4uERiT2X5F3UcVjG01V53I&h=AT0rWirmQWBBlpR572S5UVPx3MPaX8ZbZfRBoPzcC2uGRua3rjIRvXTNPURF7DC8ROStgIgUkyR0PzUsgK0DF_6XkNCBnym0-Pa9Ednmy9juEUOnvDspacC9A6AZvjJw959UANqDdI3mwXkAEL_Jpwi7qxI' target='_blank' rel='noopener noreferrer' > CungDesign </a> or email <a className='email' href={'mailto:' + props.email}>cungdesign@gmail.com </a> if interested.</p>
				<p> Products are also provided at workshops. </p>
			</div>
			<CardDeck>
				<Card>
					<div className='frame'>
						<Card.Img
							src={tileData[1].img}
							alt={tileData[1].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[1].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[1].description} </p>
							<p>Price:</p>
							<p>Product ID : {tileData[1].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[2].img}
							alt={tileData[2].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[2].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[2].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[2].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[3].img}
							alt={tileData[3].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[3].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[3].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[3].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[12].img}
							alt={tileData[12].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[12].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[12].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[12].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
			<CardDeck>
				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[5].img}
							alt={tileData[5].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[5].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[5].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[5].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[8].img}
							alt={tileData[8].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[8].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[8].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[8].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>

				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[10].img}
							alt={tileData[10].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[10].title}</Card.Title>
						<Card.Text>
							<p>Product Description:{tileData[10].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[10].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>

				<Card>
					<div className='frame'>
						<Card.Img variant='top'
							src={tileData[4].img}
							alt={tileData[4].title} />
					</div>
					<Card.Body>
						<Card.Title>{tileData[4].title}</Card.Title>
						<Card.Text>
							<p>Product Description: {tileData[4].description}</p>
							<p>Price:</p>
							<p>Product ID : {tileData[4].id}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	</Styles>
)
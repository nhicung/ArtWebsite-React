import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import tileData from './title';
import SubmitForm from './SubmitForm';

const Style = styled.div`
.title{
	padding-top: 6%;
	color: #665544;
	text-align: center;
}
.container {
	padding-top: 20px;
	width: 100%;
	height: 30%;
	margin-top: 50px;
	display: flex;
	flex-direction: row;
}
.event{
	width: 50%;
	margin: 5px;
	border: 1px solid #665544;
	display: flex;
	flex-direction: row;
	padding: 2%;
}

.figure {
	padding: 5%;
}

.description {
	width: 50%;
	color: #665544;
	padding-left: 10%;
	font-size: 15px;
}

.signup {
	color: #665544;
	padding-bottom: 70px;
	padding-left: 30%;
	text-align: left;
    
}
.form-group {
	width:60%;
}

.button {
	bacground-color: #665544;
}
`
export const Workshop = (props) => (
	<Style>
		<div className='title'>
			<h1>Up Coming Event</h1></div>
		<Container>
			<div className='event'>
				<img
					src={tileData[5].img}
					alt={tileData[5].title}
					width={200}
					height={250} />

				<div className='description'>
					<h4>{tileData[5].title}</h4>
					<hr color='#665544'></hr>
					<p> {tileData[5].description} </p>
					<p>Time: {tileData[5].time}</p>
					<p>Place: {tileData[5].place} </p>
				</div>
			</div>
			<div className='event'>
				<img
					src={tileData[3].img}
					alt={tileData[3].title}
					width={200}
					height={250} />
				<div className='description'>
					<h4>{tileData[3].title}</h4>
					<hr color='#665544'></hr>
					<p> {tileData[3].description} </p>
					<p>Time: {tileData[3].time}</p>
					<p>Place: {tileData[3].place} </p>
				</div>
			</div>
		</Container>

		<SubmitForm></SubmitForm>
		
	</Style>
)
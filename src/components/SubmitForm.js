import React from 'react';
import { BreakLine } from './LineBreak'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';

const Style = styled.div`
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
const StyleButton = styled.button`
	color: white;
	background-color: #665544;
	padding: 8px;
	&:hover { background-color: #d4d0c6; color:#665544 }`

export default function FormExample(props) {
	const [validated, setValidated] = React.useState(false);
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			setValidated(true);
		} else {
			event.preventDefault();
			setShow(true);
		}
	};

	return (
		<Style>
			<div className='title'>
				<h1>Let's get painting!</h1>
				<p>Sign up for our workshop</p>
				<BreakLine w='50%' />
			</div>
			<div className='signup'>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group as={Row} controlId='formHorizontalEmail'>
						<Form.Label column sm={2}>
							Your Name
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								required
								type='text'
								placeholder='Name'
							/>
							<Form.Control.Feedback type='invalid'>
								Please provide your name.
          		</Form.Control.Feedback>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId='formHorizontalPassword'>
						<Form.Label column sm={2}>
							Event
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								required
								type='text'
								placeholder='Event'
							/>
							<Form.Control.Feedback type='invalid'>
								Please enter an event.
          		</Form.Control.Feedback>
						</Col>
					</Form.Group>
					<fieldset>
						<Form.Group as={Row}>
							<Form.Label as='legend' column sm={2}>
								Payment Type
							</Form.Label>
							<Col sm={10}>
								<Form.Check
									required
									type='radio'
									label='cash'
									name='formHorizontalRadios'
									id='formHorizontalRadios1'
								/>
								<Form.Check
									type='radio'
									label='credit card'
									name='formHorizontalRadios'
									id='formHorizontalRadios2'
								/>
								<Form.Control.Feedback type='invalid'>
									Please select a payment type.
          			</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</fieldset>
					<Form.Group as={Row} controlId='formHorizontalCheck'>
						<Col sm={{ span: 10, offset: 2 }}>
							<p>By clicking confirmation you agree to our Terms & Condition</p>
							<Form.Check
								required
								name='terms'
								label='Agree to terms and conditions'
							/>
							<Form.Control.Feedback type='invalid'>
								you must agree before submitting
          		</Form.Control.Feedback>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<button >Confirm</button>
						</Col>
					</Form.Group>
				</Form>

				<Modal backdrop='static' centered show={show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>Form Submitted</Modal.Title>
					</Modal.Header>
					<Modal.Body>Thank you for submitting the form!</Modal.Body>
					<Modal.Footer>
						<Link to={process.env.PUBLIC_URL + '/'}>
							<StyleButton variant='primary' onClick={() => {
								window.scrollTo(0, 0);
							}}>
								Go back to Home page
          					</StyleButton>
						</Link>
					</Modal.Footer>
				</Modal>
			</div>
		</Style>
	);
}


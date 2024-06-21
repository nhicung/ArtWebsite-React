import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';

const Styles = styled.div`
	.carousel, .carousel-item{
		width: 100%;
	}

	.carousel-caption {
		height: 60%;
	}

	.carousel-caption .caption {
		padding-top: 10%;
		padding-bottom: 10px;
		height: 100%;
		background-color: rgba(238, 238, 238, 0.7);
		color: #665544;
	}
  `;

export const CarouselHandler = () => (
  <Styles>
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide1.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <div className='caption'>
            <h3>Woodland Scent</h3>
            <h5 font-style='italic'>"Into the Woods"</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide2.jpg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <div className='caption'>
            <h3>Golden Autumn</h3>
            <h5 font-style='italic'>"The sky, the river and the leaves"</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide3.jpg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <div className='caption'>
            <h3>The Red Silk Cotton Tree</h3>
            <h5 font-style='italic'>"Memory of the old backyard"</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)


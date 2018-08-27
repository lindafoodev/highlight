import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ['photo1', 'photo2', 'photo3'],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    //if at last slide
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    //width of current slide and subtract from current translate value to update translateValue property
    //setState will trigger re-render and reveal new image that was offscreen on right
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slideshow">
        <div className='slideshow-wrapper' 
          style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
          }}>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image}/>
            ))
          }
        </div>
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide}/>
      </div>
    );
  }
}
import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';
//import Dots from '../Dots/Dots';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ['photo1', 'photo2', 'photo3'], /*Needs to be updated when additional photos added to css file*/
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
     //if at first slide, do nothing
     if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    //width of current slide and subtract from current translate value to update translateValue property
    //setState will trigger re-render and reveal new image that was offscreen on left
    this.setState(prevState => ({
      currentIndex: this.state.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
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
    return document.querySelector('.slide').clientWidth + 1;
  }

  // handleDotClick = i => {
  //   if(i === this.state.currentIndex) return

  //   if(i > this.state.currentIndex) {
  //     return this.setState({
  //       currentIndex: i,
  //       translateValue: -(i * this.slideWidth())
  //     })
  //   }
  //   else {
  //     return this.setState({
  //       currentIndex: i,
  //       translateValue: this.state.translateValue + ((this.state.currentIndex - i) * (this.slideWidth()))
  //     })
  //   }
  // }

  render() {
    return (
      <div className="slideshow">
        <div className='slideshow-wrapper outer' 
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
        {/* <Dots
          index={this.state.currentIndex}
          images={this.state.images}
          dotClick={this.handleDotClick}
        /> */}
      </div>
    );
  }
}
import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="left-arrow" onClick={props.goToPrevSlide}>
      <i className="left-carrot"></i>
    </div>
  );
}

export default LeftArrow;
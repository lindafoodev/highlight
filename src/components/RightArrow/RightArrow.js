import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="right-arrow" onClick={props.goToNextSlide}>
      <i className="arrow" aria-hidden="true">&#62;</i>
    </div>
  );
}

export default RightArrow;

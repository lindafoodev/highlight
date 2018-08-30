import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="right-arrow" onClick={props.goToNextSlide}>
      <i className="right-carrot"></i>
    </div>
  );
}

export default RightArrow;

import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="left-arrow" onClick={props.goToPrevSlide}>
      <i className="arrow" aria-hidden="true">&#60;</i>
    </div>
  );
}

export default LeftArrow;
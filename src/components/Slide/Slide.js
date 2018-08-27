import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(../src/components/images/${image}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" styles={styles}></div>
}

export default Slide
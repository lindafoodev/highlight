import React from 'react';

export default class Home extends React.Component {

  render(){
      return (
          <div className='main'>
            <div className='box'>
                <div className='column'>
                    <div className='hidden-on-mobile box-container theme-color-1 col-4'>
                        <div className='inner-box-bg m1n1'></div>
                        <div className='overlay-hide'></div>
                    </div>
                    <div className='box-container theme-color-2 col-4'>
                        <div className='inner-box-bg m2n1'></div>
                        <div className='overlay'><a href='#openModal-registry' className='hvr-grow style-text'>Registry</a></div>
                    </div>
                    <div className='hidden-on-mobile box-container theme-color-3 col-4'>
                        <div className='inner-box-bg m3n1'></div>
                        <div className='overlay-hide'></div>
                    </div>
                </div>
                <div className='column'>
                    <div className='hidden-on-mobile box-container theme-color-3 col-4'>
                        <div className='inner-box-bg m1n2'></div>
                        <div className='overlay-hide'></div>
                    </div>
                    <div className='box-container theme-color-1 col-4'>
                        <div className='inner-box-bg m2n2'></div>
                        <div className='overlay'><a href='#openModal-eventDetails' className='hvr-grow style-text'>Event Details</a></div>
                    </div>
                    <div className='hidden-on-mobile box-container theme-color-2 col-4'>
                        <div className='inner-box-bg m3n2'></div>
                        <div className='overlay-hide'></div>
                    </div>
                </div>
                <div className='column'>
                    <div className='hidden-on-mobile box-container theme-color-2 col-4'>
                        <div className='inner-box-bg m1n3'></div>
                        <div className='overlay-hide'></div>
                    </div>
                    <div className='box-container theme-color-3 col-4'>
                        <div className='inner-box-bg m2n3'></div>
                        <div className='overlay'><a href='#openModal-countdown' className='hvr-grow style-text'>Countdown</a></div>
                    </div>
                    <div className='hidden-on-mobile box-container theme-color-1 col-4'>
                        <div className='inner-box-bg m3n3'></div>
                        <div className='overlay-hide'></div>
                    </div>
                </div>
            </div>
            <div id='openModal-registry' className='modalDialog'>
                <div>
                    <a href='#close' title='Close' className='close'>X</a>
                    <h2 className='text'>Registry</h2>
                    <a href="www.amazon.com">Amazon</a>
                </div>
            </div>
          </div>  
      );
  }
}

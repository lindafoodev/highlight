import React from 'react';

const amazon = require('./images/babyregistryamazon.png');
const bbb = require('./images/buybuybabylogo.png');

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
            <div id='openModal-registry' className='modalDialog openModal-registry-style'>
                <div className='theme-color-1'>
                    <a href='#close' title='Close' className='close'>X</a>
                    <h2 className='style-text'>Registry</h2>
                    <div className='registry-links'>
                        <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>
                            <img clasName='logo' height='auto' width='112' src={amazon} alt='Amazon Registry logo'/>
                        </a>
                        <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='BuyBuy Baby Registry'>
                            <img className='logo' src={bbb} alt='BuyBuy Baby Registry logo'/>
                        </a>
                    </div>
                    <p>Shiwani and Animesh are registered at Amazon and buybuy Baby.</p>
                </div>
            </div>
          </div>  
      );
  }
}

import React from 'react';

const amazon = require('./images/babyregistryamazon.png');
const bbb = require('./images/buybuybabylogo.png');

export default class Home extends React.Component {

  render(){
      return (
          <div className='main custom'>
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
                <div className='theme-color-1'>
                    <a href='#close' title='Close' className='close'>X</a>
                    <h2 className='style-text'>Registry</h2>
                    <div className='registry-links'>
                        <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>
                            <img clasName='logo' height='auto' width='112' src={amazon} alt='Amazon Registry logo'/>
                        </a>
                        <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>
                            <img className='logo' src={bbb} alt='BuyBuy Baby Registry logo'/>
                        </a>
                    </div>
                    <p>Shiwani & Animesh are registered at <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>Amazon</a> and <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>buybuy Baby</a></p>
                </div>
            </div>
            <div id='openModal-eventDetails' className='modalDialog'>
                <div className='theme-color-3'>
                    <a href='#close' title='Close' className='close'>X</a>
                    <p className='section-text'>Please join us for a</p>
                    <p className='break-text style-text higher-emphasis'>Baby Shower</p>
                    <p className='break-text'>honoring</p>
                    <p className='break-text style-text'>Shiwani & Animesh</p>
                    <p className='break-text'>Sunday, September 16, 2018</p>
                    <p className='section-text'>2:00pm to 6:00pm</p>
                    <p className='break-text higher-emphasis'>Clubhouse</p>
                    <p className='section-text higher-emphasis'>550 Moreland Way</p>
                    <p className='section-text higher-emphasis'>Santa Clara, Ca 95054</p>
                    <p className='section-text break-text'>Hosted by Olivia & Linda</p>
                    <p className='break-text'>Regrets only to Linda</p>
                    <p className='section-text'>713.822.4934</p>
                    <p className='break-text'>Registered at <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>Amazon</a> and <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>buybuy Baby</a></p>
                </div>
            </div>
            <div id='openModal-countdown' className='modalDialog'>
                <div className='theme-color-1'>
                    <a href='#close' title='Close' className='close'>X</a>
                    <h2 className='style-text'>Countdown</h2>
                    <div className='countdown'>
                       
                    </div>
                    <p className='section-text'>Arrival Date</p>
                    <p className='section-text'>October 18, 2018</p>
                </div>
            </div>
          </div>  
      );
  }
}

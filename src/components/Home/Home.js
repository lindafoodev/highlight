import React from 'react';
import Countdown from '../Countdown/Countdown';
import Form from '../Form/Form';

const amazon = require('../images/babyregistryamazon.png');
const bbb = require('../images/buybuybabylogo.png');

export default class Home extends React.Component {
  render(){
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 9 && currentDate.getDate() > 17) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    // if target date has passed, then current year is adjusted to calculate countdown properly 
    // console.log(currentDate);
    // console.log(currentDate.getMonth());
    // console.log(currentDate.getFullYear());
    // console.log(year);
      return (
          <div className='main'>
            <div className='background'>
                <div className='box'>
                    <div className='column'>
                        <div className='hidden-on-mobile box-container theme-color-1 col-4'>
                            <div className='inner-box-bg m1n1'></div>
                            <div className='overlay-hide'></div>
                        </div>
                        <div className='box-container box-container-with-content theme-color-2 col-4'>
                            <div className='inner-box-bg m2n1'></div>
                            <div className='overlay overlay-faded'><a href='#event' className='more_link higher-emphasis hvr-grow style-text'>Event</a></div>
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
                        <div className='box-container box-container-with-content theme-color-1 col-4'>
                            <div className='inner-box-bg m2n2'></div>
                            <div className='overlay overlay-faded'><a href='#registry' className='more_link higher-emphasis hvr-grow style-text'>Registry</a></div>
                        </div>
                        <div className='box-container box-container-with-content theme-color-2 col-4'>
                            <div className='inner-box-bg m3n2'></div>
                            <div className='overlay overlay-faded'><a href='#rsvp' className='more_link higher-emphasis hvr-grow style-text'>RSVP</a></div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='hidden-on-mobile box-container theme-color-2 col-4'>
                            <div className='inner-box-bg m1n3'></div>
                            <div className='overlay-hide'></div>
                        </div>
                        <div className='box-container box-container-with-content theme-color-3 col-4'>
                            <div className='inner-box-bg m2n3'></div>
                            <div className='overlay overlay-faded'><a href='#countdown' className='more_link higher-emphasis hvr-grow style-text'>Countdown</a></div>
                        </div>
                        <div className='hidden-on-mobile box-container theme-color-1 col-4'>
                            <div className='inner-box-bg m3n3'></div>
                            <div className='overlay-hide'></div>
                        </div>
                    </div>
                </div>
                <div id='registry' className='modalDialog'>
                    <div className='theme-color-2'>
                        <a href='#close' title='Close' className='close'>X</a>
                        <h2 className='style-text higher-emphasis'>Registry</h2>
                        <div className='registry-links'>
                            <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>
                                <img className='logo' height='auto' width='112' src={amazon} alt='Amazon Registry logo'/>
                            </a>
                            <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>
                                <img className='logo' src={bbb} alt='BuyBuy Baby Registry logo'/>
                            </a>
                        </div>
                        <p>Shiwani & Animesh are registered at <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>Amazon</a> and <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>buybuy Baby</a></p>
                    </div>
                </div>
                <div id='event' className='modalDialog'>
                    <div className='theme-color-4'>
                        <a href='#close' title='Close' className='close'>X</a>
                        <p className='section-text'>Please join us for a</p>
                        <p className='break-text style-text higher-emphasis'>Baby Shower</p>
                        <p className='break-text'>honoring</p>
                        <p className='break-text style-text'>Shiwani & Animesh</p>
                        <p className='break-text'>Sunday, September 16th, 2018</p>
                        <p className='section-text'>1:00 pm to 5:00 pm</p>
                        <p className='break-text emphasis-text'>Clubhouse</p>
                        <p className='section-text emphasis-text'>550 Moreland Way</p>
                        <p className='section-text emphasis-text'>Santa Clara, Ca 95054</p>
                        <p className='attention-text section-text break-text'>Hosted by Olivia, Linda & Tulika</p>
                        <p className='break-text'>Drinks and light snacks provided</p>
                        <a href='#rsvp' className='btn-submit hvr-grow'>RSVP</a>
                        <p className='break-text'>Registered at <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>Amazon</a> and <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>buybuy Baby</a></p>
                    </div>
                </div>
                <div id='rsvp' className='modalDialog'>
                    <div className='theme-color-3'>
                        <a href='#close' title='Close' className='close'>X</a>
                        <h2 className='style-text higher-emphasis'>RSVP</h2>
                        <p className='break-text emphasis-text attention-text'>Baby Shower Date</p>
                        <p className='section-text emphasis-text'>Sunday, September 16th, 2018</p>
                        <p className='section-text emphasis-text'>1:00 pm to 5:00 pm</p>
                        <Form />
                        {/* <p className='break-text'>We look forward to</p>
                        <p className='section-text'>celebrating with you!</p> */}
                    </div>
                </div>
                <div id='countdown' className='modalDialog'>
                    <div className='theme-color-4'>
                        <a href='#close' title='Close' className='close'>X</a>
                        <h2 className='style-text higher-emphasis'>Countdown</h2>
                        <p className='style-text break-text'>Baby Agarwal</p>
                        <p className='section-text'>arrives in</p>
                        <Countdown date={`${year}-10-18T00:00:00`} />
                        <p className='break-text'>on October 18th, 2018</p>
                        {/*Midnight of 17th to 18th Oct*/}
                    </div>
                </div>
            </div>
        </div>  
      );
  }
}

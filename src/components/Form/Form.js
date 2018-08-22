import React, { Component } from 'react';
import Button from '../Button/Button';

class Form extends Component {
  render() {
    return (
      <div>
        <form autoComplete="off" className="gform" method="POST" data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbwounh2zqU4VbebFCj9dOKxAfLwAYQFcTAiStnHGaFV0Zq4oyGJ/exec">
            {/* <!-- change the form action to your script url --> */}

            <div className='rsvp-message'>
                <p className='break-text'>Please kindly respond by</p>
                <p className='section-text'>September 9th</p>
            </div>

            {/* <!--input id must be honeypot or else it wont work--> */}
            <input id="honeypot" type="text" name="honeypot" defaultValue="" />

            <div className="form-elements">
              <fieldset>
                <legend>Full Name</legend>
                <label htmlFor="first">First Name</label><span className={"direction-text"}>Required</span>
                <input required id="first" type="text" name="first" placeholder="Jane" />
                <label htmlFor="last">Last Name</label><span className={"direction-text"}>Required</span>
                <input required id="last" type="text" name="last" placeholder="Doe" />
              </fieldset>

              <fieldset>
                <legend>Contact Info</legend>
                <label htmlFor="email">Email Address</label><span className={"direction-text"}>Required</span>
                <input required id="email" name="email" type="email" defaultValue=""
                placeholder="your.name@email.com"/>
                <span className="email-invalid" style={{display: 'none'}}>
                  Must be a valid email address</span>
              </fieldset>              

              <fieldset className="block">
              <legend>Can you attend?<span className={"direction-text"}>Required</span></legend>
              <input id="rsvp" className='radio' type="radio" name="rsvp" value="Yes" required/> <label className="rsvp" htmlFor="rsvp">Yes, woohoo!</label>
              <input id="rsvp" className='radio' type="radio" name="rsvp" value="No" /> <label className="rsvp" htmlFor="rsvp">No, there in spirit.</label>
              </fieldset>

              <fieldset>
                <label htmlFor="guestCount">No. of Guests With You</label>
                <input id="guestCount" type="number" min="1" max="10" title="Input a valid number" name="guestCount" defaultValue="0" />
              </fieldset>              
              
              <fieldset>
                <label htmlFor="otherGuests">Other Guest Names</label>
                <input id="otherGuests" type="text" name="otherGuests" placeholder="Shiwani, Animesh" />
              </fieldset>  

              <fieldset>
                <legend>Mailing Address</legend>
                <label htmlFor="address1">Address 1</label>
                <input type="text" id="address1" name="address1" placeholder="123 Safari Blvd" />
                <label htmlFor="address2">Address 2</label>
                <input id="address2" type="text" name="address2" placeholder="Suite 1A" />
                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" placeholder="San Francisco" />
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="CA" />
                <label htmlFor="zip">Zip</label>
                <input type="text" pattern="[0-9]*" id="zip" name="zip" placeholder="12345" />
              </fieldset>          

              <fieldset>
              <legend>Message</legend>
                <textarea id="comments" name="comments" rows="3"
                placeholder="Have any questions or comments..."></textarea>
              </fieldset>              

              <Button class={'btn-submit hvr-grow button-success pure-button button-xlarge'} handleClick={() => ''} btnTxt={'Submit'}/>
            </div>
            <div className='notice-message'>
                <p className='break-section'>If submission is successful, confirmation will be shown here.</p>
                <p className='section-text'>Contact Linda at <a href="mailto:lindafoodev@gmail.com">lindafoodev@gmail.com</a> for any issues.</p>
            </div>
            {/* <!-- Customise the Thankyou Message People See when they submit the form: --> */}
            <div className="thankyou_message" style={{display:'none'}}>
                <h2><em>Thanks</em> for RSVPing!</h2>
                <h3>We look forward to celebrating with you!</h3>
                <p className='break-text emphasis-text'>Clubhouse</p>
                <p className='section-text emphasis-text'>550 Moreland Way</p>
                <p className='section-text emphasis-text'>Santa Clara, Ca 95054</p>
                <p>Shiwani & Animesh are registered at <a href='https://www.amazon.com/baby-reg/animesh-agarwal-shiwani-gupta-october-2018-sanbruno/38M35EETLQPXV' rel='noopener noreferrer' target='_blank' title='Amazon Registry'>Amazon</a> and <a href='https://www.buybuybaby.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546350683&eventType=Baby&pwsurl=' rel='noopener noreferrer' target='_blank' title='buybuy Baby Registry'>buybuy Baby</a></p>
            </div>
          </form>
        </div>
    );
  }
};

export default Form;
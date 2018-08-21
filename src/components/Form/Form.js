import React, { Component } from 'react';
import Button from '../Button/Button';

class Form extends Component {
  render() {
    return (
      <div>
        <form autoComplete="off" className="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbzyU8kcpTIvBC5neAipdHlJTZvJkqfruDIaH3pDIw2MS2IPgNU/exec">
            {/* <!-- change the form action to your script url --> */}

            <div className='rsvp-message'>
                <p className='break-text'>Please kindly respond by</p>
                <p className='section-text'>September 9th</p>
            </div>

            {/* <!--input id must be honeypot or else it wont work--> */}
            <input id="honeypot" type="text" name="honeypot" defaultValue="" />

            <div className="form-elements">
              <fieldset className="pure-group">
                <legend>Full Name</legend>
                <label htmlFor="first">First Name</label>
                <input required id="first" name="first" placeholder="Jane" />
                <label htmlFor="last">Last Name</label>
                <input required id="last" name="last" placeholder="Doe" />
              </fieldset>

              <fieldset className="pure-group">
                <legend>Can you attend?</legend>
                <input id="rsvp" type="radio" name="rsvp" value="Yes" required/> <label htmlFor="rsvp">Yes, will celebrate in person</label>
                <input id="rsvp" type="radio" name="rsvp" value="No" /> <label htmlFor="rsvp">No, will celebrate in spirit</label>
              </fieldset>

              <fieldset className="pure-group">
                <label htmlFor="guestCount">No. of Guests Attending</label>
                <input required id="guestCount" type="text" pattern="[0-9]*" title="Input a valid number" name="guestCount" defaultValue="1" />
              </fieldset>              
              
              <fieldset className="pure-group">
                <label htmlFor="otherGuests">Other Guest Names</label>
                <input id="otherGuests" name="otherGuests" placeholder="Shiwani, Animesh" />
              </fieldset>  

              <fieldset className="pure-group">
                <label htmlFor="email">Email Address</label>
                <input required id="email" name="email" type="email" defaultValue=""
                placeholder="your.name@email.com"/>
                <span className="email-invalid" style={{display: 'none'}}>
                  Must be a valid email address</span>
              </fieldset>

              <fieldset className="pure-group">
                <legend>Mailing Address</legend>
                <label htmlFor="address1">Address 1</label>
                <input required id="address1" name="address1" placeholder="123 Safari Blvd" />
                <label htmlFor="address2">Address 2</label>
                <input id="address2" name="address2" placeholder="Suite 1A" />
                <label htmlFor="city">City</label>
                <input required id="city" name="city" placeholder="San Francisco" />
                <label htmlFor="state">State</label>
                <input required id="state" name="state" placeholder="CA" />
                <label htmlFor="zip">Zip</label>
                <input required id="zip" name="zip" placeholder="12345" />
              </fieldset>          

              <fieldset className="pure-group">
                <label htmlFor="comments">Questions/Comments</label>
                <textarea id="comments" name="comments" rows="10"
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
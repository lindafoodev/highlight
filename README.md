# Highlight 

This is a repo for my personal fun projects celebrating life events for friends. 

Currently, it contains: 
* Baby Agarwal - a personalized single-page responsive landing page for a baby shower where users can view event details, shower registry, due date countdown, and RSVP. Serverless - RSVP data is auto-collected via Google Sheet API and confirmation auto-sent to email. 
  * Front-End, Serverless - JavaScript, React, HTML/CSS, Google Sheet API

## Baby Agarwal - https://babyagarwal.netlify.com
* Project Wins
  * Utilized Google Sheet API to auto-send an email and update a Google Sheet with RSVP attendee details once form submitted 
  * Pragmatic and quick shipment of features
  * Set-up and used MailChimp to send evite
  * Created HTML Email
  * Heavier customization and troubleshooting of front-end, in particular:
    * overlay
    * modals
    * radio buttons
    * animation
    * responsive
  * Implemented Flexbox
  * Implemented Countdown
  * Implemented Photo Carousel 
  * Utilized graphics software to customize image
    * background colors for icons
    * resize images
      * add background layer (960 x 600) to portrait photos to maintain image ratio on landscape view (resize portrait height to 600  - maintain aspect ratio) - default
      * add background layer (450 x 600) to landscape photos to maintain image ratio on portrait view (resize landscape width to 450 - maintain aspect ratio) 

* Project Wishes
  - [x] Photo slideshow modal
  - [ ] Swipe interactivity on photo modal
  - [ ] Arrow key interactivity on photo modal
  - [ ] Active photo indicator on photo modal
  - [ ] Refactor CSS
  - [ ] Refactor React Components
  - [ ] Add additional tests
  - [ ] Make form more dynamic ie. when radio selected, only some fieldsets appear.

* Credits
  * Flat Square Animals - Andrey Bzhitskikh
  * React Countdown Tutorial - Kristin Baumann
  * Google Script Tutorial - Martin Hawksey
  * Build An Image Slider With React & ES6 - Daniel Zuzevich

# Scripts

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>

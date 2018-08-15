import React from 'react';

export default class Home extends React.Component {

  render(){
      return (
          <div className='main'>
            <div className='box-container theme-color-1 col-4'>
                <div className='inner-box-container m1n1'></div>
            </div>
            <div className='box-container theme-color-2 col-4'>
                <div className='inner-box-container m1n2'></div>
            </div>
            <div className='box-container theme-color-3 col-4'>
                <div className='inner-box-container m1n3'></div>
            </div>
            <div className='box-container theme-color-3 col-4'>
                <div className='inner-box-container m2n1'></div>
            </div>
            <div className='box-container theme-color-1 col-4'>
                <div className='inner-box-container m2n2'></div>
            </div>
            <div className='box-container theme-color-2 col-4'>
                <div className='inner-box-container m2n3'></div>
            </div>
            <div className='box-container theme-color-2 col-4'>
                <div className='inner-box-container m3n1'></div>
            </div>
            <div className='box-container theme-color-3 col-4'>
                <div className='inner-box-container m3n2'></div>
            </div>
            <div className='box-container theme-color-1 col-4'>
                <div className='inner-box-container m3n3'></div>
            </div>
          </div>  
      );
  }
}

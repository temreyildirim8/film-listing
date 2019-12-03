import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div>

          <div className="loader">
            <div className="preloader">
              <div className="spinner-layer pl-red">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <p>Please wait...</p>
          </div>
 
      </div>
    );
  }
}

export default Loading;
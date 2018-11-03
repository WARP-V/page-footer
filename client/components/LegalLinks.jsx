import React from 'react';

import GuideLinks from './GuideLinks';

class LegalLinks extends React.Component { 

  render() {
    return (
      <div id="llinks">
        <div className="left">
          <img src="//content.nike.com/content/dam/nike/global/country_flags/us_sml.png"></img>
          <span style={{color: '#fff'}}>United States</span>
          <span style={{cursor: 'text', width: 'calc(100% - 105px)', marginRight: '0px'}}>@ 2018 Warp-V, Ltd. No Rights Reserved</span>
        </div>
        <div className="right">
          <span>Nike Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Guides
            <GuideLinks />
          </span>
        </div>
      </div>
    );
  }
}

export default LegalLinks;
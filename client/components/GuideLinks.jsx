import React from 'react';

class GuideLinks extends React.Component {
  
  constructor() {
    super();
  }



  render() {
    return(
      <div id="glinks">
        <div className="popup">
          <div className="list">
            <span className="item">Nike Air</span>
            <span className="item">Nike VaporMax</span>
            <span className="item">Nike Free</span>
            <span className="item">Nike Lunarion</span>
            <span className="item">Nike Air Force 1</span>
            <span className="item">Boys</span>
            <span className="item">Basketball</span>
            <span className="item">Soccer</span>
            <span className="item">Football</span>
          </div>
          <div className="list">
            <span className="item">Nike Hyperadapt</span>
            <span className="item">Nike Flyleather</span>
            <span className="item">Nike ZoomX</span>
            <span className="item">NBA</span>
            <span className="item">Nike Air Max</span>
            <span className="item">Girls</span>
            <span className="item">Golf</span>
            <span className="item">Skateboarding</span>
            <span className="item">Baseball</span>
          </div>
          <div className="list">
            <span className="item react">Nike React</span>
            <span className="item">Nike Flyknit</span>
            <span className="item">Nike FlyEase</span>
            <span className="item">NBA Jerseys</span>
            <span className="item">Nike Pegasus</span>
            <span className="item">Running</span>
            <span className="item">Nike Sportswear</span>
            <span className="item">Tennis</span>
            <span className="item">Nike Promo Codes</span>
          </div>
        </div>
        <div className="highlight"></div>
      </div>
    )
  }
}

export default GuideLinks;
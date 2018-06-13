import React, {Component} from 'react';
import './style.scss';

const percentageToHue= (percentage, hue0, hue1) => {
  return (percentage * (hue1 - hue0)) + hue0;
}

class ProgressBubble extends Component {

  render() {
    const waterColor = `hsla(${percentageToHue(this.props.value / 100, 0, 120)}, 100%, 50%, .7)`;
    const textColor = `hsla(${percentageToHue(this.props.value / 100, 0, 120)}, 100%, 30%, 1)`;

    return (
      <div className="fu-progress" style={{border: `5px solid ${textColor}`}}>
        <div className="fu-inner">
          <div className="water" style={{
            top: 100-this.props.value+'%',
            backgroundColor: waterColor
          }}></div>
          <div className="fu-percent percent" style={{color: textColor}}><span>{this.props.value}</span>%</div>
          <div className="glare"></div>
        </div>
      </div>
    );
  }
}

export default ProgressBubble;

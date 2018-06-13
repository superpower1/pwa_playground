import React, {Component} from 'react';
import './style.scss';

class ProgressBubble extends Component {

  render() {
    return (
      <div className="fu-progress">
        <div className="fu-inner">
          <div className="fu-percent percent"><span>{this.props.value}</span>%</div>
          <div className="water" style={{top: 100-this.props.value+'%'}}></div>
          <div className="glare"></div>
        </div>
      </div>
    );
  }
}

export default ProgressBubble;

import React, {Component} from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

class Speedo extends Component {
  render() {
    return (
      <div style={{
        width: "500px",
        height: "300px",
        background: "#EFEFEF"
      }}>
        <ReactSpeedometer
          fluidWidth={true}
          minValue={0}
          maxValue={100}
          value={this.props.value}
          segments={20}
          needleColor="steelblue"
          needleTransitionDuration={3000}
          needleTransition="easeElastic"
        />
      </div>
    );
  }
}

export default Speedo;

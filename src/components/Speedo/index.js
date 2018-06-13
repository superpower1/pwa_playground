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
          minValue={100}
          maxValue={500}
          value={473}
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

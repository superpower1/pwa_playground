import React, {Component} from 'react';
import './style.scss';
import Gauge from 'svg-gauge';

const defaultOptions = {
  dialStartAngle: 90,
  dialEndAngle: 0,
  value: 50,
  animDuration: 1,
  showValue: true,
  max: 100
};

class Speedo extends Component {
  componentDidMount() {
    this.renderGauge(this.props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.renderGauge(nextProps);
    }
    return false;
  }

  renderGauge(props) {
    const gaugeOptions = Object.assign({}, defaultOptions, props);
    if (!this.gauge) {
      this.gauge = Gauge(this.gaugeEl, gaugeOptions);
    }
    this.gauge.setValueAnimated(props.value, gaugeOptions.animDuration);
  }

  render() {
    return (
      <div ref={el => this.gaugeEl = el} className="gauge-container">
        <span className="value-text">km/hr</span>
      </div>
    );
  }
}

export default Speedo;

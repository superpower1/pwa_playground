import React, {Component} from 'react';
import RcTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import ReactTooltip from 'react-tooltip';

class Tooltip extends Component {
  render() {
    return (
      <div>
        <RcTooltip placement="top" trigger={['hover']} overlay={<span>secret</span>}>
          <p>rc-tooltip</p>
        </RcTooltip>
        <p data-tip="secret2">react-tooltip</p>
        <ReactTooltip/>
      </div>
    );
  }
}

export default Tooltip;

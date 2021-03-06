import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import 'chartjs-plugin-zoom';

function CustomTooltips(tooltipModel) {
  var _this = this;

  // Add unique id if not exist
  var _setCanvasId = function _setCanvasId() {
    var _idMaker = function _idMaker() {
      var _hex = 16;
      var _multiplier = 0x10000;
      return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
    };

    var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

    _this._chart.canvas.id = _canvasId;
    return _canvasId;
  };

  var ClassName = {
    ABOVE: 'above',
    BELOW: 'below',
    CHARTJS_TOOLTIP: 'chartjs-tooltip',
    NO_TRANSFORM: 'no-transform',
    TOOLTIP_BODY: 'tooltip-body',
    TOOLTIP_BODY_ITEM: 'tooltip-body-item',
    TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
    TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
    TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
    TOOLTIP_HEADER: 'tooltip-header',
    TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
  };
  var Selector = {
    DIV: 'div',
    SPAN: 'span',
    TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
  };
  var tooltip = document.getElementById(Selector.TOOLTIP);

  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = Selector.TOOLTIP;
    tooltip.className = ClassName.CHARTJS_TOOLTIP;

    this._chart.canvas.parentNode.appendChild(tooltip);
  } // Hide if no tooltip


  if (tooltipModel.opacity === 0) {
    tooltip.style.display = 'none';
    return;
  } // Set caret Position


  tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

  if (tooltipModel.yAlign) {
    tooltip.classList.add(tooltipModel.yAlign);
  } else {
    tooltip.classList.add(ClassName.NO_TRANSFORM);
  } // Set Text


  if (tooltipModel.body) {
    var titleLines = tooltipModel.title || [];
    var tooltipHeader = document.createElement(Selector.DIV);
    tooltipHeader.className = ClassName.TOOLTIP_HEADER;
    titleLines.forEach(function (title) {
      var tooltipHeaderTitle = document.createElement(Selector.DIV);
      tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
      tooltipHeaderTitle.innerHTML = title;
      tooltipHeader.appendChild(tooltipHeaderTitle);
    });
    var tooltipBody = document.createElement(Selector.DIV);
    tooltipBody.className = ClassName.TOOLTIP_BODY;
    var tooltipBodyItems = tooltipModel.body.map(function (item) {
      return item.lines;
    });
    tooltipBodyItems.forEach(function (item, i) {
      var tooltipBodyItem = document.createElement(Selector.DIV);
      tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
      var colors = tooltipModel.labelColors[i];
      var tooltipBodyItemColor = document.createElement(Selector.SPAN);
      tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
      tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
      tooltipBodyItem.appendChild(tooltipBodyItemColor);

      if (item[0].split(':').length > 1) {
        var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
        tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
        tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
        tooltipBodyItem.appendChild(tooltipBodyItemLabel);
        var tooltipBodyItemValue = document.createElement(Selector.SPAN);
        tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
        tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
        tooltipBodyItem.appendChild(tooltipBodyItemValue);
      } else {
        var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

        _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
        _tooltipBodyItemValue.innerHTML = item[0];
        tooltipBodyItem.appendChild(_tooltipBodyItemValue);
      }

      tooltipBody.appendChild(tooltipBodyItem);
    });
    tooltip.innerHTML = '';
    tooltip.appendChild(tooltipHeader);
    tooltip.appendChild(tooltipBody);
  }

  var positionY = this._chart.canvas.offsetTop;
  var positionX = this._chart.canvas.offsetLeft; // Display, position, and set styles for font

  tooltip.style.display = 'block';
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'rgba(0,0,0,.5)';
  tooltip.style.left = positionX + tooltipModel.caretX + "px";
  tooltip.style.top = positionY + tooltipModel.caretY + "px";
}

const brandInfo = getStyle('--info')

const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  zoom: {
    enabled: true,
    drag: true,
    mode: 'x'
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

class LineCharts extends Component {
  render() {
    return (
      <div style={{height: '500px'}}>
        <Line data={cardChartData2} options={cardChartOpts2} height={70} />
      </div>
    );
  }
}

export default LineCharts;

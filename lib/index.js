'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieChart = function PieChart(_ref) {
  var data = _ref.data;

  var total = data.reduce(function (sum, item) {
    return sum + item.value;
  }, 0);

  var renderSlice = function renderSlice(start, end, color) {
    var sliceSize = end - start;
    var transform = 'rotate(' + start / total * 360 + 'deg)';

    return _react2.default.createElement('div', {
      className: 'slice',
      style: {
        transform: transform,
        background: color,
        clipPath: 'polygon(50% 50%, 50% 0%, ' + (sliceSize >= 180 ? '100%' : '0%') + ' 0%, 50% 50%)'
      }
    });
  };

  var start = 0;
  var slices = data.map(function (item) {
    var end = start + item.value;
    var slice = renderSlice(start, end, item.color);
    start = end;
    return slice;
  });

  return _react2.default.createElement(
    'div',
    { className: 'chart' },
    slices
  );
};

exports.default = PieChart;
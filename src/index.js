import React from 'react';

const PieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderSlice = (start, end, color) => {
    const sliceSize = end - start;
    const transform = `rotate(${start / total * 360}deg)`;

    return (
      <div
        className="slice"
        style={{
          transform,
          background: color,
          clipPath: `polygon(50% 50%, 50% 0%, ${sliceSize >= 180 ? '100%' : '0%'} 0%, 50% 50%)`
        }}
      />
    );
  }

  let start = 0;
  const slices = data.map(item => {
    const end = start + item.value;
    const slice = renderSlice(start, end, item.color);
    start = end;
    return slice;
  });

  return (
    <div className="chart">
      {slices}
    </div>
  );
};

export default PieChart;

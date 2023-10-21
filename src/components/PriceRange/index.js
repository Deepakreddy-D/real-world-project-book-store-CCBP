import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

import "./index.css";

const PriceRange = (props) => {
  const tipHandleRender = (node, handleProps) => {
    return (
      <Tooltip
        overlayInnerStyle={{ minHeight: "auto" }}
        overlay={"$" + handleProps.value}
        offsetX={-50}
        offsetY={-10}
        placement="top"
        visible={true}
        showArrow={false}
      >
        {node}
      </Tooltip>
    );
  };


  return (
    <div className="price-range-container">
        <h1 className="price-range-heading">Filter by Price</h1>
        <div className="slider-container">
            <Slider
            value={[20, 60]}
            min={0}
            max={100}
            range
            pushable={true}
            allowCross={false}
            handleRender={tipHandleRender}
            />
        </div>
    </div>
  );
};

export default PriceRange
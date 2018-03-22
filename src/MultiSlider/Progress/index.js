import React from 'react';
import PropTypes from 'prop-types';
import sliderPropType from '../utils/sliderPropType';
import glamorous from 'glamorous';
import transition from '../utils/transition';
import getHalf from '../utils/getHalf';
import Dot from './Dot';
import processStyle from '../utils/processStyle';

const StyledProgress = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    right: 0
  },
  ({
    color,
    progress,
    height,
    equal,
    equalColor,
    roundedCorners,
    zIndex,
    noTransition
  }) => ({
    width: `${progress || 0}%`,
    height,
    backgroundColor: equal && equalColor ? equalColor : color,
    borderRadius: roundedCorners ? getHalf(height) : 0,
    zIndex,
    transition: noTransition ? 'none' : transition
  })
);

const Progress = ({
  slider,
  height,
  slidersEqual,
  equalColor,
  roundedCorners,
  mouseDown,
  zIndex
}) => (
  <StyledProgress
    className="progress"
    color={slider.color}
    progress={slider.progress}
    height={height}
    equal={slidersEqual}
    equalColor={equalColor}
    roundedCorners={roundedCorners}
    noTransition={mouseDown}
    zIndex={zIndex}
    css={processStyle(slider.style, {
      slider,
      height,
      slidersEqual,
      equalColor,
      roundedCorners,
      mouseDown,
      zIndex
    })}
  >
    {slider.dot && (
      <Dot
        dot={slider.dot}
        sliderColor={slider.color}
        mouseDown={mouseDown}
      />
    )}
  </StyledProgress>
);

Progress.propTypes = {
  slider: sliderPropType,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slidersEqual: PropTypes.bool.isRequired,
  equalColor: PropTypes.string,
  roundedCorners: PropTypes.bool.isRequired,
  mouseDown: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired
};

export default Progress;
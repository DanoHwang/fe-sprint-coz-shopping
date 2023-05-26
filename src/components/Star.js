import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import blankStarImg from '../assets/blank-star.svg';
import yellowStarImg from '../assets/yellow-star.svg';
import { insetTypes } from '../constants/insetTypes';

const StarIcon = styled.img.attrs(props => ({
  src: `${props.isSelected ? yellowStarImg : blankStarImg}`,
  alt: ''
}))`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  inset: ${({ inset, gap }) => {
    switch (inset) {
      case insetTypes.topLeft:
        return `${gap}px auto auto ${gap}px`;

      case insetTypes.topRight:
        return `${gap}px ${gap}px auto auto`;

      case insetTypes.bottomLeft:
        return `auto auto ${gap}px ${gap}px`;

      case insetTypes.bottomRight:
        return `auto ${gap}px ${gap}px auto`;

      default:
        return 'auto';
    }
  }};
  position: absolute;
  cursor: pointer;
`;

export const Star = ({ size, inset, gap, isSelected, onClick }) => {
  return (
    <StarIcon
      size={size}
      inset={inset}
      gap={gap}
      isSelected={isSelected}
      onClick={onClick}
    />
  );
};

Star.propTypes = {
  size: PropTypes.number,
  inset: PropTypes.oneOf(Object.values(insetTypes)),
  gap: PropTypes.oneOf([12, 24, 32]),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

Star.defaultProps = {
  size: 24,
  inset: insetTypes.topLeft,
  gap: 12,
  isSelected: false,
  onClick: undefined,
};


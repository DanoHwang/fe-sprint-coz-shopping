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
  inset: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  // 아래와 같이 작성하면 스토리북 실행 시 inset 속성에 대해 dynamic PropTypes를 반영하지 못하고 있으므로 위와 같이 문자열로 작성함
  // inset: PropTypes.oneOf([insetTypes.topLeft, insetTypes.topRight, insetTypes.bottomLeft, insetTypes.bottomRight]),
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


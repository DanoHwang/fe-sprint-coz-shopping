import { useState } from 'react';
import { Star } from './Star';
import { insetTypes } from '../constants/insetTypes';

export default {
  title: 'Atoms/Star',
  component: Star,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const [ isSelected, setIsSelected ] = useState(false);

  return (
    <Star
      size={args.size}
      inset={args.inset}
      gap={args.gap}
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};

export const StarIcon = (args) => <Template {...args} />;

StarIcon.args = {
  size: 24,
  inset: insetTypes.topLeft,
  gap: 12,
};

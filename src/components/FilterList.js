import React from 'react';
import { styled } from 'styled-components';

import allImg from '../assets/filter-all.svg';
import productImg from '../assets/filter-product.svg';
import categoryImg from '../assets/filter-category.svg';
import exhibitionImg from '../assets/filter-exhibition.svg';
import brandImg from '../assets/filter-brand.svg';
import { filterTypes } from '../constants/filterTypes';

import Filter from './Filter';

const filters = [
  { type: filterTypes.all, image: allImg },
  { type: filterTypes.product, image: productImg },
  { type: filterTypes.category, image: categoryImg },
  { type: filterTypes.exhibition, image: exhibitionImg },
  { type: filterTypes.brand, image: brandImg }
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 554px;
  height: 122px;
  text-align: center;
`;

export default function FilterList ({ setCheckedFilter, isChecked = true }) {

  return (
    <Wrapper>
      {filters.map(({ type, image }) => (
        <Filter
          type={type}
          image={image}
          setCheckedFilter={setCheckedFilter}
          isChecked={isChecked}
          key={type}
        />
      ))}
    </Wrapper>
  );
}

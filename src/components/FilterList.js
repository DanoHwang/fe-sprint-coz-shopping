import React from 'react';
import { styled } from 'styled-components';

import allImg from '../assets/filter-all.svg';
import productImg from '../assets/filter-product.svg';
import categoryImg from '../assets/filter-category.svg';
import exhibitionImg from '../assets/filter-exhibition.svg';
import brandImg from '../assets/filter-brand.svg';

import Filter from './Filter';
import { filterTypes } from '../constants/filterTypes';
import { itemCardTypes } from '../constants/itemCardTypes';

const filters = [
  { name: filterTypes.all, image: allImg, type: itemCardTypes.all },
  { name: filterTypes.product, image: productImg, type: itemCardTypes.product },
  { name: filterTypes.category, image: categoryImg, type: itemCardTypes.category },
  { name: filterTypes.exhibition, image: exhibitionImg, type: itemCardTypes.exhibition },
  { name: filterTypes.brand, image: brandImg, type: itemCardTypes.brand }
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 554px;
  height: 122px;
  text-align: center;
`;

export default function FilterList ({ setCheckedFilter, checkedFilter }) {

  return (
    <Wrapper>
      {filters.map(({ type, name, image }) => (
        <Filter
          type={type}
          name={name}
          image={image}
          setCheckedFilter={setCheckedFilter}
          checkedFilter={checkedFilter}
          key={type}
        />
      ))}
    </Wrapper>
  );
}

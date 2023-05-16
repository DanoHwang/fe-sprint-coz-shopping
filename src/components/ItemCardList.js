import React from 'react';
import { styled } from 'styled-components';

import { productsData } from '../assets/dummy';
import { itemCardTypes } from '../constants/itemCardTypes';

import ItemCard from '../components/ItemCard';

const { all, bookmark } = itemCardTypes;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 12px 0;
`;

export default function ItemCardList ({ count, bookmarks, setBookmarks, searchType = all }) {
  const searchData = (type) => {
    if (type === all) return productsData;

    if (type === bookmark) {
      return bookmarks.map((id) => productsData.find((data) => data.id === id));
    }

    return productsData.filter((data) => data.type === searchType);
  };

  const filteredData = searchData(searchType);

  return (
    <Wrapper>
      {filteredData.slice(0, count).map((data) => (
        <ItemCard
          data={data}
          key={data.id}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      ))}
    </Wrapper>
  );
}

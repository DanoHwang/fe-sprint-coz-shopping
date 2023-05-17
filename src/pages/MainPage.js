import React from 'react';
import { styled } from 'styled-components';

import ItemCardList from '../components/ItemCardList';
import { itemCardTypes } from '../constants/itemCardTypes';

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export default function MainPage ({ bookmarks, setBookmarks }) {

  return (
    <main>
      <Title>상품 리스트</Title>
      <ItemCardList
        count={4}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={itemCardTypes.all}
      />
      <Title>북마크 리스트</Title>
      <ItemCardList
        count={4}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={itemCardTypes.bookmark}
      />
    </main>
  );
}

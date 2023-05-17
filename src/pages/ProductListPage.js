import React, { useState } from 'react';
import { styled } from 'styled-components';

import FilterList from '../components/FilterList';
import ItemCardList from '../components/ItemCardList';
import { itemCardTypes } from '../constants/itemCardTypes';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ProductListPage () {
  const [ checkedFilter, setCheckedFilter ] = useState(itemCardTypes.all);

  // refactor/data-type 브랜치 머지 후 아래 Line22-24 수정 예정
  const [ bookmarks, setBookmarks ] = useState(
    JSON.parse(window.localStorage.getItem('bookmarks')) || []
  );

  return (
    <Wrapper>
      <FilterList setCheckedFilter={setCheckedFilter} checkedFilter={checkedFilter} />
      <ItemCardList
        count={10}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={checkedFilter}
      />
    </Wrapper>
  )
}

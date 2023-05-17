import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/FooterStyle';

import FilterList from '../components/FilterList';
import ItemCardList from '../components/ItemCardList';

export default function ProductListPage () {
  const [ checkedFilter, setCheckedFilter ] = useState(itemCardTypes.all);

  // refactor/data-type 브랜치 머지 후 아래 Line22-24 수정 예정
  const [ bookmarks, setBookmarks ] = useState(
    JSON.parse(window.localStorage.getItem('bookmarks')) || []
  );

  return (
    <S.Wrapper>
      <FilterList setCheckedFilter={setCheckedFilter} checkedFilter={checkedFilter} />
      <ItemCardList
        count={10}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={checkedFilter}
      />
    </S.Wrapper>
  )
}

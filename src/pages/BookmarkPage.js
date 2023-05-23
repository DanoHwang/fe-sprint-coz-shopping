import React, { useEffect, useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import { manageLocalStorage } from '../utils/manageLocalStorage';
import * as S from '../styles/BookmarkPageStyle';

import FilterList from '../components/FilterList';
import ItemCardList from '../components/ItemCardList';

export default function BookmarkPage () {
  const [ checkedFilter, setCheckedFilter ] = useState(itemCardTypes.all);
  const [ target, setTarget ] = useState(null);
  const [ items, setItems ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ bookmarks, setBookmarks ] = useState(
    manageLocalStorage.getBookmarks()
  );

  const loadContent = () => {
    const newContents = [...bookmarks.values()].slice((page - 1) * 16, page * 16);
    setItems((prev) => [ ...prev, ...newContents ]);
    setPage((prev) => prev + 1);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadContent();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <S.Wrapper>
      <FilterList setCheckedFilter={setCheckedFilter} checkedFilter={checkedFilter} />
      <ItemCardList
        items={items}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={checkedFilter}
      />
      <S.Target ref={setTarget} />
    </S.Wrapper>
  )
}

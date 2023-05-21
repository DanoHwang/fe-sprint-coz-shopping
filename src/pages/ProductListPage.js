import React, { useEffect, useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/ProductListPageStyle';

import FilterList from '../components/FilterList';
import ItemCardList from '../components/ItemCardList';
import { manageLocalStorage } from '../utils/manageLocalStorage';
import { getProductsByPage } from '../utils/getProducts';

export default function ProductListPage () {
  const [ checkedFilter, setCheckedFilter ] = useState(itemCardTypes.all);
  const [ target, setTarget ] = useState(null);
  const [ items, setItems ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ bookmarks, setBookmarks ] = useState(
    manageLocalStorage.getBookmarks()
  );

  const fetchData = async () => {
    const result = await getProductsByPage(page);

    setItems((prev) => [ ...prev, ...result ]);
    setPage((prev) => prev + 1);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchData();
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
      <S.Target ref={setTarget}>Target</S.Target>
    </S.Wrapper>
  );
}

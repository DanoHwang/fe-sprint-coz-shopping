import React, { useEffect, useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import { manageLocalStorage } from '../utils/manageLocalStorage';
import { getAllProducts } from '../utils/getProducts';
import * as S from '../styles/MainPageStyle';

import ItemCardList from '../components/ItemCardList';

export default function MainPage () {
  const [ items, setItems ] = useState([]);
  const [ bookmarks, setBookmarks ] = useState(
    manageLocalStorage.getBookmarks()
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProducts();
      setItems(result.slice(0, 4));
    };

    fetchData();
  }, []);

  return (
    <main>
      <S.Title>상품 리스트</S.Title>
      <ItemCardList
        items={items}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={itemCardTypes.all}
      />
      <S.Title>북마크 리스트</S.Title>
      <ItemCardList
        items={[...bookmarks.values()].slice(0, 4)}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    </main>
  );
}

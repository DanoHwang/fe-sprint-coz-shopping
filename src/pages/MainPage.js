import React from 'react';
import ItemCardList from '../components/ItemCardList';

export default function MainPage ({ bookmarks, setBookmarks }) {

  return (
    <main>
      <h1>상품 리스트</h1>
        <ItemCardList
          count={4}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      <h1>북마크 리스트</h1>
    </main>
  )
}

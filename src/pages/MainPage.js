import React from 'react';
import ItemCardList from '../components/ItemCardList';

export default function MainPage () {

  return (
    <main>
      <h1>상품 리스트</h1>
        <ItemCardList count={4} />
      <h1>북마크 리스트</h1>
    </main>
  )
}

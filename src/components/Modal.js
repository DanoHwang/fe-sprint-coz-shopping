import React from 'react';

import XBtn from '../assets/white-x-button.svg';
import * as S from '../styles/ModalStyle';

export default function Modal ({ openModalHandler, setIsOpen, image, isBookmarked, handleBookmark, title }) {

  return (
    <S.ModalBackdrop onClick={openModalHandler}>
      <S.ModalView onClick={(event) => event.stopPropagation()}>
        <S.ModalButton src={XBtn} onClick={() => setIsOpen(false)} />
        <S.ModalImage src={image} />
        <S.ModalStar selected={isBookmarked ? true : false} onClick={handleBookmark} />
        <S.ModalTitle>{title}</S.ModalTitle>
      </S.ModalView>
    </S.ModalBackdrop>
  );
}

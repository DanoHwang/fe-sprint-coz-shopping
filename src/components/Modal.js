import React from 'react';

import XBtn from '../assets/white-x-button.svg';
import { insetTypes } from '../constants/insetTypes';
import * as S from '../styles/ModalStyle';

import { Star } from './Star';

export default function Modal ({ openModalHandler, setIsOpen, image, isBookmarked, handleBookmark, title }) {

  return (
    <S.ModalBackdrop onClick={openModalHandler}>
      <S.ModalView onClick={(event) => event.stopPropagation()}>
        <S.ModalButton src={XBtn} onClick={() => setIsOpen(false)} />
        <S.ModalImage src={image} />
        <Star size={32} inset={insetTypes.bottomLeft} gap={32} isSelected={isBookmarked} onClick={handleBookmark} />
        <S.ModalTitle>{title}</S.ModalTitle>
      </S.ModalView>
    </S.ModalBackdrop>
  );
}

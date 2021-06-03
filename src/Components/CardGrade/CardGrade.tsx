import React from 'react';
import styled, { css } from 'styled-components';

import { cardGradeListType, cardGradeListTopType } from '../../types/CardGradeType';
import { Grade } from './top/Grade';

export interface CardGradeStoryProps {
  size?: string;
  selected?: boolean;
  cardGrade?: cardGradeListType;
}

export const CardGrade: React.FC<CardGradeStoryProps> = ({
  size,
  selected,
  cardGrade,
}: CardGradeStoryProps) => {
  const grade: cardGradeListTopType = {
    title: cardGrade.title,
    subTitle: cardGrade.subTitle,
  };
  return (
    <Container size={size} selected={selected}>
      <Grade grade={grade} />
    </Container>
  );
};

// CardGrade.defaultProps = {
//   size: 'normal',
// };

type StyleProps = {
  size?: string;
  selected?: boolean;
};

const sizeStyles = css`
  ${(props: StyleProps) =>
    props.size === 'normal' &&
    css`
      width: 416px;
      height: 145px;
      padding: 14px;
      border-radius: 5px;
    `}
`;

const Container = styled.div`
  /* background-color: #c97c7c; */
  background-color: #fff;
  /* border: 1px solid #000; */
  border: ${(props: StyleProps) => props.selected && '1px solid #5481B7'};
  ${sizeStyles};
`;

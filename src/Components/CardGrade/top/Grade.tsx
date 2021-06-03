import React from 'react';
import styled, { css } from 'styled-components';

import { cardGradeListTopType } from '../../../types/CardGradeType';
// export interface GradeProps {
//   title: string;
//   subTitle: string;
//   styles?: string;
// }

export interface GradeStoryProps {
  grade: cardGradeListTopType;
  styles?: string;
}

// logo이미지는 미적용, 실제 작업에서는 백엔드에서 넘겨주는 걸로 사용할거 같아서 일단 div태그로 회색박스 적용!
export function Grade({ grade: { title, subTitle }, styles }: GradeStoryProps) {
  return (
    <Row>
      <Col>
        <Title styles={styles}>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Col>
      <Logo styles={styles} />
    </Row>
  );
}
// export const Grade: React.FC<GradeStoryProps> = ({ grade: { title, subTitle }, styles }) => {
//   return (
//     <Row>
//       <Col>
//         <Title styles={styles}>{title}</Title>
//         <SubTitle>{subTitle}</SubTitle>
//       </Col>
//       <Logo styles={styles} />
//     </Row>
//   );
// };

Grade.defaultProps = {
  grade: {
    title: 'normal',
    subTitle: 'normal',
  },
};

type StyleProps = {
  styles?: string;
  imgStyle?: string;
};

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const titleFontStyles = css`
  ${(props: StyleProps) =>
    props.styles === 'normal' &&
    css`
      font-size: 20px;
      font-weight: bold;
      line-height: 27px;
    `}
`;

const subTitleFontStyles = css`
  ${(props: StyleProps) =>
    props.styles === 'normal' &&
    css`
      font-size: 8px;
      line-height: 11px;
    `}
`;

const imgStyles = css`
  ${(props: StyleProps) =>
    props.styles === 'normal' &&
    css`
      width: 65px;
      height: 40px; // 피그마에서 세로사이즈가 로고마다 틀림,
    `}
`;

const Title = styled.h3`
  ${titleFontStyles}
`;

const SubTitle = styled.p`
  ${subTitleFontStyles}
`;

const Logo = styled.div`
  background-color: #ccc;
  ${imgStyles}
`;

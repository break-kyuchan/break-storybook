import React from 'react';
import { CardGrade } from '../../Components/CardGrade/CardGrade';
import { cardGradeListType } from '../../types/CardGradeType';

const cardGradeList: cardGradeListType[] = [
  {
    id: 0,
    title: 'PSA 10',
    subTitle: 'Gem Mint',
    count: 71,
    minPrice: '3,950,000',
    maxPrice: '2,600,000',
    lastPrice: '3,100,000',
  },
  {
    id: 1,
    title: 'brg 10',
    subTitle: 'Gem Mint',
    count: 63,
    minPrice: '4,000,000',
    maxPrice: '2,800,000',
    lastPrice: '3,200,000',
  },
];

const CardGrades = cardGradeList.map((cardGrade, index) => (
  <CardGrade key={cardGrade.id} cardGrade={cardGrade} />
));

const CardPage: React.FC = () => {
  return (
    <div>
      <p>카드 페이지</p>
      {CardGrades}
    </div>
  );
};

export default CardPage;

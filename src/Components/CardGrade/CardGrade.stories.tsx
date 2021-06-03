import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardGrade, CardGradeStoryProps } from './CardGrade';
// import { cardGradeList } from '../../pages/CardPage/CardPage';

export default {
  title: 'CardGrade',
  component: CardGrade,
} as Meta;

const Template: Story<CardGradeStoryProps> = args => <CardGrade {...args} />;
// cardGrade에 카드페이지에 있는 cardGradeList 배열을 또 가져와야할지 ....
export const Default = Template.bind({});
Default.args = {
  size: 'normal',
  selected: false,
  cardGrade: {
    id: 0,
    title: 'PSA 10',
    subTitle: 'Gem Mint',
    count: 71,
    minPrice: '3,950,000',
    maxPrice: '2,600,000',
    lastPrice: '3,100,000',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selected: true,
};

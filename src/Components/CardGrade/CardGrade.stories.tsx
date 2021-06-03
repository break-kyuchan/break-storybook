import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardGrade, CardGradeStoryProps } from './CardGrade';
import * as GradeStories from './top/Grade.stories';

export default {
  title: 'CardGrade',
  component: CardGrade,
} as Meta;

const Template: Story<CardGradeStoryProps> = args => <CardGrade {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
  selected: false,
  // cardGrades: [
  //   { ...GradeStories.Default.args?.grade, title: 'PSA 10', subTitle: 'Gem Mint' },
  //   { ...GradeStories.Default.args?.grade, title: 'brg 10', subTitle: 'Gem Mint' },
  //   { ...GradeStories.Default.args?.grade, title: 'brg 9', subTitle: 'Mint' },
  //   { ...GradeStories.Default.args?.grade, title: 'break A', subTitle: 'Mint' },
  //   { ...GradeStories.Default.args?.grade, title: 'break B', subTitle: 'Mid quality raw cards' },
  // ],
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selected: true,
};

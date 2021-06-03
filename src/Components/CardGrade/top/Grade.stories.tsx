import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grade, GradeStoryProps } from './Grade';

export default {
  title: 'CardGrade/Top/Grade',
  component: Grade,
} as Meta;

const Template: Story<GradeStoryProps> = args => <Grade {...args} />;

export const Default = Template.bind({});
Default.args = {
  grade: { title: 'PSA 10', subTitle: 'Gem Mint' },
  styles: 'normal',
};

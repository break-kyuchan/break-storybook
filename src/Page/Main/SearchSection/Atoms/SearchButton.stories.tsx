import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchButton } from './SearchButton';

export default {
  title: 'Main/SeachSection/Atoms/SearchButton',
  component: SearchButton,
} as Meta;

const Template: Story = args => <SearchButton {...args} />;

export const Defalut = Template.bind({});

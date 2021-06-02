import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchTagButton } from './SearchTagButton'

export default {
  title: 'Search/Atoms/SearchTagButton',
  component: SearchTagButton,
} as Meta;

const Template: Story = args => <SearchTagButton {...args} />;

export const Default = Template.bind({});
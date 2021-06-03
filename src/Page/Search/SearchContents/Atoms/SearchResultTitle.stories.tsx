import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchResultTitle } from './SearchResultTitle'

export default {
  title: 'Search/SearchContents/Molecules/SearchResultTitle',
  component: SearchResultTitle,
} as Meta;

const Template: Story = args => <SearchResultTitle {...args} />;

export const searchResultTitle = Template.bind({});

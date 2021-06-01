import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Heaader/Molecules/Menu',
  component: Menu,
} as Meta;

export const Template: Story = args => <Menu {...args} />;



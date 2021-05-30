import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Heaader/Molecules/Menu',
  component: Menu,
} as Meta;

const Template: Story = args => <Menu {...args} />;

export const Default = Template.bind({});

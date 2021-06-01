import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Heaader/Templates/Headers',
  component: Header,
} as Meta;

export const Template:Story = args => <Header {...args} />;


import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBarTitle } from './SideBarTitle'

export default {
  title: 'Search/Atoms/SideBarTitle',
  component: SideBarTitle,
} as Meta;

const Template: Story = args => <SideBarTitle {...args} />;

export const Default = Template.bind({});
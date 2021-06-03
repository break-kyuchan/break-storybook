import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBarContents } from './SideBarContents'

export default {
  title: 'Search/SideBar/Organisms/SideBarContents',
  component: SideBarContents,
} as Meta;

const Template: Story = args => <SideBarContents {...args} />;

export const sideBarcontetns = Template.bind({});
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBarTitle } from './SideBarTitle'

export default {
  title: 'Search/Atoms/SideBarTitle',
  component: SideBarTitle,
} as Meta;

const Template: Story = args => <SideBarTitle {...args} />;

export const ProductType = Template.bind({});
ProductType.args={
  title:"PRODUCT TYPE"
}

export const Available = Template.bind({});
Available.args={
  title:"AVAILABILITY"  
}

export const GradeType = Template.bind({});
GradeType.args={
  title:"GRADE TYPE"  
}
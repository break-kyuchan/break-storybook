import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProductType } from './ProductType'

export default {
  title: 'Search/SideBar/Molecules/ProductType',
  component: ProductType,
} as Meta;

const Template: Story = args => <ProductType {...args} />;

export const productType = Template.bind({});
productType.args={
  title:"PRODUCT TYPE"
}
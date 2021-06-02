import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProductType } from './ProductType'

export default {
  title: 'Search/Molecules/ProductType',
  component: ProductType,
} as Meta;

const Template: Story = args => <ProductType {...args} />;

export const Default = Template.bind({});
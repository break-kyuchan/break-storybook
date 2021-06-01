import React from 'react';
// import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../Atoms/Button';
import { withKnobs , boolean, text} from '@storybook/addon-knobs'

export default {
  title: 'Heaader/Atoms/Button',
  component: Button,
  decorators : [withKnobs]
} 
// as Meta;

// export const Template: Story<ButtonProps> = args => <Button {...args} />;

// export const Default = Template.bind({});

export const button:React.FC<ButtonProps> = () => {
  // knobs 만들기
  // const color = boolean('true/false', false);
  const  title = text('name', 'HOME');
  return <Button title={title}/>;
};
// button.story = {
//   name: 'button'
// };

import React from 'react';
import { Button } from '../../stories/Button';

export default {
  component: Button,
  title: 'Button',
  args: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

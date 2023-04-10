import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click Here',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click Here Too',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Successfull',
  },
};

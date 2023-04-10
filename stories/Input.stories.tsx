import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

// Stories
type Story = StoryObj<typeof Input>

export const Small: Story = {
    args: {
        size: 'small'
    }
}

export const Medium: Story = {
    args: {
        size: 'medium'
    }
}

export const Large: Story = {
    args: {
        size: 'large'
    }
}
import { Box, Input as CInput } from '@chakra-ui/react';
import React, { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  size: 'small' | 'medium' | 'large';
}

export const Input = ({ size = 'medium', ...props }: InputProps) => {
  return (
    <Box>
      <CInput
        w={'50%'}
        placeholder={
          size === 'small'
            ? 'Small input...'
            : 'Mid-size or large input Inpt...'
        }
        p={size === 'small' ? 2 : size === 'medium' ? 4 : 6}
        {...props}
      />
    </Box>
  );
};

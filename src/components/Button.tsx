import React, { HTMLAttributes, ReactNode } from 'react';
import { Button as CButton } from '@chakra-ui/react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
}
export const Button = ({
  variant = 'success',
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <CButton
      backgroundColor={
        variant === 'success'
          ? 'green'
          : variant === 'primary'
          ? 'blue'
          : 'gray'
      }
      {...otherProps}
      color="white"
    >
      {' '}
      {children}
    </CButton>
  );
};

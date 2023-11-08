import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended jest-dom matchers
import { Primary, Secondary, Success } from '../stories/Button.stories'; // Import your stories and Button component
import { Button } from '../src/components/Button';
describe('Button Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(
      <Button variant="success">Default Button</Button>
    );
    expect(getByText('Default Button')).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'success'])(
    'renders %s variant',
    variant => {
      const { getByText } = render(<Button variant={'primary'}>Button</Button>);
      expect(getByText('Button')).toHaveStyle(
        `background-color: ${
          variant === 'success'
            ? 'green'
            : variant === 'primary'
            ? 'blue'
            : 'gray'
        }`
      );
    }
  );

  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button variant="success" onClick={onClickMock}>
        Click me
      </Button>
    );
    fireEvent.click(getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../stories/atoms/Button/Button';

describe('Button', () => {
  it('Should render an element with the button role', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('The button should be disabled', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  test.each(['button', 'submit', 'reset'] as ('button' | 'reset' | 'submit')[])(
    'Should support changing button type via `type`',
    (type) => {
      render(<Button type={type} />);
      expect(screen.getByRole('button')).toHaveAttribute('type', type);
    },
  );

  it('Should call onClick handler on click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('There should be no `aria-expanded` if the role is `switch`', () => {
    render(<Button role="switch" />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('ariaExpanded');
  });
});

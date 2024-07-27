import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from '../stories/atoms/Icon/Icon';

describe('Icon', () => {
  it('Should render an svg element', () => {
    render(<Icon iconId="add" />);
    expect(screen.getByRole('graphics-symbol')).toBeInTheDocument();
  });

  it('Should contain the `img` role and the `aria-label` attribute', () => {
    render(<Icon iconId="add" />);
    expect(screen.getByRole('graphics-symbol')).toBeInTheDocument();
    expect(screen.getByRole('graphics-symbol')).toHaveAttribute('aria-label');
  });
});

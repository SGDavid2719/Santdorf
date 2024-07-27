import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IconButton } from '../stories/molecules/IconButton/IconButton';

describe('IconButton', () => {
  it('Should render the icon inside the button', () => {
    render(<IconButton iconId="add" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('graphics-symbol')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../stories/atoms/Input/Input';

describe('Input', () => {
  it("Should render an element of type 'text'", () => {
    render(<Input name="test" placeholder="Input" />);
    expect(screen.getByPlaceholderText('Input')).toBeInTheDocument();
  });

  it('Should change the value', () => {
    render(<Input name="test" placeholder="Input" value="test" />);
    const input = screen.getByLabelText('test') as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'test2' },
    });
    expect(input.value).toBe('test2');
  });
});

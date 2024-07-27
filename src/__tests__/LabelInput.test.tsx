import '@testing-library/jest-dom';
import { LabelInput } from '../stories/molecules/LabelInput/LabelInput';
import { render, screen } from '@testing-library/react';

describe('LabelInput', () => {
  it("Should render an element with a 'LabelInput' label", () => {
    render(<LabelInput name="test" htmlFor="test" label="LabelInput" />);
    expect(screen.getByLabelText('LabelInput')).toBeInTheDocument();
  });

  it("Should render an element with placeholder 'LabelInput'", () => {
    render(
      <LabelInput
        name="test"
        htmlFor="test"
        label="LabelInput"
        placeholder="LabelInput"
      />,
    );
    expect(screen.getByPlaceholderText('LabelInput')).toBeInTheDocument();
  });

  it("Should not render an element with placeholder 'LabelInput'", () => {
    render(
      <LabelInput
        name="test"
        htmlFor="test"
        label="LabelInput"
        placeholder="LabelInput"
        type="checkbox"
      />,
    );
    expect(screen.queryByPlaceholderText('LabelInput')).not.toBeInTheDocument();
  });
});

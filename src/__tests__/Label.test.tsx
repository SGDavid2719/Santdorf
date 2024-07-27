import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Label } from '../stories/atoms/Label/Label';

describe('Label', () => {
  it("Should render an element with the text 'Label'", () => {
    render(
      <>
        <Label label="Label" htmlFor="test" /> <input id="test" />
      </>,
    );
    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });
});

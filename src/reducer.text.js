import {fireEvent, render} from '@testing-library/react';
import { Checkbox } from './reducer';
test("Selecting checkbox should change value true", () => {
    const {getByLabelText} = render (<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
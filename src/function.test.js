import {render} from '@testing-library/react';
import { TimesTwo } from "./function";
import { Star } from "./function";

test("Multiplies by Two", ()=>{
    expect(TimesTwo(4)).toBe(8);
});

test("renders an h1", ()=>{
    const {getByText} = render(<Star/>);
    const h1 = getByText(/Cool star/);
    expect(h1).toHaveTextContent("Cool star")
});
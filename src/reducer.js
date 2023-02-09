import { useReducer } from "react";

export function Checkbox(){
    const [checked, setChecked] = useReducer(
        (checked) => !checked,
        false
    );
    return(
        <div>
            <input type="checkbox" value={checked} onChange={setChecked}  />
            <label>{checked ? "checked":"not checked"}</label>
        </div>
    )
}

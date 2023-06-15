import { useState } from "react";

export function useTextInput() {
    const [value, setValue] = useState("");

    const inputProps = {
        type: "text",
        value: value,
        onChange: (e) => setValue(e.target.value),
    }

    return [value, inputProps];
}
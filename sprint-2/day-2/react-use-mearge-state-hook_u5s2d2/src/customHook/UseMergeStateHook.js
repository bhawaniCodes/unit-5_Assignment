import React, { useEffect, useState } from "react";

export const UseMergeState = (initState) => {
    const [state, setState] = useState(initState);
    return {state, setState}
};

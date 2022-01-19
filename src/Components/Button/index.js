import React from "react";
import { Button } from "./style";


function App({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}
export default App;

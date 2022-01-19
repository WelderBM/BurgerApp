import React from "react";
import { Label } from "./style";

const App = ({children, ...props}) => <Label {...props}>{children}</Label>

export default App
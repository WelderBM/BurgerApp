import React, { forwardRef } from "react";
import { Input } from "./style";

const App = forwardRef((props, ref) => <Input ref={ref} {...props}>{props.children}</Input>)

export default App
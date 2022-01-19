import React from "react";
import { Conteiner } from "./style";

const App = ({children, props}) => <Conteiner {...props}>{children}</Conteiner>

export default App
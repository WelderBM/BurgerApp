import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewOrder from "./Container/newOrder"
import Orders from "./Container/orders"

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="hamburgueria-react/" element={<NewOrder/>}></Route>
                <Route path="hamburgueria-react/Orders" element={<Orders/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
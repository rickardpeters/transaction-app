import React from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";

import StartPage from "./StartPage";
import App from "./App";


function AppRouter() {
    return (
        <BrowseRouter>
            <Routes>
                <Route path="/home" element={
                    <App />
                } />
                <Route path="" element={{}} />
                <Route path="" element={{}} />
            </Routes>
        </BrowseRouter>
    )
}

export default AppRouter
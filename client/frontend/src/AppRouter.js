import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./StartPage";
import AddPage from "./AddPage";
import StoragePage from "./StoragePage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <StartPage />
                } />
                <Route path="/add" element={
                    <AddPage />
                } />
                <Route path="/storage" element={
                    <StoragePage />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
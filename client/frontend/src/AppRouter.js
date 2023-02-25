import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import AddPage from "./pages/AddPage";
import StoragePage from "./pages/StoragePage";

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
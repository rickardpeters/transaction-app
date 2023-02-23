import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./StartPage";
import CarPage from "./CarPage";
import AddPage from "./AddPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <StartPage />
                } />
                <Route path="/cars" element={
                    <CarPage />
                } />
                <Route path="/add" element={
                    <AddPage />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
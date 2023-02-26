import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import AddPage from "./pages/AddPage";
import StoragePage from "./pages/StoragePage";
import LoginPage from "./pages/LoginPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={
                    <StartPage />
                } />
                <Route path="/add" element={
                    <AddPage />
                } />
                <Route path="/storage" element={
                    <StoragePage />
                } />
                <Route path="/login" element={
                    <LoginPage />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
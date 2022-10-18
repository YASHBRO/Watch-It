import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="rooms" element={<Rooms />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;

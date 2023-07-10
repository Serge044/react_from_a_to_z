import React, { useMemo, useRef, useState, useEffect } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { RedirectFunction } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import IsNotExist from "../pages/IsNotExist";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
        <Route path="about" element={<About />} />
        <Route exact path="posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="is_not_exist" element={<IsNotExist />} />
        <Route path="*" element={<Navigate to="/is_not_exist" replace />} />
      </Routes>
    );
};

export default AppRouter;

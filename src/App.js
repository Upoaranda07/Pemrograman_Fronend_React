import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Navbar from "./components/Navbar";

const App = () => {



    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/add" element={<AddStudent />} />
                <Route path="/student/:id" element={<EditStudent />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroducePage from "./pages/introduce/Introduce";
import {Sidebar} from "lucide-react";
import Main1 from "./pages/Main1";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main1 />} />
                <Route path="/introduce" element={<IntroducePage />} />

                <Route
                    path="/admin/*"
                    element={
                        <div style={{ display: "flex", width: "100%" }}>
                            <Sidebar />

                        </div>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    )
}
// const App = () => (
//
// );

export default App;

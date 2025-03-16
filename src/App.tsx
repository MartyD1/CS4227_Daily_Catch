import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

const basePath = import.meta.env.MODE === "production" ? "/CS4227_Daily_Catch" : "";

const App: React.FC = () => {
    return (
        <Router basename={basePath}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

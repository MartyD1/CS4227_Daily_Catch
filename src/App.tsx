import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

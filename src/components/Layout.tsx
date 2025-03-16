import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ paddingTop: "25px" }}>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;

import React from "react";
import AppDrawer from "./AppDrawer";
import bannerImage from "../assets/thedailycatch_banner.svg";

const Navbar: React.FC = () => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#0F243B",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: 1000,
            padding: "0 10px"
        }}>
            <AppDrawer />
            <img
                src={bannerImage}
                alt="The Daily Catch"
                style={{
                    height: "40px",
                    objectFit: "contain"
                }}
            />

            <div style={{ width: "40px" }}></div>
        </div>
    );
};

export default Navbar;

import React from "react";
import AppDrawer from "./AppDrawer";
import bannerImage from "../assets/thedailycatch_banner.svg";
import { useNavigate } from "react-router-dom";
import users from "../data/user.json";

const Navbar: React.FC = () => {
    const navigate = useNavigate();

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
            <img src={bannerImage} alt="The Daily Catch" style={{ height: "40px", objectFit: "contain" }} />

            <select
                onChange={(e) => {
                    if (e.target.value) {
                        navigate(`/profile/${e.target.value}`);
                    }
                }}
                style={{
                    backgroundColor: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                <option value="">Select Profile</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            <div style={{ width: "40px" }}></div>
        </div>
    );
};

export default Navbar;

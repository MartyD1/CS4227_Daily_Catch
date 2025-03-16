import React, { useState } from "react";
import userData from "../data/user.json"; // Simulated database

const Settings: React.FC = () => {
    const [user, setUser] = useState(userData);
    const [name, setName] = useState(user.name);
    const [bio, setBio] = useState(user.bio);

    const handleSave = () => {
        setUser({ ...user, name, bio });
        alert("Profile updated!");
    };

    return (
        <div style={{ width: "100%", minHeight: "100vh", padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
            <h2>Edit Profile</h2>

            <label style={{ display: "block", marginBottom: "10px" }}>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "8px",
                        marginTop: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                />
            </label>

            <label style={{ display: "block", marginBottom: "10px" }}>
                Bio:
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "8px",
                        marginTop: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        height: "80px"
                    }}
                />
            </label>

            <button
                onClick={handleSave}
                style={{
                    backgroundColor: "#0F243B",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Save Changes
            </button>
        </div>
    );
};

export default Settings;

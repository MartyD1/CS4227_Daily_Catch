import React, { useEffect, useState } from "react";

interface ProfileSettingsProps {
    user: {
        name: string;
        bio: string;
        profilePic: string;
    };
    setUser: (user: any) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user, setUser }) => {
    const [formData, setFormData] = useState(user);

    useEffect(() => {
        const savedUser = localStorage.getItem("userProfile");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUser(formData);
        localStorage.setItem("userProfile", JSON.stringify(formData));
    };

    return (
        <form onSubmit={handleSubmit} style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
        }}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
            />
            <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter your bio"
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    resize: "none",
                    height: "80px"
                }}
            />
            <button type="submit" style={{
                backgroundColor: "#3b5998",
                color: "white",
                padding: "10px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}>
                Save Changes
            </button>
        </form>
    );
};

export default ProfileSettings;

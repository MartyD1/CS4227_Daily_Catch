import React, { useState } from "react";
import Post from "../components/Post";
import AnglerLevel from "../components/AnglerLevel";
import userData from "../data/user.json";
import postsData from "../data/posts.json";

const Profile: React.FC = () => {
    const [user] = useState(userData);
    const [posts] = useState(postsData);

    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <div style={{
                paddingTop: "40px",
                maxWidth: "800px",
                margin: "0 auto"
            }}>
                <img
                    src={user.profilePic}
                    alt="Profile"
                    style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        position: "relative",
                        top: "20px",
                        left: "20px",
                        border: "4px solid white",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                    }}
                />
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "5px", marginRight: "10px" }}>{user.name}</h2>
                </div>
                <p style={{ color: "#555", fontSize: "1rem" }}>{user.bio}</p>
                <AnglerLevel level={user.anglerLevel} />
            </div>

            <div style={{
                paddingTop: "20px",
                maxWidth: "800px",
                margin: "0 auto"
            }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>Recent Posts by {user.name}</h3>

                <hr style={{ border: "none", borderTop: "1px solid #0F243B", marginBottom: "20px" }} />

                {posts.map(post => (
                    <Post key={post.id} content={post.content} timestamp={post.timestamp} image={post.image} />
                ))}
            </div>
        </div>
    );
};

export default Profile;

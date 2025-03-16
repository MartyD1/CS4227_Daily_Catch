import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import AnglerLevel from "../components/AnglerLevel";
import users from "../data/user.json";
import posts from "../data/posts.json";

const Profile: React.FC = () => {
    const { userId } = useParams<{ userId?: string }>(); // Get userId from URL
    const [user, setUser] = useState<any>(null);
    const [userPosts, setUserPosts] = useState<any[]>([]);

    useEffect(() => {
        const selectedUser = users.find(u => u.id === Number(userId)) || users[0]; // Default to first user
        setUser(selectedUser);

        const filteredPosts = posts.filter(post => post.userId === selectedUser.id);
        setUserPosts(filteredPosts);
    }, [userId]);

    if (!user) return <p>Loading profile...</p>;

    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <div style={{ paddingTop: "40px", maxWidth: "800px", margin: "0 auto" }}>
                <img
                    src={user.profilePic}
                    alt="Profile"
                    style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "12px",
                        objectFit: "cover",
                        border: "4px solid white",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                    }}
                />
                <h2 style={{ fontSize: "1.8rem", marginTop: "20px" }}>{user.name}</h2>
                <p style={{ color: "#555", fontSize: "1rem" }}>{user.bio}</p>
                <AnglerLevel level={user.anglerLevel} />
            </div>

            <div style={{ paddingTop: "20px", maxWidth: "800px", margin: "0 auto" }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>Recent Posts by {user.name}</h3>
                <hr style={{ border: "none", borderTop: "1px solid #0F243B", marginBottom: "20px" }} />
                {userPosts.length > 0 ? (
                    userPosts.map(post => (
                        <Post key={post.id} content={post.content} timestamp={post.timestamp} image={post.image} />
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;

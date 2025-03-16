import React, { useState } from "react";

interface PostProps {
    content: string;
    timestamp: string;
    image?: string;
}

const Post: React.FC<PostProps> = ({ content, timestamp, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "40px",
            backgroundColor: "#fff",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            {image && (
                <>
                    <div style={{
                        width: "100%",
                        paddingTop: "100%",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }} onClick={handleImageClick}>
                        <img
                            src={image}
                            alt="Post"
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                    {isModalOpen && (
                        <div style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000
                        }}>
                            <div style={{ position: "relative", maxWidth: "20%", maxHeight: "20%"}}>
                                <img src={image} alt="Post" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                                <button
                                    onClick={handleCloseModal}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        backgroundColor: "transparent",
                                        border: "none",
                                        color: "white",
                                        fontSize: "1.5rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
            <p style={{ margin: "0 0 10px" }}>{content}</p>
            <small style={{ color: "#888" }}>{new Date(timestamp).toLocaleString()}</small>
        </div>
    );
};

export default Post;
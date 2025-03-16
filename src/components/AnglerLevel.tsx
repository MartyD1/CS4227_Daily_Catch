import React from "react";
import outlineFish from "../assets/outline_fish.svg";
import solidFish from "../assets/solid_fish.svg";

interface AnglerLevelProps {
    level: number;
}

const AnglerLevel: React.FC<AnglerLevelProps> = ({ level }) => {
    const totalLevels = 4;
    const solidFishIcons = Array(level).fill(solidFish);
    const outlineFishIcons = Array(totalLevels - level).fill(outlineFish);

    const getAnglerTitle = (level: number) => {
        switch (level) {
            case 1:
                return "Beginner Angler";
            case 2:
                return "Amateur Angler";
            case 3:
                return "Professional Angler";
            case 4:
                return "Legendary Angler";
            default:
                return "";
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px 20px"
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {solidFishIcons.map((icon, index) => (
                    <img key={`solid-${index}`} src={icon} alt="Solid Fish" style={{ width: "24px", height: "24px", marginRight: "4px" }} />
                ))}
                {outlineFishIcons.map((icon, index) => (
                    <img key={`outline-${index}`} src={icon} alt="Outline Fish" style={{ width: "24px", height: "24px", marginRight: "4px" }} />
                ))}
            </div>
            <span style={{ marginBottom: "10px" }}>{getAnglerTitle(level)}</span>

        </div>
    );
};

export default AnglerLevel;
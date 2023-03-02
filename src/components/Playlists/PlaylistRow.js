import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./PlaylistRow.css";
function PlaylistRow({ songName, artist, rowIndex }) {
    const [showPlayPauseIcon, setshowPlayPauseIcon] = useState(false);
    const handleHover = (e) => {
        setshowPlayPauseIcon(!showPlayPauseIcon);
    };
    return (
        <div
            className="playlist__entry__row"
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={(e) => handleHover(e)}
        >
            <div
                className="playlist__entry__index"
                style={{
                    fontSize: "18px",
                    marginTop: "0.5rem",
                    marginLeft: "0rem",
                }}
            >
                <span>
                    {showPlayPauseIcon ? (
                        <PlayArrowIcon />
                    ) : (
                        <span>{rowIndex}</span>
                    )}
                </span>
            </div>
            <div className="playlist__entry__song">
                <span>{songName}</span>
                <span>{artist}</span>
            </div>
        </div>
    );
}

export default PlaylistRow;

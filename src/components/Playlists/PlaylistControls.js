import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { PlayCircleFilled } from "@material-ui/icons";
import { MoreHoriz } from "@material-ui/icons";
import { PauseCircleFilled } from "@material-ui/icons";
import "./PlaylistControls.css";

import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { pause, play } from "../../redux/slices/songSlice";
function PlaylistControls() {
    const [favoriteClicked, setFavoriteClicked] = useState(false);
    const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const songIsPlaying = useSelector((state) => state.currentSong.playing);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleFavoriteClick = () => {
        if (favoriteClicked) {
            //animation for un-like
        } else {
            //animation for like
        }
        setFavoriteClicked(!favoriteClicked);
    };

    const handlePlayPauseClick = () => {
        if (songIsPlaying) return dispatch(pause());
        return dispatch(play());
    };
    return (
        <div className="playlist__controls">
            {/* //todo remove inline style */}
            <IconButton onClick={handlePlayPauseClick}>
                {songIsPlaying ? (
                    <PauseCircleFilled style={{ color: "green" }} />
                ) : (
                    <PlayCircleFilled style={{ color: "green" }} />
                )}
            </IconButton>
            <IconButton>
                {!favoriteClicked ? (
                    <Favorite
                        onClick={handleFavoriteClick}
                        style={{ color: "green" }}
                    />
                ) : (
                    <FavoriteBorder onClick={handleFavoriteClick} />
                )}
            </IconButton>

            <div className="playlistOptions__container">
                <IconButton
                    aria-controls="playlistoptions"
                    onClick={handleClick}
                >
                    <MoreHoriz />
                </IconButton>
                <Menu
                    id="playlistoptions"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={(e) => setAnchorEl(null)}
                >
                    <MenuItem
                        onClick={() => console.log("clicked on dropdown item")}
                    >
                        Profile
                    </MenuItem>
                    <MenuItem
                        onClick={() => console.log("clicked on dropdown item")}
                    >
                        My account
                    </MenuItem>
                    <MenuItem
                        onClick={() => console.log("clicked on dropdown item")}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </div>

            {/* {moreOptionsOpen ? <PlaylistDropDown anchorEl={anchorEl} /> : <></>} */}
        </div>
    );
}

export default PlaylistControls;

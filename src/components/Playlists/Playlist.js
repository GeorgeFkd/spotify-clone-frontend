import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./Playlist.css";
// import { useState } from "react";
import PlaylistRow from "./PlaylistRow";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistControls from "./PlaylistControls";
import { useHistory } from "react-router-dom";
function Playlist(props) {
    let history = useHistory();
    console.log(history);
    return (
        <div className="playlist">
            <PlaylistTitle
                listType="ΑΛΜΠΟΥΜ"
                listName="Inhuman Rampage"
                listCreator="DragonForce"
                numOfSongs={8}
                minutes={55}
                seconds={52}
                yearOfRelease={2006}
            />
            <PlaylistControls />
            <div className="playlist__allsongs">
                <div className="playlist__allsongs__title">
                    <span>#</span>
                    <span>ΤΙΤΛΟΣ </span>
                    <div className="playlist__allsongs__title__right">
                        <AccessTimeIcon />
                    </div>
                </div>
                <hr></hr>
                <div className="playlist__allsongs__entries">
                    <PlaylistRow
                        songName="Through The Fire And Flames"
                        artist="DragonForce"
                        rowIndex="2"
                    />
                    <PlaylistRow
                        songName="Through The Fire And Flames"
                        artist="DragonForce"
                        rowIndex="2"
                    />
                </div>
            </div>
        </div>
    );
}

export default Playlist;

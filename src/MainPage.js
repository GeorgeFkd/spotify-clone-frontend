import React, { useState } from "react";
import "./MainPage.css";

import PlaylistCard from "./components/Playlists/PlaylistCard";
import AppTopBar from "./AppTopBar";
function MainPage() {
    return (
        <div className="mainpage">
            {/* find out a way to properly set the layout this one works like god,in mysterious ways*/}
            <div className="mainpage__recent__playlists">
                <div className="mainpage__recent__playlists__title">
                    <p>Καλησπέρα</p>
                </div>
                <div className="mainpage__recent__playlists"></div>
                <PlaylistCard playlistTitle="goodshit1" />
                <PlaylistCard playlistTitle="goodshit2" />
                <PlaylistCard playlistTitle="goodshit3" />
                <PlaylistCard playlistTitle="goodshit4" />
            </div>
        </div>
    );
}

export default MainPage;

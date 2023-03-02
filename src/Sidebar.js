import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useSelector } from "react-redux";
function Sidebar() {
  const playlists = useSelector((state) => state.playlists);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__logo">
          <img src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" />
          <p>Spotify</p>
        </div>
        <div className="sidebar__top__options">
          <SidebarOption key="home" Icon={HomeIcon} text="Αρχική" />
          <SidebarOption key="search" Icon={SearchIcon} text="Αναζήτηση" />
          <SidebarOption
            key="library"
            Icon={LibraryMusicIcon}
            text="Βιβλιοθήκη"
          />

          <div className="divider"></div>
          <SidebarOption
            key="library"
            Icon={AddCircleOutlineIcon}
            text="Δημιουργία playlist"
          />
          <SidebarOption
            key="library"
            Icon={FavoriteIcon}
            text="Τραγούδια που σου αρέσουν"
          />
        </div>
      </div>

      <hr className="hr"></hr>
      <div className="sidebar__playlists">
        {playlists.map((playlist) => {
          return <p>{playlist.name}</p>;
        })}

        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
        <p>playlist 1</p>
      </div>
      <div className="sidebar__downloadapp">
        <GetAppIcon />
        <p>Εγκατάσταση Εφαρμογής</p>
      </div>
    </div>
  );
}

export default Sidebar;

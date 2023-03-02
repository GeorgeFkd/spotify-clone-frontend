import React from "react";
import { Avatar } from "@material-ui/core";
import "./PlaylistTitle.css";
function PlaylistTitle({
  listType,
  listName,
  listCreator,
  numOfSongs,
  minutes,
  seconds,
  yearOfRelease,
}) {
  return (
    <div className="playlist__top">
      <img src="https://gis.scdn7.secure.raxcdn.com/mediaLibrary/images/english/3349-large.jpg" />
      <div className="playlist__top__title">
        <span>{listType}</span>
        <p>{listName}</p>
        <div className="playlist__top__info">
          <Avatar
            imgProps={{ draggable: false }}
            src="https://pbs.twimg.com/profile_images/1272051517466357760/IQKfU2ze_400x400.jpg"
          />
          <span>{listCreator}</span>
          <ul>
            {yearOfRelease && <li> &bull;{yearOfRelease}</li>}

            <li>
              &nbsp; &bull;{numOfSongs}songs,{minutes}mins {seconds} secs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaylistTitle;

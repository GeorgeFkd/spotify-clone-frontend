import React, { useState } from "react";
import "./PlaylistCard.css";
import Paper from "@material-ui/core/Paper";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function PlaylistCard({ name, playlistTitle }) {
  const [playSong, setplaySong] = useState(false);
  //to playsong να γραφτει λιγο καλυτερα
  return (
    <Paper
      className="playlistCard"
      elevation={2}
      onMouseEnter={(e) => setplaySong(!playSong)}
      onMouseLeave={(e) => setplaySong(!playSong)}
    >
      <img src="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg" />
      <p className="playlistCard__title">{playlistTitle}</p>
      {playSong ? <PlayCircleFilledIcon /> : <></>}
    </Paper>
  );
}

export default PlaylistCard;
